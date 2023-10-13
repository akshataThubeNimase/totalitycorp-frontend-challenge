import React from "react";
import '../Styles/Register.css';

const Register = () => {


    return <>

        <div className="register-container">
            <form>
                <div class="form-group">
                    <label for="exampleInputName">Name</label>
                    <input type="name" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Your Name"></input>
                </div><br />
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your email"></input>
                </div><br />
                <div class="form-group">
                    <label for="exampleInputNumber">Mobile Number</label>
                    <input type="email" class="form-control" id="exampleInputNumber" aria-describedby="Enter Your Mobile Number" placeholder="Enter email"></input>
                </div><br />
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div><br />
                <div class="form-group">
                    <label for="exampleInputAddress">Address</label>
                    <textarea type="address" class="form-control" id="exampleInputaddress" placeholder="Enter Your address"></textarea>
                </div><br />
                <button type="submit" class="btn btn-primary">Register</button><br />
            </form>
        </div>

    </>
}
export default Register;