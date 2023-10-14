import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        //do api call here
    })

    function displayProducts(category) {
        navigate('/productList', { state: { selectedCategory: category } });
    }
    return (
        <div>           
            <div className="row m-5" >
                <div className="mt-5 col category-container" onClick={() => displayProducts('men')}><h3 className="home-h">Mens</h3><img src="https://cdn.pixabay.com/photo/2017/10/11/14/32/blur-2841225_1280.jpg" alt="imagemenstest" /><p className="home-p">Price and other details may vary based on product size and colour.
                </p></div>
                <div className="mt-5 col category-container" onClick={() => displayProducts('women')}><h3 className="home-h">Womens</h3><img src="https://media.istockphoto.com/id/1222584804/photo/young-woman-choosing-clothes.webp?b=1&s=612x612&w=0&k=20&c=3e2Zl2OB-v8ujZDbhjN3I70uXbnt9GfyGU16m8SX4rI=" alt="React_Image" /><p  className="home-p">Leriya Fashion
                    Women's Plus Size Short Sleeve Deep V Neck Self Belted Casual</p></div>
                <div className="mt-5 col category-container" onClick={() => displayProducts('other')}><h3 className="home-h">Others</h3><img src="https://cdn.pixabay.com/photo/2018/07/08/11/49/work-3523738_1280.jpg" alt="imagemenstest"></img><p  className="home-p">Copper Italian Designer Collection Drop Earrings for Women (Blue)</p></div>
            </div>
        </div>
    )
}
export default Home;