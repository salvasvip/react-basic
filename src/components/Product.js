import {Fragment} from "react";

const Product = ({product, products, cart, addProduct}) => {
    const {name, price, id} = product
    const selectProduct = id => {
        const selectedProduct = products.filter(product => product.id === id)[0]
        addProduct([
            ...cart, selectedProduct
        ])
    }
    return (
        <Fragment>
            <h2>{name}</h2>
            <p>${price}</p>
            <button type="button" onClick={() => selectProduct(id)}>Comprar</button>
        </Fragment>
    )
}

export default Product