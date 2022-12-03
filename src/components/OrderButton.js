import "./OrderButton.css"

const OrderButton = () => {
    const testFunction = () => {
        console.log("Objednane")
    }

    return (
        <button type="button" className="btn" onClick={testFunction}>Objednat</button>
    )
}

export default OrderButton