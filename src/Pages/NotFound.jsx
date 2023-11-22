import { Link } from "react-router-dom";
import "../index.css";

const NotFound = () => {
  return (
    <div className="flex-container">
      <div className="text-center">
        <h2>
          <span className="fade-in" id="digit1">
            4
          </span>
          <span className="fade-in" id="digit2">
            0
          </span>
          <span className="fade-in" id="digit3">
            4
          </span>
        </h2>
        <h3 className="fadeIn">PAGE NOT FOUND</h3>
        <Link to="/">
          <button type="button" className="notfound-btn">
            Return To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
