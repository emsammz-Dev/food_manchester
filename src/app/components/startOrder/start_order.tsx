import { RootState } from "@/app/store";
import { openStartOrder } from "@/features/general/generalSlice";
import { useDispatch, useSelector } from "react-redux";
import StartOrderBox from "./start_order_box";

function StartOrder() {
  const dispatch = useDispatch();
  const timeSlot = useSelector((state: RootState) => state.general.timeSlot);
  const deliveryType = useSelector(
    (state: RootState) => state.general.deliveryType
  );

  return (
    <>
      <div className="h-64 bg-[url(/top.avif)] bg-fixed bg-center flex flex-col justify-end p-8">
        <div>
          <div className="text-2xl font-extrabold">Nagpur</div>
          <div>info</div>
        </div>
        <div className="flex max-md:flex-col min-md:items-center gap-4 p-4 px-4 bg-white text-black rounded-lg w-min">
          {timeSlot ? (
            <div
              onClick={() => dispatch(openStartOrder())}
              className="bg-amber-500 rounded-lg px-4 p-2 w-max hover:bg-amber-400 space-x-1 cursor-pointer"
            >
              <span>{deliveryType}</span>
              <span>@{timeSlot}</span>
            </div>
          ) : (
            <div
              onClick={() => dispatch(openStartOrder())}
              className="bg-amber-500 rounded-lg px-4 p-2 w-max hover:bg-amber-400 cursor-pointer"
            >
              Start Order
            </div>
          )}

          <div className="flex gap-2">
            <div className="flex gap-2 w-max">
              <div>Pickup</div>
              <div className="bg-green-200 px-1 rounded-sm">20-30min</div>
            </div>
            <div className="flex gap-2 w-max">
              <div>Delivery</div>
              <div className="bg-green-200 px-1 rounded-sm">20-30min</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartOrder;
