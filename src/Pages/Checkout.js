import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import '../Styles/Checkout.css';

const Checkout = () => {
    const navigate = useNavigate();

    const [total, setTotal] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [cardnumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const location = useLocation();

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTotal(location.state.itemTotal);
    }, []);

    const handleCvv = (e) => {
        setCvv(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handleMobile = (e) => {
        setMobile(e.target.value);
        setSubmitted(false);
    }

    const handleCardNumber = (e) => {
        setCardNumber(e.target.value);
        setSubmitted(false);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cardnumber === '' || email === '' || cvv === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);

            setTimeout(() => {
                let path = `../thankyou`;
                navigate(path);
            }, 2000)


        }
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <p>Payment successfull !!</p>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <p>Please enter all the fields</p>
            </div>
        );
    };



    return <>
        <div className="checkout-container">
            
            <form>
            <h2 className="m-1" style={{color:'blue'}}>Payment Details</h2>

               <h5 style={{backgroundColor:'yellow'}}>Your Item total: {total}</h5>

                <div class="form-group">
                    <label for="exampleInputAddress">Shipping Address</label>
                    <textarea type="address" class="form-control" onChange={handleAddress} value={address} id="exampleInputaddress" placeholder="Enter Your address"></textarea>
                </div><br />
                <div class="form-group">
                    <label for="exampleInputEmail1">Email ID</label>
                    <input type="email" class="form-control" onChange={handleEmail} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div><br />
                <div class="form-group">
                    <label for="exampleInputEmail1">Mobile Number</label>
                    <input type="number" class="form-control" onChange={handleMobile} value={mobile} id="exampleInputNumber" aria-describedby="numberHelp" placeholder="Enter Mobile Number"></input>
                </div><br />
                <div class="form-group">
                    <label for="exampleInputEmail1">Card Number</label>
                    <input type="number" class="form-control" onChange={handleCardNumber} value={cardnumber} id="exampleInputCard" aria-describedby="cardHelp" placeholder="Enter Card Number"></input>
                </div><br />
                <div class="form-group">
                    <label for="exampleInputEmail1">cvv</label>
                    <input type="number" class="form-control" onChange={handleCvv} value={cvv} id="exampleInputCVV" aria-describedby="cvvHelp" placeholder="Enter CVV "></input>
                </div><br />
                <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
            </form>
        </div>
    </>
}
export default Checkout;