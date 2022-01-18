import {Fragment} from "react";

const Product = ({product}) => {
    const {name, price, id} = product
    const selectProduct = id => {
        console.log(`buying product ${id}`)
    }
    return (
        <Fragment>
            <h2>{name}</h2>
            <p>${price}</p>
            <button type="button" onClick={()=>selectProduct(id)}>Comprar</button>
        </Fragment>
    )
}

export default Product