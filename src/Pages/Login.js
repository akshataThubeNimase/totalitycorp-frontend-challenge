import React from "react";
import '../Styles/Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
const navigation =useNavigate();

    return <>Login Page
        <div className="login-container">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div><br />
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div><br />
                <button type="submit" class="btn btn-primary" onClick={()=>navigation('/')}>Login</button><br/>
                <a href="../register">Don't Have An Account?</a>
            </form>
        </div>
    </>

}
export default Login;