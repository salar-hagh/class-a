import { useContext, useEffect, useState } from "react";
import Container from "../../components/container/Container";
import { getProduct } from "../../services/api";
import { useParams } from "react-router";
import { IProductData } from "../../types/server.type";
import Button from "../../components/button/Button";
import Share from "./../../assets/icons/share-nodes-svgrepo-com.svg?react";
import { AppContext } from "../../context/AppContext";
import Spinner from "../../components/spinner/Spinner";

function Product() {
  const { id } = useParams();
  const { increaseProductQty, getProductQty, decreaseProductQty } =
    useContext(AppContext);

  const [productData, setProductData] = useState({} as IProductData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function getProductData() {
      const data = await getProduct(id as string);

      setProductData(data);
      setIsLoading(false);
    }

    getProductData();
  }, []);

 
  return (
    <div>
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="w-1/2 mx-auto">
            <img src={productData.image} alt="" />

            <h2>{productData.title}</h2>

            <p>
              price: <span>{productData.price}$</span>
            </p>

            <p>{productData.description}</p>

            <div className="flex justify-center mt-4">
              <Button onClick={() => increaseProductQty(id as string)}>
                +
              </Button>
              <span className="mx-2">{getProductQty(id as string)}</span>
              <Button onClick={() => decreaseProductQty(id as string)}>
                -
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Product;
