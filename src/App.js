import {Fragment, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
    const [products, setProducts] = useState([
        {id: 1, name: 'React Shirt', price: 50},
        {id: 2, name: 'VueJS Shirt', price: 40},
        {id: 3, name: 'Node.js Shirt', price: 30},
        {id: 4, name: 'Angular Shirt', price: 20}
    ])
    const date = new Date().getFullYear()
    return (
        <Fragment>
            <Header title='Online Shop'/>
            <h1>List of Products</h1>
            {products.map(product => (
                <Product key= {product.id} product={product}/>
            ))}
            <Footer date={date}/>
        </Fragment>
    )
}

export default App
