import React from "react";

import { Link } from "react-router-dom";
import { ActionIcon } from "@mantine/core";
import  {Businessplan ,DeviceTv ,News ,HeartHandshake ,Rocket ,BallFootball ,DeviceLaptop ,Home ,InfoSquare } from "tabler-icons-react";

const Navbar = () => {
  const SetIcon = (Icon) => {
    return (
      <ActionIcon size="md" radius="xl" variant="light">
        {Icon}
      </ActionIcon>
    );
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong>NewsBook</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {SetIcon(<Home />)}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  {SetIcon(<InfoSquare />)}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Specific Category
                </Link>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/business">
                      Business <Businessplan />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/entertainment">
                      Entertainment <DeviceTv />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/general">
                      General <News />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/health">
                      Health <HeartHandshake />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/science">
                      Science <Rocket />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sports">
                      Sports <BallFootball />
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/technology">
                      Technology <DeviceLaptop />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
