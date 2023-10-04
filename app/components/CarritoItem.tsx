import { CartItem } from "./context/MPContext";

const CarritoItem = ({ product }: { product: CartItem }) => {
  return (
    <div className="carrito-item-container">
      <div className="carrito-item-img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="carrito-item-details">
        <h4>{product.title}</h4>
        <p>${product.unit_price}</p>
        <p>x {product.quantity}</p>
      </div>
    </div>
  );
};

export default CarritoItem;
