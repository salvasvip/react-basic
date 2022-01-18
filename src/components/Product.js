import {Fragment} from "react";

const Product = ({product}) => {
    const {name, price, id} = product
    return (
        <Fragment>
            <h2>{name}</h2>
            <p>${price}</p>
        </Fragment>
    )
}

export default Product