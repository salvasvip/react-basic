import Product from "./Product";
import {Fragment} from "react";
import './cart.css'

const Cart = ({cart}) => (
    <Fragment>
        <div className="cart">
            <h2>Shopping Cart</h2>
            {(cart.length === 0) ?
                <p>There are no items in the cart</p> :
                cart.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                    />
                ))
            }
        </div>
    </Fragment>
)

export default Cart