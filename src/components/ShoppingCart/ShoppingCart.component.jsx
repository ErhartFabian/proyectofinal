import React from "react";
import './ShoppingCart.css';



function ShoppingCart(props) {

    let aux1 = JSON.parse(localStorage.getItem("itemsCar"));
    const aux=aux1;
    let total = 0;
    //sumar todos los precios de los articulos
    for (let i = 0; i < aux.length; i++) {
        total += aux[i].price;
    }
    window.localStorage.setItem("total", parseFloat(total).toFixed(2));

    const goToInventory = () => {
        window.location.href = "/inventory";
    }
    //go to home page
    const goToHome = () => {
        window.location.href = "/home";
    }
    // go to paymentprocess page
    const goToPaymentProcess = () => {
        window.location.href = "/paymentprocess";
    }


    //funcion para limpiar el carrito
    const clearCart = () => {
        props.setCartCount([]);
        window.localStorage.setItem("numberCar", 0);
        window.localStorage.setItem("itemsCar", JSON.stringify([]));
    }

    //Faltó implementar :(
    //añadir articulo actual al carrito
    // const addToCart = (event) => {

    //     var items = [...aux];

    //     console.log(event.target);
    //     for (let i = 0; i < items.length; i++) {
    //         if (items[i].id === parseInt(event.target.name)) {
    //             items[i].quantity += 1;
    //             total += aux[i].price;
    //         }
    //     }
    //     setAux(items);

    // }

    //eliminar articulo actual del carrito. No funcionó :(

    // const removeFromCart = (event) => {

    //     var items = [...aux];

    //     console.log(event.target);
    //     for (let i = 0; i < items.length; i++) {
    //         console.log("id", items[i].id);
    //         console.log("name", event.target.name);
    //         if (items[i].id === parseInt(event.target.name)) {
    //             items[i].quantity -= 1;
    //             total -= aux[i].price;
    //         }
    //     }
    //     setAux(items);
    // }

    return (
        <div className="shoppingCart">
            <div className="columns">
                <div className="columns_left">
                    <h1>Epshop</h1>
                </div>

                <div className="columns_right">
                    <button className="column" onClick={goToHome}>
                        Home
                    </button>
                    <button className="column" onClick={goToInventory} >
                        Inventory
                    </button>
                    <button className="column" onClick={goToInventory} >
                        About us
                    </button>

                </div>
            </div>
            <h1>Shopping Cart</h1>
            <div className="cart">
                <div className="items">
                    {

                        aux.map((item) => {
                            return (
                                <div className="item" key={item.id}>
                                    <div className="item-img">
                                        <img src={item.image} alt="" height="100px"></img>
                                    </div>
                                    <div className="item-info">
                                        <h4>{item.title}</h4>
                                        <h4>&#36;{item.price}</h4>
                                    </div>
                                    <div className="quantity">
                                        <p>Quantity: {item.quantity}</p>
                                    </div>
                                    <div className="item-add-delete">
                                        <button name={item.id}><b>+</b></button>
                                        <button name={item.id} >-</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="total">
                    <p>Total items</p>
                    <h4>{aux.length}</h4>
                    <p>Total payment</p>
                    <h4>&#36;{parseFloat(total).toFixed(2)}</h4>
                    <div className="checkout">
                        <button onClick={goToPaymentProcess} >Checkout</button>
                        <button onClick={clearCart} >Cancel</button>

                    </div>

                </div>
            </div>
        </div>
    )


}

export default ShoppingCart;