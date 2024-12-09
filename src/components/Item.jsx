export default function Item({ item, addToCart }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img
          src={item.image}
          className="card-img-top menu-item"
          alt={item.title}
        />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text">${item.price.toFixed(2)}</p>
          <button className="btn btn-primary" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
