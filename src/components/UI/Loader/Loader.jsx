import loader from "../../../assets/spinner.gif";
import './loaderStyles.scss';

const Loader = ({ title }) => (
  <div className="loader">
    <img
      src={loader}
      alt="loader"
      className="loader__img"
    />
    <h2 className="loader__text">
      {title || "Fetching properties..."}
    </h2>
  </div>
);

export default Loader; 
