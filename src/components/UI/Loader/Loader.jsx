import loader from "../../../assets/spinner.gif";
import './loader.scss';

const Loader = ({ title }) => (
  <div className="loader__wrap">
    <img
      src={loader}
      alt="loader"
      className="loader"
    />
    <h1 className="loader__text">
      {title || "Fetching properties..."}
    </h1>
  </div>
);

export default Loader;
