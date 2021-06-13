import './Button.scss'

const Button = (props) => {
    return (
        <button
        className="btn theme-btn--dark rounded-5"
        data-toggle="modal"
        data-target="#add-to-cart"
        {...props}
      >
        Buy Now
      </button>)
}

export default Button;