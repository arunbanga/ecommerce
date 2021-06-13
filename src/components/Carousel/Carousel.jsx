const Carousel = () => (<div
id="carouselExampleControls"
className="carousel slide"
data-bs-ride="carousel"
>
<ol className="carousel-indicators">
  <li
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="0"
    className="active bg-danger"
  ></li>
  <li
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="1"
    className="bg-danger"
  ></li>
  <li
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="2"
    className="bg-danger"
  ></li>
</ol>
<div className="carousel-inner border border-light border-danger">
  <div className="carousel-item active">
    <div className="d-flex justify-content-center">
      <img
        src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/1.jpg"
        className="d-block"
        alt="..."
        height="350"
        width="350"
      />
    </div>
  </div>
  <div className="carousel-item">
    <div className="d-flex justify-content-center">
      <img
        src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/2.jpg"
        className="d-block"
        alt="..."
        height="350"
        width="350"
      />
    </div>
  </div>
  <div className="carousel-item">
    <div className="d-flex justify-content-center">
      <img
        src="https://htmldemo.hasthemes.com/junno-preview/junno/assets/img/slider/thumb/3.jpg"
        className="d-block"
        alt="..."
        height="350"
        width="350"
      />
    </div>
  </div>
</div>
<a
  className="carousel-control-prev "
  href="#carouselExampleControls"
  role="button"
  data-bs-slide="prev"
>
  <span
    className="bg-danger rounded-circle p-3"
    aria-hidden="true"
  ></span>
  <span className="visually-hidden">Previous</span>
</a>
<a
  className="carousel-control-next"
  href="#carouselExampleControls"
  role="button"
  data-bs-slide="next"
>
  <span
    className="bg-danger rounded-circle p-3"
    aria-hidden="true"
  ></span>
  <span className="visually-hidden">Next</span>
</a>
</div>
)

export default Carousel;