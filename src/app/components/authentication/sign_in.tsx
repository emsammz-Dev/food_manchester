import {
  closeSignInToUsBox,
  openRegisterInToUsBox,
} from "@/features/general/generalSlice";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";

function SignIn() {
  const dispatch = useDispatch();

  function handleContinueButton() {
    dispatch(closeSignInToUsBox());
    dispatch(openRegisterInToUsBox());
  }
  return (
    <>
      {/* mobile number sign in */}
      <div className="fixed inset-0 flex justify-center items-center bg-black/80 z-50">
        <div className="bg-white rounded-2xl p-4 w-[400px] flex flex-col gap-4">
          {/* heading */}
          <div className="flex justify-between">
            <div className="font-bold">Your Profile</div>
            <button
              onClick={() => dispatch(closeSignInToUsBox())}
              className="cursor-pointer px-2 rounded-lg text-gray-400 hover:text-gray-600"
            >
              <RxCross2 size={25} />
            </button>
          </div>
          {/* enter mobile number */}
          <div className="flex flex-col gap-2">
            <div>Please input your cellphone to continue</div>
            <input className="bg-gray-200 h-10 rounded-md px-2 focus:outline-none focus:ring-1 focus:ring-gray-300"></input>
            <div className="text-xs text-gray-400">
              **Text message & data rate may apply
            </div>
          </div>
          {/*  temp now.. check use already exist or not if exist sent to payment or register box */}
          <button
            onClick={handleContinueButton}
            className="bg-amber-500 p-2 rounded-2xl text-center font-bold cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default SignIn;
