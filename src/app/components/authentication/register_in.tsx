import { RootState } from "@/app/store";
import {
  closeRegisterInToUsBox,
  closeSignInToUsBox,
} from "@/features/general/generalSlice";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

function RegisterIn() {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.products);

  function handleContinueButton() {
    dispatch(closeRegisterInToUsBox());
  }
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black/80 z-50">
        <div className="bg-white rounded-2xl p-4 w-[400px] flex flex-col gap-4">
          {/* register Heading */}
          <div className="flex justify-between">
            <div className="font-bold">Your Profile</div>
            <button
              onClick={() => dispatch(closeRegisterInToUsBox())}
              className="cursor-pointer px-2 rounded-lg text-gray-400 hover:text-gray-600"
            >
              <RxCross2 size={25} />
            </button>
          </div>
          {/* welcom text when first time registering */}
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
            voluptate Lorem ipsum dolor sit amet.
          </div>
          {/* detail to enter fits last email */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <div>First Name</div>
              <input className="bg-gray-200 h-10 rounded-md px-2 focus:outline-none focus:ring-1 focus:ring-gray-300"></input>
            </div>
            <div className="flex flex-col gap-1">
              <div>Last Name</div>
              <input className="bg-gray-200 h-10 rounded-md px-2 focus:outline-none focus:ring-1 focus:ring-gray-300"></input>
            </div>
            <div className="flex flex-col gap-1">
              <div>Email Address</div>
              <input className="bg-gray-200 h-10 rounded-md px-2 focus:outline-none focus:ring-1 focus:ring-gray-300"></input>
            </div>
          </div>
          {/* continue button */}
          {cart.length == 0 ? (
            <button
              onClick={handleContinueButton}
              className="bg-amber-500 p-2 rounded-2xl text-center font-bold cursor-pointer"
            >
              Continue
            </button>
          ) : (
            <Link
              href={"/payment"}
              onClick={handleContinueButton}
              className="bg-amber-500 p-2 rounded-2xl text-center font-bold cursor-pointer"
            >
              Go to payment
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default RegisterIn;
