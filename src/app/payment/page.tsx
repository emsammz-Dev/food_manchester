"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { LiaRupeeSignSolid } from "react-icons/lia";
import PaymentForm from "../components/payment/payment_form";

function Payment() {
  const groceryCartItems = useSelector(
    (state: RootState) => state.groceryCart.groceryProducts
  );
  const menuCartItems = useSelector((state: RootState) => state.cart.products);

  const menuTotal = menuCartItems.reduce(
    (acc, detail) => (acc = detail.product.price * detail.quantity),
    0
  );

  const groceryTotal = groceryCartItems.reduce(
    (acc, detail) =>
      (acc = detail.groceryProduct.brands.price * detail.quantity),
    0
  );

  const totalPayment = menuTotal + groceryTotal;

  return (
    <>
      <div className="flex">
        {/* left all details and pay now */}
        <div className="flex-1">
          <PaymentForm />
        </div>
        {/* right cart */}

        <div className="flex flex-col text-black gap-8 p-8 bg-white">
          {/* cart items */}
          <div className="flex flex-col gap-4">
            <div>Grocery</div>
            {groceryCartItems.map((g, index) => (
              <div key={index} className="flex gap-4 items-center text-black">
                {/* product image */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-md bg-gray-400"></div>
                  <div className="absolute z-20 -right-2 -top-2 flex justify-center items-center bg-white/70 ring-1 ring-gray-300 w-6 h-6 rounded-full">
                    <div className="text-xs">{g.quantity}</div>
                  </div>
                </div>
                {/* product name */}
                <div className="flex-1">
                  <div>{g.groceryProduct.name}</div>
                  <div className="text-xs">{g.groceryProduct.brands.name}</div>
                </div>
                {/* price */}
                <div>
                  <div className="flex items-center">
                    <div>
                      <LiaRupeeSignSolid size={20} />
                    </div>
                    <div>{g.groceryProduct.brands.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div>Menu</div>
            {menuCartItems.map((p, index) => (
              <div key={index} className="flex gap-4 items-center text-black">
                {/* product image */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-md bg-gray-400"></div>
                  <div className="absolute z-20 -right-2 -top-2 flex justify-center items-center bg-white/70 ring-1 ring-gray-300 w-6 h-6 rounded-full">
                    <div className="text-xs">{p.quantity}</div>
                  </div>
                </div>
                {/* product name */}
                <div className="flex-1">
                  <div>{p.product.name}</div>
                </div>
                {/* price */}
                <div>
                  <div className="flex items-center">
                    <div>
                      <LiaRupeeSignSolid size={20} />
                    </div>
                    <div>{p.product.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {/* discout coupon code  */}
            <div className="flex gap-2">
              <div>
                <input className="h-10 rounded-sm ring-1 ring-gray-400"></input>
              </div>
              <button className="h-10 rounded-sm bg-amber-500 p-2">
                Apply
              </button>
            </div>

            {/* subtotal */}
            <div className="flex justify-between">
              <div>Subtotal</div>
              <div className="flex items-center">
                <div>
                  <LiaRupeeSignSolid size={20} />
                </div>
                <div>{totalPayment}</div>
              </div>
            </div>

            {/* shipping addreess */}
            <div className="flex justify-between">
              <div>Tax</div>
              <div className="flex gap-1">
                <span>
                  <LiaRupeeSignSolid size={20} />
                </span>
                <span>0.00</span>
              </div>
            </div>

            {/* total cost */}
            <div className="flex justify-between border-y-1 border-gray-400 py-2">
              <div className="font-bold">Total</div>
              <div className="flex justify-center items-center gap-1">
                <div className="text-xs text-gray-400">INR</div>
                <div className="font-bold flex items-center">
                  <span>
                    <LiaRupeeSignSolid size={20} />
                  </span>
                  <span>{totalPayment}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
