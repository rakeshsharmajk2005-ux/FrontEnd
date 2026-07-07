import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Wearables",
      price: 3999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 3,
      name: "Laptop",
      category: "Computers",
      price: 58999,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 4,
      name: "Gaming Mouse",
      category: "Accessories",
      price: 1499,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      category: "Audio",
      price: 2199,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    },
    {
      id: 6,
      name: "DSLR Camera",
      category: "Photography",
      price: 45999,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
  ];

  return (
    <div className="container">
      <h1>🛍 Product Catalog</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="details">
              <h2>{product.name}</h2>

              <p className="category">{product.category}</p>

              <h3>₹{product.price}</h3>

              <p className="rating">⭐ {product.rating}</p>

              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;