import { RootState } from "@/app/store";
import { closeGroceryCart } from "@/features/general/generalSlice";
import { removeGroceryItem } from "@/features/groceryCart/groceryCartSlice";
import Link from "next/link";
import { redirect } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

function GrocerySideCart() {
  const dispatch = useDispatch();
  const groceryCart = useSelector(
    (state: RootState) => state.groceryCart.groceryProducts
  );

  function handleStartOrderingGrocery() {
    dispatch(closeGroceryCart());
    redirect("/collections");
  }

  const subGroceryTotal =
    groceryCart.reduce(
      (acc, detail) =>
        (acc = detail.groceryProduct.brands.price * detail.quantity),
      0
    ) || 0;

  const deliveryCharges = 40;

  const groceryTotal = subGroceryTotal + deliveryCharges;
  return (
    <>
      <div
        className="fixed inset-0 flex justify-end bg-black/80 text-gray-500 z-40"
        onClick={() => dispatch(closeGroceryCart())}
      >
        {/* order box */}

        <div
          className="w-96 h-screen bg-white p-6 flex flex-col gap-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* heading */}
          <div className="flex justify-between items-center text-gray-500">
            <div className="font-bold text-lg">My Grocery Orders</div>
            <button
              onClick={() => dispatch(closeGroceryCart())}
              className="cursor-pointer bg-gray-100 px-2 rounded-lg hover:text-gray-600"
            >
              <RxCross2 size={25} />
            </button>
          </div>

          {/* cart detail two condition exits and dont exist */}
          {groceryCart.length > 0 ? (
            // if item exist in cart
            <div className="flex-1 flex flex-col overflow-auto">
              {/* grocery cart items */}
              <div className="space-y-4 text-sm flex-1 overflow-auto pb-8">
                {groceryCart.map((val, index) => (
                  <div key={index} className="p-2">
                    <div className="flex justify-between text-gray-500">
                      <div className="flex gap-2">
                        <div>{index + 1}.</div>
                        {/* product name */}
                        <div className="font-bold">
                          {val.groceryProduct.name}
                        </div>

                        {/* quantity shown here of product in cart */}
                        <div className="flex gap-1 font-bold">
                          <span>x</span>
                          <span>{val.quantity}</span>
                        </div>
                      </div>
                      <div className="font-bold">
                        Rs.{val.groceryProduct.brands.price}
                      </div>
                    </div>
                    <div className="text-gray-500 ps-4 flex justify-between gap-2">
                      {/* product brand name */}
                      <div className="bg-gray-300 px-1">
                        {val.groceryProduct.brands.name}
                      </div>
                      {/* remove from the grovery cart button */}
                      <button
                        onClick={() => dispatch(removeGroceryItem(val))}
                        className="underline cursor-pointer text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* checkout total of cart */}
              <div className="flex flex-col gap-4">
                {/* cart subtotal discount charges tax total */}
                <div>
                  <div className="border-t-1 flex justify-between font-bold text-lg">
                    <div>Sub Total</div>
                    <div>{subGroceryTotal}</div>
                  </div>

                  <div className="flex justify-between">
                    <div className="text-xs">Delivery Charges</div>
                    <div>{deliveryCharges}</div>
                  </div>

                  <div className="flex justify-between text-lg font-bold border-y-1 py-2">
                    <div>Total</div>
                    <div>Rs. {groceryTotal}</div>
                  </div>
                </div>
                {/* checkout button */}
                <Link
                  href={"/checkout"}
                  className="bg-amber-500 hover:text-gray-600 p-2 rounded-full text-lg text-center cursor-pointer"
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
              <div
                onClick={handleStartOrderingGrocery}
                className="bg-gray-100 font-bold  hover:text-gray-600 text-center p-2 rounded-2xl"
              >
                Start Ordering Grocery
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GrocerySideCart;
