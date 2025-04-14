import { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { getProducts } from "../../services/api";
import { IProduct } from "../../types/server.type";
import { Link } from "react-router";
import Pagination from "../../components/pagination/Pagination";

function Store() {
  const [productData, setProductData] = useState({} as IProduct);
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function getProductsData() {
      const data = await getProducts({ page: page, perPage: 10, price });

      setProductData(data);
    }

    getProductsData();
  }, [page, price]);

  return (
    <div>
      <Container>
        <h2 className="mt-6 mb-2 text-2xl font-bold">Store</h2>

        <input
          type="text"
          placeholder="search..."
          onChange={(e) => setPrice(e.target.value)}
        />

        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {productData?.data?.map((item) => (
            <Link to={`/product/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>

        <Pagination
          pageCount={productData.pages}
          handlePageClick={({ selected }) => {
            setPage(selected + 1);
          }}
        />
      </Container>
    </div>
  );
}

export default Store;
