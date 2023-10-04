import { useState, useContext } from "react";
import { Product } from "./context/ProductsContext";
import { MPContext, CartItem } from "./context/MPContext";

const ProductItem = ({ p }: { p: Product }) => {
  const mpContext = useContext(MPContext);
  const [itemCount, setItemCount] = useState(1);

  const onCartAdd = () => {
    let item: CartItem = {
      _id: p._id,
      id: p.id,
      img: p.images[0],
      quantity: itemCount,
      title: p.title,
      unit_price: p.price,
    };
    mpContext.addItem(item);
  };

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={p.images[0]} alt={p.description} />
      </div>
      <div className="card-content">
        <h4>{p.title}</h4>
        <p>{p.description}</p>
        <p>{p.author}</p>

        <button onClick={onCartAdd} className="button primary">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
