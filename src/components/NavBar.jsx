import { NavLink } from "react-router-dom";
import logo from "../logo-color.png";

function NavBar() {
  return (
    <div className="NavBar" style={{ backgroundColor: "#414833" }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ml-5">
          <img
            className="logo"
            to="/"
            src={logo}
            style={{ height: "50px", width: "80px", marginRight: "50px" }}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between ml-5"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink
                  className="nav-link active text-white "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/destination">
                  Destinations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  to="/availablepackages"
                >
                  AvailablePackages
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/offers">
                  Offers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/userform">
                  Book a Trip
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/morepackages"></NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
