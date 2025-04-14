import { IProductData } from "../../types/server.type";

function ProductItem({ image, title, description, price }: IProductData) {
  return (
    <div className="shadow-md rounded">
      <img className="rounded-t" src={image} alt="" />

      <div className="p-2">
        <h3 className="font-bold">{title}</h3>
        <p>
          price: <span className="font-bold">{price}$</span>
        </p>

        <p className="text-gray-500 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
