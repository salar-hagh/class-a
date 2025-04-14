import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Container from "../../components/container/Container";
import CartItem from "../../components/cartItem/CartItem";
import { IProductData } from "../../types/server.type";
import { getProducts, submitDiscountCode } from "../../services/api";
import Button from "../../components/button/Button";
import { formatNumber } from "../../utils/numbers";

function Cart() {
  const { cartItems } = useContext(AppContext);
  const [discountCode, setDiscountCode] = useState("");
  const [productsData, setProductsData] = useState<IProductData[]>([]);
  const [discountPercent, setDiscountPercent] = useState(0);

  useEffect(() => {
    async function getProductsData() {
      const data = await getProducts();

      setProductsData(data);
    }

    getProductsData();
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    const selectedProduct = productsData.find(
      (product) => product.id == item.id
    );

    return total + item.qty * (selectedProduct?.price as number);
  }, 0);

  const handleSubmitDiscount = async () => {
    const data = await submitDiscountCode(discountCode);
    setDiscountPercent(data[0].percent);
  };

  return (
    <div>
      <Container>
        {cartItems.map((item) => (
          <CartItem {...item} />
        ))}

        <div className="mt-4 flex">
          <input
            className="bg-gray-100"
            type="text"
            placeholder="discount code"
            onChange={(e) => setDiscountCode(e.target.value)}
          />
          <Button onClick={handleSubmitDiscount}>Submit</Button>
        </div>

        <div className="mt-4 bg-gray-200 rounded p-4">
          <p>total: {formatNumber(totalPrice)}</p>
          <p className="text-green-800">discount: {formatNumber((totalPrice * discountPercent) / 100)}</p>
          <p className="">
            final price: {formatNumber(totalPrice - (totalPrice * discountPercent) / 100)}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
