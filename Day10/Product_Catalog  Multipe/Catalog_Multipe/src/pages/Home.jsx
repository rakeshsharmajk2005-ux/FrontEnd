import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <div className="hero">

        <h1>Welcome to ShopEasy</h1>

        <p>
          Discover the latest electronics, accessories,
          and gadgets at the best prices.
        </p>

        <Link to="/products">
          <button>Shop Now</button>
        </Link>

      </div>

    </div>
  );
}

export default Home;