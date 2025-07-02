import { CartItem, ProductType, removeItem } from "@/features/cart/cartSlice";
import {
  closeCartBox,
  openProductBox,
  openSignInToUsBox,
  setProduct,
} from "@/features/general/generalSlice";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import { IoCartOutline } from "react-icons/io5";
import { RootState } from "@/app/store";
import Link from "next/link";

function OrderCartBox() {
  const [signInToUs, setSignInToUs] = useState(false);
  const [registerInToUs, setRegisterInToUs] = useState(false);

  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  function handleRemoveItemFromCart(product: CartItem) {
    dispatch(removeItem(product));
  }

  function handleUpdateProduct(p: ProductType) {
    dispatch(setProduct(p));
    dispatch(openProductBox());
  }

  const delievryCharges = 40;
  const subTotal = cart.reduce(
    (acc, detail) => acc + detail.product.price * detail.quantity,
    0
  );

  const totalMenu = subTotal + delievryCharges;

  return (
    <>
      <div
        className="fixed inset-0 flex justify-end bg-black/80 z-40"
        onClick={() => dispatch(closeCartBox())}
      >
        {/* order box */}

        <div
          className="w-96 h-screen bg-white p-6 flex flex-col gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* heading */}
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg">My Orders</div>
            <button
              onClick={() => dispatch(closeCartBox())}
              className="cursor-pointer bg-gray-100 px-2 rounded-lg text-gray-400 hover:text-gray-600"
            >
              <RxCross2 size={25} />
            </button>
          </div>

          {/* cart detail two condition exits and dont exist */}
          {cart.length > 0 ? (
            // if item exist in cart
            <div className="flex-1 flex flex-col overflow-auto">
              {/* cart items */}
              <div className="space-y-4 text-sm flex-1 overflow-auto">
                {cart.map((val, index) => (
                  <div key={index} className="p-2">
                    <div className="flex justify-between font-bold text-gray-500">
                      <div className="flex gap-2">
                        <div>{index + 1}.</div>
                        <div>{val.product.name}</div>
                        <div className="flex gap-1">
                          <span>x</span>
                          <span>{val.quantity}</span>
                        </div>
                      </div>
                      <div>Rs.{val.product.price}</div>
                    </div>
                    <div className="flex gap-2 px-5">
                      <div
                        className="cursor-pointer hover:underline text-gray-600"
                        onClick={() => handleUpdateProduct(val.product)}
                      >
                        Edit
                      </div>
                      <div
                        className="cursor-pointer hover:underline text-gray-600"
                        onClick={() => handleRemoveItemFromCart(val)}
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                {/* cart subtotal discount charges tax total */}
                <div>
                  <div className="border-t-1 flex justify-between font-bold text-lg">
                    <div>Sub Total</div>
                    <div>
                      <span>Rs.</span>
                      {subTotal}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="text-xs">Delivery Charges</div>
                    <div>{delievryCharges}</div>
                  </div>

                  <div className="flex justify-between text-lg font-bold border-y-1 py-2">
                    <div>Total</div>
                    <div>Rs. {totalMenu}</div>
                  </div>
                </div>
                {/* checkout button */}
                <Link
                  href={"/checkout"}
                  className="bg-amber-400 hover:bg-amber-500 p-2 rounded-full text-lg text-center cursor-pointer"
                >
                  Checkout
                </Link>
              </div>
            </div>
          ) : (
            // if no item exist in cart
            <div className="space-y-4 text-sm text-gray-400">
              <div className="p-4 place-items-center">
                <IoCartOutline size={60} />
              </div>
              <div className="text-center">You dont have item in cart</div>
              <div className="bg-gray-100 font-bold  hover:text-gray-600 text-center p-2 rounded-2xl">
                Start My Order
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default OrderCartBox;
