import "../Home.css";

function Home() {
  return (
    <div className="homePage">
      <div className="imageBck">
        <div>
          <h1 className="colorTitle d-flex align-items-end  flex-row-reverse me-2">
            COLLECT THEM ALL !
          </h1>
        </div>
      </div>
      <div className="container mt-5">
        <h1 className="text-center m-3">NEWS</h1>
        <div className="newsHome container-fluid">
          <div className="lastChoose d-md-flex gap-md-2">
            <div className="lastArrival d-flex flex-column my-1">
              <div className="h-75">
                <h3 className="newsTitle m-2">Last Arrival</h3>
                <div className="imgLast d-flex">
                  <img
                    src="https://media.discordapp.net/attachments/1019616949627531304/1037679818067693648/unknown.png?width=566&height=580"
                    alt=""
                    className="w-50 p-2"
                  />
                  <h5 className="lastPara d-flex flex-column justify-content-center">
                    A Pokemon is waiting for you!
                  </h5>
                </div>
              </div>
              <div className="buttonNews d-flex justify-content-center h-25 p-2">
                <button
                  className="bNews
                btn btn-success rounded
                align-self-end"
                  type="button"
                >
                  Shop Now
                </button>
              </div>
            </div>

            <div className="hardChoose d-flex flex-column my-1">
              <div className="h-75">
                <h3 className="newsTitle m-2">Is it hard to choose?</h3>
                <div className="imgHard d-flex">
                  <img
                    src="https://media.discordapp.net/attachments/1019616949627531304/1037679391397908500/unknown.png"
                    alt=""
                    className="w-50 p-2"
                  />
                  <h5 className="hardPara d-flex flex-column justify-content-center">
                    Let the right Pokemon find you !
                  </h5>
                </div>
              </div>
              <div className="buttonNews d-flex justify-content-center h-25 p-2">
                <button
                  className="bNews
                  btn btn-success rounded align-self-end"
                  type="button"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
          <div className="season d-flex my-1">
            <img
              src="https://w0.peakpx.com/wallpaper/380/483/HD-wallpaper-pokeball-pokemon-anime-glow-snow.jpg"
              alt=""
              className="w-50"
            />
            <div className="christHome w-100">
              <div className="christHomeShop h-100 d-flex flex-column">
                <h4 className="newsTitle h-100 d-flex  flex-column justify-content-center">
                  The magic of Christmas with a new friend !
                </h4>
                <div className="buttonNews d-flex justify-content-center mb-2">
                  <button
                    className="bNews
                    btn btn-success rounded"
                    type="button"
                  >
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sliderHome container mt-5">
        <h1 className="text-center m-3">BEST SELLERS</h1>
        <div
          id="carouselHome"
          className="carousel carousel-dark slide border border-3 border-muted rounded m-2 shadow-lg mb-2"
          data-bs-ride="carousel"
        >
          {/* -------------------------indicator bottom--------------- */}
          <div className="carousel-indicators d-none d-md-flex">
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="0"
              className="active "
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="2"
              aria-label="Slide 4"
            />
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="2"
              aria-label="Slide 5"
            />
          </div>
          {/* -----------------interieur---------- */}
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="container d-flex justify-content-center">
                <img
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
                  className="imgSliderHome d-block h-75 w-75"
                  alt=""
                />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
                className="d-block w-100"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
                className="d-block w-100"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
                className="d-block w-100"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg"
                className="d-block w-100"
                alt=""
              />
            </div>
          </div>
          {/* -------------fleche slide-------------- */}
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon " aria-hidden="true" />
            <span className="visually-hidden" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden" />
          </button>
          {/* ------------Button--------- */}
          <div className="carousel-caption d-none d-md-flex justify-content-md-center">
            <button className="btn btn-outline-success rounded" type="button">
              Adopt him
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
