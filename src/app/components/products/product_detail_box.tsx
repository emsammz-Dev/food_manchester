import { addToCart, ProductType } from "@/features/cart/cartSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import {
  closeProductBox,
  openStartOrder,
  setProductToNull,
} from "@/features/general/generalSlice";
import StartOrderBox from "../startOrder/start_order_box";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { GiHighHeel } from "react-icons/gi";
import { RootState } from "@/app/store";

interface Props {
  product: ProductType;
}

function ProductDetailBox() {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const timeSlot = useSelector((state: RootState) => state.general.timeSlot);
  const cart = useSelector((state: RootState) => state.cart.products);
  const product = useSelector((state: RootState) => state.general.product);

  const dispatch = useDispatch();

  function handleAddToCart(product: ProductType, quantity: number) {
    dispatch(addToCart({ product, quantity }));
    dispatch(closeProductBox());
    setQuantity(1);
  }

  function handleCloseProductBox() {
    dispatch(closeProductBox());
    dispatch(setProductToNull());
  }

  useEffect(() => {
    if (product) {
      const findCartItem = cart.findIndex(
        (val) => val.product.name == product.name
      );
      console.log(cart[findCartItem]);
      if (cart[findCartItem]) {
        setQuantity(cart[findCartItem].quantity);
      }
    }
  }, [product]);

  if (!product) {
    return <div className="text-black">Loading....</div>;
  }
  return (
    <>
      <div
        onClick={handleCloseProductBox}
        className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-[400px] h-[450px] rounded-2xl flex flex-col"
        >
          {/* heading */}
          <div className="flex justify-between items-center rounded-t-2xl bg-red-500 p-4">
            <div>
              <div className="font-bold">{product?.name}</div>
              <div className="text-xs">{product.category}</div>
            </div>

            <button
              onClick={handleCloseProductBox}
              className="cursor-pointer px-2 rounded-lg text-gray-400 hover:text-gray-600"
            >
              <RxCross2 size={25} />
            </button>
          </div>
          {/* product detail */}
          <div className="flex-1 overflow-auto p-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div>
                  <span>Rs.</span>
                  <span>{product.price}</span>
                </div>
                <div className="bg-gray-200 px-2 rounded-md">
                  {product.type}
                </div>
              </div>
              <Image
                src="/paratha.avif"
                alt="Cool stuff"
                width={120}
                height={120}
                className="w-full h-full ring-1 rounded-xl"
              ></Image>
              <div className="p-1">{product.detail}</div>
            </div>
          </div>
          {/* button and quantity */}
          <div className="p-4 flex gap-4">
            {timeSlot ? (
              <>
                <div className="flex gap-4 rounded-full ring-1 ring-amber-500 px-6 items-center">
                  <button
                    onClick={() => {
                      if (quantity > 1) {
                        setQuantity((prev) => prev - 1);
                      }
                    }}
                    className="cursor-pointer select-none text-xl"
                  >
                    <HiOutlineMinus size={20} />
                  </button>
                  <div className="bg-gray-100 w-8 h-8 rounded-full text-center content-center">
                    <span>{quantity}</span>
                  </div>
                  <button
                    onClick={() => {
                      if (quantity < 5) {
                        setQuantity((prev) => prev + 1);
                      }
                    }}
                    className="cursor-pointer select-none text-xl"
                  >
                    <HiOutlinePlus size={20} />
                  </button>
                </div>
                <button
                  className="bg-amber-500 text-xl w-full p-2 rounded-full cursor-pointer"
                  onClick={() => handleAddToCart(product, quantity)}
                >
                  Add To Cart
                </button>
              </>
            ) : (
              <button
                onClick={() => dispatch(openStartOrder())}
                className="flex-1 bg-amber-500 p-2 rounded-2xl text-center font-bold cursor-pointer"
              >
                Start Ordering
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailBox;
