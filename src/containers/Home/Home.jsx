import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeBannersOne from "../../components/Banners/HomeBannersOne/HomeBannersOne";
import HomeBannerTwo from "../../components/Banners/HomeBannerTwo/HomeBannerTwo";
import Carousel from "../../components/Carousel/Carousel";
import ProductMin from "../../components/Product/ProductMin/ProductMin";
import "./Home.css";
import * as ProductActions from "../../redux/product/productActionCreator";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(ProductActions.fetchProductsByFamily());
  }, []);

  return (
    <>
      <div className="container w-100 h-50 my-3">
        <Carousel />
      </div>
      <HomeBannersOne />
      <div className="container">
        <div className="row justify-content-center">
          {products.map((product) => {
            return <ProductMin {...product} />;
          })}
        </div>
      </div>
      <HomeBannerTwo />
    </>
  );
};

export default Home;
