import { addToGroceryCart } from "@/features/groceryCart/groceryCartSlice";
import { useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { useDispatch } from "react-redux";

interface PropType {
  productDecoded: string;
  brand: {
    name: string;
    weight: string;
    price: number;
  };
}

function ProductBrandCard({ productDecoded, brand }: PropType) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex gap-4 bg-gray-300/50 rounded-xl p-4">
        <div className="w-24 h-24 bg-gray-400 rounded-xl bg-[url(/paratha.avif)] bg-center shadow-md shadow-gray-500 hover:shadow-xl"></div>
        <div className="flex-1 flex flex-col justify-between">
          {/* product name brand weigtht */}
          <div>
            {/* product bnrand and weight */}
            <div className="flex gap-2">
              <div className="font-semibold">{brand.name}</div>
              <div>{brand.weight}</div>
            </div>
            {/* price */}
            <div>Rs. {brand.price}</div>
          </div>
          {/* quantity */}
          <div className="flex gap-2 items-center">
            <div>Quantity :</div>
            <div className="flex gap-4 rounded-md ring-1 px-1 w-fit  ring-gray-400 hover:bg-gray-400 items-center">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                }
                className="cursor-pointer select-none text-xl"
              >
                <HiOutlineMinus size={20} />
              </button>
              <div className="w-8 h-8 text-center content-center">
                <span>{quantity}</span>
              </div>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="cursor-pointer select-none text-xl"
              >
                <HiOutlinePlus size={20} />
              </button>
            </div>
          </div>
        </div>
        {/* add to cart button */}
        <div className="flex items-end">
          <div
            onClick={() =>
              dispatch(
                addToGroceryCart({
                  groceryProduct: { name: productDecoded, brands: brand },
                  quantity: quantity,
                })
              )
            }
            className="ring-1 ring-gray-400 p-1 rounded-sm text-black cursor-pointer hover:bg-gray-400"
          >
            Add to cart
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBrandCard;
