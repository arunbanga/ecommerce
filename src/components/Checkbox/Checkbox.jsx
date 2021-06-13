import './Checkbox.scss'

const Checkbox = (props) => {
    return (
    <>
    <label className="checkbox-container my-2">{props.value}
        <input type="checkbox" />
        <span className="checkmark"></span>
    </label>
        </>
    )
}

export default Checkbox;