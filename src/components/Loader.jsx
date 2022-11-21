import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="w-full h-screen flex justify-center items-center flex-col">
    <img srcSet={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-2xl text-white mt-2">
      {title || "Loading..."}
    </h1>
  </div>
);

export default Loader;
