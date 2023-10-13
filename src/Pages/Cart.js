import React, { useState, useEffect } from "react";
import {  useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const routeChange=()=>{
        let path='../checkout'
        navigate(path);
    }

    const [cartData, setCartData] = useState([]);
    const location = useLocation();
    const [total, setTotal] = useState();

    useEffect(() => {
        setCartData(location.state?.selectecCartItems);
        let tempTotal = 0;
        for (let i = 0; i < cartData?.length; i++) {
            tempTotal += cartData[i].price;
        }
        setTotal(tempTotal);
    },[cartData,location])
    // console.log("cart page", location.state.selectecCartItems);

    return <><h1>This is Cart Page</h1>
       {cartData?.length ? <div className="container">
            {cartData?.map((item) => {
                return (
                    <>
                        <div className="box">
                            <div className="content" >
                                <h5>{item.title}</h5>
                            </div>
                            <img src={item.image} alt="" />
                            <h5 style={{ backgroundColor: "yellow" }}>Price: {item.price}</h5>
                        </div>
                    </>
                )
            })}

            <h1>Total:{total}</h1>
            <button onClick={routeChange} style={{ backgroundColor: 'skyBlue', height: 50, padding: 10, borderRadius: 5, textAlign: "center", color: "white", fontSize: 20, fontWeight: 800 }}>Buy Now</button>
        </div>:
        <h2>Cart is Empty...! Please select Products :)<a href="/"> Shop Now </a></h2>
        }
    </>

}
export default Cart;