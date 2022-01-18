import {Fragment, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
    const [products, saveProducts] = useState([
        {id: 1, name: 'React Shirt', price: 50},
        {id: 2, name: 'VueJS Shirt', price: 40},
        {id: 3, name: 'Node.js Shirt', price: 30},
        {id: 4, name: 'Angular Shirt', price: 40}
    ])

    const [cart, addProduct] = useState([])

    const date = new Date().getFullYear()
    return (
        <Fragment>
            <Header title='Online Shop'/>
            <h1>List of Products</h1>
            {products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    cart={cart}
                    products={products}
                    addProduct={addProduct}/>
            ))}
            <Cart cart={cart}/>
            <Footer date={date}/>
        </Fragment>
    )
}

export default App
