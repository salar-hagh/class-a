import { useContext, useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { IProductData } from "../../types/server.type";
import Button from "../button/Button";
import { AppContext } from "../../context/AppContext";

interface CartItemProps {
  id: string;
  qty: number;
}

function CartItem({ id, qty }: CartItemProps) {
  const [productData, setProductData] = useState({} as IProductData);
  const { increaseProductQty, decreaseProductQty, getProductQty } =
    useContext(AppContext);
  useEffect(() => {
    async function getProductData() {
      const data = await getProduct(id as string);

      setProductData(data);
    }

    getProductData();
  }, []);

  return (
    <div className="grid grid-cols-12 shadow mt-2">
      <div className="col-span-2 ">
        <img src={productData.image} alt="" />
      </div>

      <div className="col-span-10 p-2">
        <p> {productData.title}</p>
        <p> {productData.price}</p>
        <p> qty: {qty}</p>
      </div>

      <div className="flex justify-center mt-4">
        <Button onClick={() => increaseProductQty(id as string)}>+</Button>
        <span className="mx-2">{getProductQty(id as string)}</span>
        <Button onClick={() => decreaseProductQty(id as string)}>-</Button>
      </div>
    </div>
  );
}

export default CartItem;
