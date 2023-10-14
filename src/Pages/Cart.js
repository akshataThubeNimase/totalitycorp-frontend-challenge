import React, { useState, useEffect, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../Styles/Cart.css';


const Cart = () => {
    const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);
    const [sortedCartData, setSortedCartData] = useState([]);
    const location = useLocation();
    const [total, setTotal] = useState();
    const [quantityData, setQuantityData] = useState();
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    




    useEffect(() => {
        setCartData(location.state?.selectecCartItems);
        let tempData = cartData;
        console.log('tempData 1', tempData)

        let tempTotal = 0;
        let updatedArray = [];
        tempData?.forEach(item => {
            item['quantity'] = 1;
            updatedArray.push(item);
        });
        setSortedCartData(updatedArray);
        calculateTotal();
        for (let i = 0; i < cartData?.length; i++) {
            tempTotal += cartData[i].price * cartData[i].quantity;
        }
        setTotal(tempTotal);
    }, [cartData, location])

    const goToCheckout = () => {
        navigate('/Checkout', { state: { itemTotal: total } });
    }

    const calculateTotal = () => {
        const data = sortedCartData;
        let tempTotal = 0;
        data.forEach(item => {
            tempTotal += item.price * item.quantity;
        })
        setTotal(tempTotal.toFixed(2));
    }

    const updateItemQty = (product, action) => {
        let tempArray = sortedCartData;
        if (product.quantity === 1 && action === 'decr') {
            tempArray = tempArray.filter(item => item.id !== product.id);
        } else {
            const index = tempArray.indexOf(product);
            tempArray[index].quantity = action === 'incr' ? tempArray[index].quantity + 1 : tempArray[index].quantity - 1;
        }
        console.log('updateItemQty tempArray', tempArray);

        setSortedCartData(tempArray);
        calculateTotal();
        forceUpdate();
        console.log('sortedArrayData tempArray', sortedCartData)
    }


    return <>
        {sortedCartData?.length ? <div className="row container m-5">
            {sortedCartData?.map((item) => {
                return (
                    <>
                        <div className="col-3 m-3 box" key={item.quantity + item.title}>
                            <div className="content" >
                                <h5>{item.title}</h5>
                            </div>
                            <img src={item.image} alt="" />
                            <h5 style={{ backgroundColor: "yellow" }}>Price: {item.price}</h5>
                            <div className="row m-2">
                                <h5 className="col-6">Quantity:  {item.quantity}</h5>  <button className="col-2 m-1" style={{ backgroundColor: 'green', color: 'white', textAlign: 'center' }} onClick={() => updateItemQty(item, 'incr')}> + </button><button style={{ backgroundColor: 'red', color: 'white' }} className="col-2 m-1" onClick={() => updateItemQty(item, 'decr')}> - </button>
                            </div>

                        </div>
                    </>
                )
            })}
            <div className="row mt-5">
                <h1 className="col-sm-4 col-md-3 ">Total:{total}</h1>
                <button className="col-4" onClick={goToCheckout} style={{ backgroundColor: 'skyBlue', height: 50, padding: 10, borderRadius: 5, textAlign: "center", color: "white", fontSize: 20, fontWeight: 800, width: 300 }}>Buy Now</button>
            </div>
        </div> :
            <h2>Cart is Empty...! Please select Products :)<a href="/"> Shop Now </a></h2>
        }

    </>

}
export default Cart;