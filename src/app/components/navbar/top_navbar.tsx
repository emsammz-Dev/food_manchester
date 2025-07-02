"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  openCartBox,
  openGrocerycart,
  openSignInToUsBox,
} from "@/features/general/generalSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCallOutline, IoCartOutline } from "react-icons/io5";
import { RootState } from "@/app/store";
import { BsMinecartLoaded } from "react-icons/bs";

function Navbar() {
  const cart = useSelector((state: RootState) => state.cart.products);
  const groceryCart = useSelector(
    (state: RootState) => state.groceryCart.groceryProducts
  );
  const dispatch = useDispatch();

  const pathname = usePathname();

  const navbarLinks = ["Home", "Order Online"];

  return (
    <>
      <div className="h-[70px] text-black bg-gray-100 flex justify-between items-center px-6 sticky top-0 z-40">
        {/* logo and navigation */}
        <div className="flex-1 flex gap-4 items-center justify-between">
          {/* logo */}
          <div className="font-bold text-2xl">Food ManChester</div>
          {/* navigation */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex gap-4 text-gray-400 text-lg">
            <Link
              href={"/"}
              className={`hover:text-black/70 ${
                pathname == "/" && "text-black"
              } hover:underline cursor-pointer`}
            >
              Home
            </Link>
            <Link
              href={"/menu"}
              className={`hover:text-black/70 ${
                pathname == "/menu" && "text-black"
              } hover:underline cursor-pointer`}
            >
              Meals
            </Link>
            <Link
              href={"/collections"}
              className={`hover:text-black/70 ${
                (pathname == "/collections" ||
                  pathname.startsWith("/collections")) &&
                "text-black"
              } hover:underline cursor-pointer`}
            >
              Grocery
            </Link>
          </div>
          {/* button */}
          <div className="flex gap-4">
            {/* home right icon */}
            {pathname == "/" && (
              <>
                <Link
                  href={"/contactus"}
                  className="rounded-full text-black  text-center content-center cursor-pointer"
                >
                  <IoCallOutline size={25} />
                </Link>
              </>
            )}
            {/* menu right icon */}
            {pathname == "/menu" && (
              <div className="flex gap-4">
                <button
                  onClick={() => dispatch(openSignInToUsBox())}
                  className="rounded-full px-2 bg-gray-200 hover:bg-gray-300 text-md text-black  text-center content-center cursor-pointer"
                >
                  Sign In
                </button>
                <div
                  onClick={() => dispatch(openCartBox())}
                  className="text-black text-center content-center cursor-pointer relative"
                >
                  <IoCartOutline size={30} />
                  {cart.length > 0 && (
                    <div className="absolute -top-3 -right-3 text-sm bg-amber-300/70 hover:bg-amber-400 w-6 h-6 content-center place-content-center rounded-full">
                      {cart.length}
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* grocery right icon */}
            {(pathname == "/collections" ||
              pathname.startsWith("/collections")) && (
              <>
                <button
                  onClick={() => dispatch(openSignInToUsBox())}
                  className="rounded-full px-2 bg-gray-200 hover:bg-gray-300 text-md text-black  text-center content-center cursor-pointer"
                >
                  Sign In
                </button>
                <div
                  onClick={() => dispatch(openGrocerycart())}
                  className="text-black text-center content-center cursor-pointer relative"
                >
                  <IoCartOutline size={30} />
                  {groceryCart.length > 0 && (
                    <div className="absolute -top-3 -right-3 text-sm bg-amber-300/70 hover:bg-amber-400 w-6 h-6 content-center place-content-center rounded-full">
                      {groceryCart.length}
                    </div>
                  )}
                </div>
              </>
            )}
            {/* payment route icon */}
            {pathname == "/payment" && (
              <Link
                href={"/checkout"}
                onClick={() => dispatch(openSignInToUsBox())}
                className="rounded-full px-2 text-gray-400 hover:text-gray-500 text-md cursor-pointer"
              >
                <BsMinecartLoaded size={25} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
