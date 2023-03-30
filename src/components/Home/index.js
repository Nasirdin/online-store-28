import { useSelector } from "react-redux";
import Card from "../Card";
import "./index.scss";

const Home = () => {
  const products = useSelector((state) => state.productReducer.product);

  return (
    <div className="home">
      <div className="container">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
