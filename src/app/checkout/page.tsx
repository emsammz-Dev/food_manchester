"use client";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import GrocerycartCard from "../components/mainCart/groceryCartCard";
import MenuCartCard from "../components/mainCart/menuCartCard";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";
import CheckoutFooter from "../components/footer/checkout_footer";
import Link from "next/link";

function CartCheckout() {
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

  const estimatedTotal = menuTotal + groceryTotal;
  return (
    <>
      <div className="p-6 flex flex-col gap-4 bg-gray-200 text-black">
        <div className="text-xl font-bold">Your Cart</div>
        {groceryCartItems.length > 0 && <GrocerycartCard />}
        {menuCartItems.length > 0 && <MenuCartCard />}
        {(groceryCartItems.length > 0 || menuCartItems.length > 0) && (
          <div className="flex flex-col gap-4 items-end my-16">
            <div className="flex gap-4 items-center font-bold">
              <span>Estimated total</span>
              <div className="flex items-center gap-2">
                <span>
                  <LiaRupeeSignSolid size={20} />
                </span>
                <span>{estimatedTotal}</span>
                <span>INR</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>**Taxes, discounts and shipping calculated at checkout</div>
              <Link
                href={"/payment"}
                className="bg-amber-400 hover:bg-amber-500 text-center p-2 rounded-sm"
              >
                Make Payment
              </Link>
            </div>
          </div>
        )}
        {/* if no cart in item */}
        {groceryCartItems.length == 0 && menuCartItems.length == 0 && (
          <div className="h-[350px] flex flex-col justify-center items-center gap-4 text-gray-400">
            <IoCartOutline size={50} />
            <div>No item in cart</div>
          </div>
        )}
      </div>
      <CheckoutFooter />
    </>
  );
}

export default CartCheckout;
