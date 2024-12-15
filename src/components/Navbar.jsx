import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPizzaSlice, faRightToBracket, faUserLock, faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { totalcarrito } from "../assets/utils/totalcarrito";


const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Pizzería Mamma Mía!
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item mx-2">
                <button type="button" class="btn btn-outline-light">
                  <FontAwesomeIcon icon={faPizzaSlice} /> Home
                </button>
              </li>
              {
                token ? (
                  <>
                  <li className="nav-item mx-2">
                <button type="button" class="btn btn-outline-light">
                <FontAwesomeIcon icon={faUser} /> Profile
                </button>
              </li>
              <li className="nav-item mx-2">
                <button type="button" class="btn btn-outline-light">
                <FontAwesomeIcon icon={faRightToBracket} /> Logout
                </button>
              </li>
              </>
                ) : (             
                  <> <li className="nav-item mx-2">
                  <button type="button" class="btn btn-outline-light">
                  <FontAwesomeIcon icon={faUserLock} /> Login
                  </button>
                </li>
                <li className="nav-item mx-2">
                  <button type="button" class="btn btn-outline-light">
                  <FontAwesomeIcon icon={faUserLock} /> Register
                  </button>
                </li>
                </>)
              }
            </ul>
            <span className="navbar-item">
            <button type="button" class="btn btn-outline-info">
            <FontAwesomeIcon icon={faCartShopping} /> Total: ${totalcarrito(total)}
                </button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
