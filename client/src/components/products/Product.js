import DiscountBadge from "./DiscountBadge";
import "./Product.css";

const Product = ({
  name,
  description,
  price,
  imageName,
  imageDescription,
  discountType,
  discountValue,
}) => {
  return (
    <li className='product'>
      <div className='card'>
        <div>
          {imageName ? (
            <img
              src={`./img/${imageName}`}
              alt={imageDescription}
              className='product-image'
            />
          ) : (
            <img
              src='./img/cat-photo-default.jpg'
              alt='Default product cat'
              className='product-image'
            />
          )}
          {discountValue && discountType && (
            <DiscountBadge
              className='badge'
              discountValue={discountValue}
              discountType={discountType}
            />
          )}
        </div>
        <div className='product-description'>
          <h3>{name}</h3>
          <p data-testid='product-description'>{description}</p>
          <p>Price {price}</p>
        </div>
        <button className='cart-button'>Add to Cart</button>
      </div>
    </li>
  );
};

export default Product;
