import PropTypes from "prop-types";


export default function CardSection({ products, cart, setCart }) {
    function addToCart(productId) {
      const productToAdd = products.find(product => product.id === productId);
      setCart(prevCart => [...prevCart, productToAdd]);
    }
  
    function removeFromCart(productId) {
      setCart(prevCart => prevCart.filter(product => product.id !== productId));
    }
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product) => (
              <div className="col mb-5" key={product.id}>
                <div className="card h-100">
                  {/* Sale badge*/}
                  <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                  {/* Product image*/}
                  <img className="card-img-top" src={product.imgUrl} alt="..." />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">{product.name}</h5>
                      {/* Product reviews*/}
                      <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                      </div>
                      {/* Product price*/}
                      <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>
                      {product.price}
                    </div>
                  </div>
                  {/* Product actions*/}
                  {cart.some(item => item.id === product.id) ? (
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                      </div>
                    </div>
                  ) : (
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product.id)}>Add to Cart</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

CardSection.propTypes = {
    products: PropTypes.array.isRequired,
    cart: PropTypes.array.isRequired,
    setCart: PropTypes.func.isRequired
  };