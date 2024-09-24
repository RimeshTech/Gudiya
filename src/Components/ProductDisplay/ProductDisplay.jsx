import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_iocn.png";
import star_dull_icon from "../Assets/star_dull_icon.png"; 
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} =useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="Image" />
            <img src={product.image} alt="Image" />
            <img src={product.image} alt="Image" />
            <img src={product.image} alt="Image" />
        </div>
        <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image} alt="Image" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="Image" />
            <img src={star_icon} alt="Image" />
            <img src={star_icon} alt="Image" />
            <img src={star_icon} alt="Image" />
            <img className="stardullicon" src={star_dull_icon} alt="Image" />
            <p>(122)</p>
        </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-prices-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-prices-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic minus quisquam, quibusdam fuga laborum iusto eligendi suscipit iste impedit voluptatem tempore dicta nobis. Eum facilis doloribus consequuntur, alias consequatur similique.
            </div>
            <div className="productdisplay-right-size">
                 <h1>Select Size</h1>
                 <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>X</div>
                    <div>XL</div>
                 </div>
            </div>
             <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
             <p className="productdisplay-right-category"><span> Category :</span> Women, T-shirt, Crop Top</p>
             <p className="productdisplay-right-category"><span> Tags :</span>Modern, Latest</p>
        </div>
      </div>
  );
};

export default ProductDisplay;
