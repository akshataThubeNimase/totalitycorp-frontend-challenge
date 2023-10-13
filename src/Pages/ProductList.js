import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs"
import '../Styles/ProductList.css';

const ProductList = (state) => {

    const [products, setProducts] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState();
    const [selectedProduct, setSelectedProduct] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    //console.log('fake');

    useEffect(() => {
        getProducts();
        getAmazonItems();
    }, [])

    async function getAmazonItems(){
        const axios = require('axios');

        const options = {
            method: 'GET',
            url: 'https://amazon-data.p.rapidapi.com/asin.php',
            params: {
                asin: 'B07FZ8S74R',
                region: 'us'
            },
            headers: {
                'X-RapidAPI-Key': '42829b8e1bmshfee7a6692448be5p1f11f8jsnb6cc24fa9924',
                'X-RapidAPI-Host': 'amazon-data.p.rapidapi.com'
            }
        }

        try {
            const response = await axios.request(options);
            console.log('Amazon Data', response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function getProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        // console.log(response);
        const jsonData = await response.json();
        console.log("DATA", jsonData);
        setProducts(jsonData);
        const data = filterDataBasedOnCategory(location.state.selectedCategory, jsonData);
        console.log("filteredData", data);
        setFilteredProduct(data);
        console.log('location', location)
        //men's clothing
        //women's clothing
        //other
    }

    function addToCart(item) {
        const tempArray = cartItems;
        tempArray.push(item);

        setCartItems(tempArray);
        console.log("cart Items", cartItems);
    }

    function goToCart() {
        navigate('/cart', { state: { selectecCartItems: cartItems } });
        console.log("cart items", cartItems);
    }

    function filterDataBasedOnCategory(category, allData) {
        let data = [];
        switch (category) {
            case 'men': data = allData.filter(item => item.category === "men's clothing")
                break;
            case 'women': data = allData.filter(item => item.category === "women's clothing")
                break;
            default: data = allData.filter(item => (item.category !== "men's clothing" && item.category !== "women's clothing"))
                break;
        }
        return data;
    }

    const getTitle = (category) => {
        if (!category) {
            return;
        }
        let title = "Other Items";
        if (category === 'men') {
            title = "Mens Clothing";
        } else if (category === 'women') {
            title = "Womens Clothings";
        }
        return title;
    }

    return <> <h2>{getTitle(location.state.selectedCategory)}</h2>
        {/* <h4> selected Category: {location.state.selectedCategory || 'Empty'}</h4> */}

        {/* <h4> selected Product: {selectedProduct?.title || 'Empty'}</h4> */}
        <button onClick={() => goToCart()} style={{ backgroundColor: 'yellow' }}>GoTo-Cart</button>
        <div className="container">
            {filteredProduct?.map((item) => {
                return (
                    <>
                        <div className="box" onClick={() => setSelectedProduct(item)}>
                            <div className="content" >
                                <h5 className="product-h">{item.title}</h5>
                                <p className="product-p">{item.description}</p>
                            </div>
                            <img src={item.image} alt="" />
                            <h5 style={{ backgroundColor: "yellow" }}>Price: {item.price}</h5>
                            <button onClick={() => addToCart(item)} style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, color: 'white' }}>Add To Cart&nbsp;&nbsp;&nbsp;&nbsp;<BsFillCartPlusFill /></button>
                        </div>
                    </>
                )
            })}
        </div>
    </>
}
export default ProductList;