import {Fragment} from "react";

const Product = ({product, products, cart, addProduct}) => {
    const {name, price, id} = product
    const selectProduct = id => {
        const selectedProduct = products.filter(product => product.id === id)[0]
        addProduct([
            ...cart, selectedProduct
        ])
    }
    const deleteProduct = id => {
        const deletedProduct = cart.filter(product => product.id !== id)
        addProduct(deletedProduct)
    }
    return (
        <Fragment>
            <h2>{name}</h2>
            <p>${price}</p>
            {products ?
                <button type="button" onClick={() => selectProduct(id)}>Buy</button> :
                <button type="button" onClick={() => deleteProduct(id)}>Delete</button>
            }
        </Fragment>
    )
}

export default Product