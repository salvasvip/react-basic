import {Fragment} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const date = new Date().getFullYear()
    return (
        <Fragment>
            <Header title='Online Shop'/>
            <Footer date={date}/>
        </Fragment>
    )
}

export default App
