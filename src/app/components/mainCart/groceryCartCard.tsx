"use client";
import { RootState } from "@/app/store";
import {
  quantityDecrementWithOne,
  quantityIncrementWithOne,
  removeGroceryItem,
} from "@/features/groceryCart/groceryCartSlice";
import { GoDotFill } from "react-icons/go";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

function GrocerycartCard() {
  const groceryCartItems = useSelector(
    (state: RootState) => state.groceryCart.groceryProducts
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>Grocery Items</div>
        <div className="flex flex-col gap-4">
          {groceryCartItems.map((g, index) => (
            <div
              key={index}
              className="flex justify-between hover:bg-gray-300 p-2 rounded-xl"
            >
              {/* product detail left side */}
              <div className="flex gap-4">
                {/* product image */}
                <div className="w-20 h-20 bg-[url(/paratha.avif)] bg-center rounded-xl"></div>
                {/* product detail name brand weight */}
                <div className="flex flex-col justify-between">
                  {/* product name brand and weight */}
                  <div>
                    <div className="font-bold">{g.groceryProduct.name}</div>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <div>{g.groceryProduct.brands.name}</div>
                      <span>
                        <GoDotFill />
                      </span>
                      <div>{g.groceryProduct.brands.weight}</div>
                    </div>
                  </div>
                  {/* product quantity */}
                  <div className="flex gap-2 rounded-md ring-1 px-1 w-fit  ring-gray-400 items-center">
                    <button
                      onClick={() => dispatch(quantityDecrementWithOne(g))}
                      className="cursor-pointer select-none text-xl"
                    >
                      <HiOutlineMinus size={20} />
                    </button>
                    <div className="w-8 h-8 text-center content-center">
                      <span>{g.quantity}</span>
                    </div>
                    <button
                      onClick={() => dispatch(quantityIncrementWithOne(g))}
                      className="cursor-pointer select-none text-xl"
                    >
                      <HiOutlinePlus size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* right side product price quantity and remove */}
              <div className="flex gap-4">
                <div className="font-bold">
                  <span>Rs.</span>
                  <span>{g.groceryProduct.brands.price * g.quantity}</span>
                </div>
                <div>
                  <button
                    onClick={() => dispatch(removeGroceryItem(g))}
                    className="text-gray-400 hover:text-gray-500 cursor-pointer"
                  >
                    <RxCross2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GrocerycartCard;
