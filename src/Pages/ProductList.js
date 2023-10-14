import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs"
import '../Styles/ProductList.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Snackbar,Alert} from '@mui/material'


const mystyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ProductList = (state) => {

    const [products, setProducts] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState();
    const [selectedProduct, setSelectedProduct] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [toastStatus,setToastStatus] = useState(false);


    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleToastClose=()=>{
        setToastStatus(false);
    
        }
    //console.log('fake');

    useEffect(() => {
        getProducts();
    }, [])

    async function getProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        console.log("DATA", jsonData);
        setProducts(jsonData);
        const data = filterDataBasedOnCategory(location.state.selectedCategory, jsonData);
        setFilteredProduct(data);
    }

    function addToCart(item) {
        const tempArray = cartItems;
        tempArray.push(item);
        setCartItems(tempArray);
        setToastStatus(true);
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
        return data.filter(item => item.id !== 1);
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

    const showDescription = (item) => {
        setSelectedProduct(item);
        setOpen(true);
    }

    return <>

        <div className="row mt-5">
            <div className="col-10">
            <h2>{getTitle(location.state.selectedCategory)}</h2>
            </div>
        <div className="col-2 pr-5">
        <button onClick={() => goToCart()} style={{ backgroundColor: 'yellow',height: 50, padding: 10, borderRadius: 5, textAlign: "center", color: "black", fontSize: 20, fontWeight: 800 }}>GoTo Cart <BsFillCartPlusFill size={30} /></button>
            </div>
        </div>
        <div className="row container m-5">
            {filteredProduct?.map((item) => {
                return (
                    <>
                        <div className="col-3 box m-5 pb-3">
                            <div className="content" >
                                <h5 className="product-h">{item.title}</h5>
                                 <p className="product-p">{item.description}</p><span style={{ cursor: "pointer" }} onClick={() => showDescription(item)}>see more..</span>
                                

                            </div>
                            <img  src={item.image} alt="" />
                            <h5 style={{ backgroundColor: "yellow" }}>Price: {item.price}</h5>
                            <button onClick={() => addToCart(item)} style={{ backgroundColor: 'green', padding: 10, borderRadius: 5, color: 'white' }}>Add To Cart&nbsp;&nbsp;&nbsp;&nbsp;<BsFillCartPlusFill /></button>
                        </div>
                    </>
                )
            })}
        </div>

        <div style={{ justifyContent: 'center' }}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={mystyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Item Description          </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                       <p className="product-p-modal"> {selectedProduct.description}</p>
                    </Typography>
                </Box>
            </Modal>
        </div>

        <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
        open={toastStatus}
        autoHideDuration={3000}
        onClose={handleToastClose}
        message="Item added to the Cart.."
        key={"test"}
      />
    </>
}
export default ProductList;