import Link from "next/link";
import { LuDot } from "react-icons/lu";

const paymentPlatform = [1, 2, 3, 4, 5, 6];
function CheckoutFooter() {
  return (
    <>
      <div className="bg-gray-300 flex flex-col gap-2 items-center justify-center p-4">
        <div className="flex gap-2">
          {paymentPlatform.map((val, index) => (
            <div key={val} className="w-10 h-6 bg-gray-400 rounded-sm"></div>
          ))}
        </div>
        <div className="flex items-center text-xs text-black gap-1">
          <div>@2025, Food Manchester,Texas Powered by Emsammz</div>
          <LuDot />
          <Link
            href={"/"}
            className="hover:underline underline-offset-2 cursor-pointer"
          >
            Refund policy
          </Link>
          <LuDot />
          <Link
            href={"/"}
            className="hover:underline underline-offset-2 cursor-pointer"
          >
            Privacy policy
          </Link>
          <LuDot />
          <Link
            href={"/"}
            className="hover:underline underline-offset-2 cursor-pointer"
          >
            Terms of service
          </Link>
          <LuDot />
          <Link
            href={"/"}
            className="hover:underline underline-offset-2 cursor-pointer"
          >
            Contact information
          </Link>
        </div>
      </div>
    </>
  );
}

export default CheckoutFooter;
