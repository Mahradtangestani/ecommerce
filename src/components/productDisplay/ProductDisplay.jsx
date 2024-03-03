import React, { useContext } from 'react';
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
    return (
        <div className='productdisplay'>
             <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
             </div>
             <div className="productdisplay-right">
                 <h1>{product.name}</h1>
                 <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                 </div>
                 <div className="productdisplay-right-prices">
                    <div className="product-display-price-old">
                        ${product.old_price}
                    </div> 
                    <div className="product-display-price-new">
                        ${product.new_price}
                    </div>
                 </div> 
                    <div className="productdisplay-right-description">
                        A lightweight , usually knitted , pull over shirt , A lightweight , usually knitted , pull over shirt 
                        A lightweight , usually knitted , pull over shirt , A lightweight , usually knitted , pull over shirt
                    </div>
                    <div className="productdisplay-right-size">
                        <h1>Select Size</h1>
                        <div className="productdisplay-right-sizes">
                             <div>X</div>
                             <div>M</div>
                             <div>L</div>
                             <div>XL</div>
                             <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product.id)}}>Add TO CART</button>
                    <p className='productdisplay-right-category'><span>Category:</span> Women , T-shirt , Crop Top</p>
                    <p className='productdisplay-right-category'><span>Tags:</span> Modern , Latest</p>
                 
             </div>
        </div>
    );
}

export default ProductDisplay;
