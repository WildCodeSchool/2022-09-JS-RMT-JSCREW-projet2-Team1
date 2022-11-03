import "../Basket.css";

function Basket() {
  return (
    <div className="body-basket md">
      <div className="container md">
        <h1 className="text-center">Your Basket</h1>
        <div className="basket-dekstop">
          <div className="row">
            <div className="img-basket col-6 my-3">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                className="img float-start img-fluid"
                alt="pokemon"
              />
            </div>
            <div className="basket-top col-6 my-3 md">
              <h2>Bulbizar</h2>
              <div className="product-basket form-floating w-75 d-inline-block justify-content-center md">
                <select className="quantity form-select" id="quantitySelect">
                  <option value="1">
                    <b>1</b>
                  </option>
                  <option value="2">
                    <b>2</b>
                  </option>
                  <option value="3">
                    <b>3</b>
                  </option>
                  <option value="4">
                    <b>4</b>
                  </option>
                  <option value="5">
                    <b>5</b>
                  </option>
                  <option value="6">
                    <b>6</b>
                  </option>
                  <option value="7">
                    <b>7</b>
                  </option>
                  <option value="8">
                    <b>8</b>
                  </option>
                  <option value="9">
                    <b>9</b>
                  </option>
                  <option value="10">
                    <b>10</b>
                  </option>
                </select>
                <label htmlFor="floatingSelect">
                  <b>Quantity</b>
                </label>
              </div>
              <button type="button" className="btn2 btn-delete-product my-2">
                Delete
              </button>
              <h3 className="my-3">Price : 10$</h3>
            </div>
          </div>
          <div className="summary-order container card md">
            <br />
            <h1 className="text-center">Summary of orders</h1>
            <div className="d-flex mb-3 p-2 w-100 justify-content-between my-3">
              <h3>Total items</h3>
              <h4>10$</h4>
            </div>
            <div className="d-flex mb-3 p-2 w-100 justify-content-between">
              <p>Including TVA</p>
              <p>0.99$</p>
            </div>
            <div className="d-flex mb-3 p-2 w-100 justify-content-between">
              <h3>Delivery cost</h3>
              <h4>FREE</h4>
            </div>
            <button
              type="button"
              className="valide-basket btn btn-success btn-lg"
            >
              Validate my order
            </button>
          </div>
        </div>
        <div className="card my-2">
          <h1 className="m-3">Delivery</h1>
          <div className="form-check m-2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="form-check-label float-start"
              htmlFor="flexRadioDefault1"
            >
              Home delivery by Team Rocket
            </label>
          </div>
          <div className="form-check m-2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="form-check-label float-start"
              htmlFor="flexRadioDefault1"
            >
              Home delivery by Teacher Chen
            </label>
          </div>
          <div className="form-check m-2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="form-check-label float-start"
              htmlFor="flexRadioDefault1"
            >
              Home delivery by Sacha
            </label>
          </div>
        </div>
        <div className="valide-basket-mobile card m-3">
          <button type="button" className="btn btn-success btn-lg">
            Validate my order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Basket;
