export default function NavbarWindow({ setPage }) {
  return (
    <nav className="navbarFullscreen">
      <div className="d-flex flex-column flex-md-row">
        <button
          type="button"
          className="button-nav p-2 flex-fill border-0"
          onClick={() => setPage({ path: "Home", index: null })}
        >
          HOME
        </button>
        <button
          type="button"
          className="button-nav p-2 flex-fill border-0"
          onClick={() => setPage({ path: "Products", index: null })}
        >
          ALL PRODUCTS
        </button>
        <button
          type="button"
          className="button-nav p-2 flex-fill border-0"
          onClick={() => setPage({ path: "Contact", index: null })}
        >
          CONTACT
        </button>
      </div>
    </nav>
  );
}
