import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import Checkbox from "../../components/Checkbox/Checkbox";
import SidebarListItem from "../../components/ListItem/SidebarListItem/SidebarListItem";
import NavigationBarMin from "../../components/NavigationBar/NavigationBarMin/NavigationBarMin";
import ProductMax from "../../components/Product/ProductMax/ProductMax";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  addItemToCart,
  fetchItemsFromCart,
  removeItemFromCart,
  updateItemInCart,
} from "../../redux/cart/cartActionCreator";
import { startTimer, stopTimer } from "../../redux/cart/cartActions";
import { TOTAL_PRICE } from "../../redux/cart/cartType";
import { addItemsToBuy } from "../../redux/itemsToBuy/itemsToBuyActions";
import {
  fetchProductsByFamily,
  fetchProductFamilies,
} from "../../redux/product/productActionCreator";
import "./Products.scss";

const Products = ({
  addItem,
  products,
  fetchProducts,
  fetchProductFamilies,
  productFamilies,
  buyNowClicked,
  addItemsToBuy,
  cartProducts,
  timer,
  startTimer,
  stopTimer,
}) => {
  const history = useHistory();

  useEffect(() => {
    fetchProducts();
    fetchProductFamilies();
  }, []);

  const addToCartClick = (e) => {
    const { currentTarget } = e;
    if (timer === false) {
      startTimer();
      setTimeout(() => {
        const productSelected = products[currentTarget.id];
        const cartProduct = cartProducts.find(
          (product) => product.productId === productSelected?.id
        );
        if (cartProduct === null || cartProduct === undefined) {
          addItem({
            productName: productSelected.productName,
            productImage: productSelected.productImage,
            price: productSelected.price,
            productId: productSelected.id,
            unit: 1,
          });
        } else {
          stopTimer();
        }
      }, 300);
    }
  };

  const onFamilyClick = (event) => {
    fetchProducts(event.target.id);
  };

  const onBuyNowClick = (event) => {
    const selectedProduct = products[event.target.id];
    buyNowClicked(selectedProduct.price);
    addItemsToBuy([{ ...selectedProduct, unit: 1 }]);
    history.push("/checkout");
  };

  const families = useCallback(
    productFamilies.map((productFamilies) => {
      return (
        <SidebarListItem
          key={productFamilies.familyName}
          {...productFamilies}
          onFamilyClick={onFamilyClick}
        />
      );
    }),
    [productFamilies]
  );

  let sizes = ["S", "M", "L"];
  const checkBoxes = useCallback(
    sizes.map((size) => {
      return <Checkbox key={size} value={size} />;
    }),
    [productFamilies]
  );

  const productsComponent = products.map((product, index) => {
    return (
      <ProductMax
        key={product.id}
        {...product}
        addToCartOnClick={addToCartClick}
        index={index}
        onBuyNowClick={onBuyNowClick}
      />
    );
  });

  return (
    <>
      <div className="container">
        <NavigationBarMin />
        <div className="row mx-1 my-3">
          <div className="col-lg-2 col-xl-3 d-none d-lg-block">
            <Sidebar families={families.reverse()} checkBoxes={checkBoxes} />
          </div>
          <div className="col-lg-9 col-xl-9 p-0">{productsComponent}</div>
        </div>
        {/* <Pagination
          onNext={fetchNextProducts}
          onPrevious={fetchPreviousProducts}
          activePage={activePage.data}
        /> */}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    productFamilies: state.products.productFamilies,
    cartProducts: state.cart.itemsInCart,
    timer: state.cart.timer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(fetchItemsFromCart()),
    removeItem: (data) => dispatch(removeItemFromCart(data)),
    addItem: (data) => dispatch(addItemToCart(data)),
    fetchProducts: (data) => dispatch(fetchProductsByFamily(data)),
    fetchProductFamilies: () => dispatch(fetchProductFamilies()),
    buyNowClicked: (price) =>
      dispatch({
        type: TOTAL_PRICE,
        payload: price,
      }),
    addItemsToBuy: (products) => dispatch(addItemsToBuy(products)),
    updateItemInCart: (cartProduct) => dispatch(updateItemInCart(cartProduct)),
    startTimer: () => dispatch(startTimer()),
    stopTimer: () => dispatch(stopTimer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
