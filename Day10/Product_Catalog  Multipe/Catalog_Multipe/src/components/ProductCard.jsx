import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">

      <img src={product.image} alt={product.name} />

      <div className="card-body">

        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <h2>₹{product.price}</h2>

        <Link to={`/product/${product.id}`}>
          <button>View Details</button>
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;