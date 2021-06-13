import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CartFooter from "../../components/CartFooter/CartFooter";
import CartHeader from "../../components/CartHeader/CartHeader";
import EmptyContainer from "../../components/EmptyContainer/EmptyContainer";
import ProductCart from "../../components/Product/ProductCart/ProductCart";
import {
  fetchItemsFromCart,
  removeItemFromCart,
  updateItemInCart,
} from "../../redux/cart/cartActionCreator";
import { TOTAL_PRICE } from "../../redux/cart/cartType";
import { addItemsToBuy } from "../../redux/itemsToBuy/itemsToBuyActions";
import "./Cart.scss";

const Cart = ({
  cartProducts,
  getItems,
  removeItem,
  buyNowClicked,
  addItemsToBuy,
  updateItemInCart,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => getItems(), []);

  const proceedToPayEvent = () => {
    dispatch({
      type: TOTAL_PRICE,
      payload: totalPrice(),
    });
    history.push("/checkout");
    addItemsToBuy(cartProducts);
  };

  const onBuyNowClick = (event) => {
    const selectedProduct = cartProducts[event.target.id];

    buyNowClicked(selectedProduct.price);
    addItemsToBuy([selectedProduct]);
    history.push("/checkout");
  };

  const removeClicked = (e) => {
    const productIdToRemove = cartProducts[e.currentTarget.id].id;
    removeItem(productIdToRemove);
  };

  const onUnitChange = (e) => {
    let cartProduct = cartProducts[e.currentTarget.id];
    cartProduct.unit = e.currentTarget.value;
    updateItemInCart(cartProduct);
  };

  const productComponent = cartProducts.map((product, index) => {
    return (
      <CSSTransition
        key={`cartProducts-${product.id}`}
        timeout={{ appear: 1000, enter: 1000, exit: 500 }}
        classNames={"product-cart-animation-rotate-"}
      >
        <ProductCart
          key={product.id}
          {...product}
          index={index}
          removeClicked={removeClicked}
          onBuyNowClick={onBuyNowClick}
          onUnitChange={onUnitChange}
          showDelete={true}
        />
      </CSSTransition>
    );
  });

  const totalPrice = () => {
    let sum = 0;
    cartProducts.forEach((element) => {
      sum = sum + element.price * element.unit;
    });
    return sum;
  };

  return (
    <>
      <div className="container">
        <CartHeader />
        {productComponent.length === 0 ? (
          <EmptyContainer message="No items in cart to display" />
        ) : (
          <>
            <TransitionGroup>{productComponent}</TransitionGroup>
            <CartFooter
              totalPrice={totalPrice}
              proceedToPayEvent={proceedToPayEvent}
            />
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { cartProducts: state.cart.itemsInCart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(fetchItemsFromCart()),
    removeItem: (id, index) => dispatch(removeItemFromCart(id)),
    buyNowClicked: (price) =>
      dispatch({
        type: TOTAL_PRICE,
        payload: price,
      }),
    addItemsToBuy: (products) => dispatch(addItemsToBuy(products)),
    updateItemInCart: (cartProduct) => dispatch(updateItemInCart(cartProduct)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
