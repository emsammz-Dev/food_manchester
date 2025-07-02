import {
  closeStartOrder,
  setDeliveryTypeToDelivery,
  setDeliveryTypeToPickUp,
  setOrderTimeSlot,
} from "@/features/general/generalSlice";
import { timeSlots } from "../products/categoriced_products";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { RootState } from "@/app/store";

function StartOrderBox() {
  const dispatch = useDispatch();
  const deliveryType = useSelector(
    (state: RootState) => state.general.deliveryType
  );
  const timeSlot = useSelector((state: RootState) => state.general.timeSlot);

  return (
    <div
      onClick={() => dispatch(closeStartOrder())}
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[400px] h-[450px] rounded-2xl flex flex-col gap-4 p-6"
      >
        {/* heading */}
        <div className="flex justify-between items-center rounded-t-2xl">
          <div className="font-bold">Start Order</div>
          <button
            onClick={() => dispatch(closeStartOrder())}
            className="cursor-pointer bg-gray-100 px-2 rounded-lg text-gray-400 hover:text-gray-600"
          >
            <RxCross2 size={25} />
          </button>
        </div>
        {/* day slection */}
        <select className="bg-gray-100 p-2 rounded-md hover:ring-1 ring-amber-500 focus:outline-amber-500 h-10">
          <option className="p-2">Today</option>
        </select>
        {/* delivery type selection */}
        <div className="flex bg-gray-200 p-2 rounded-md h-10">
          <div
            onClick={() => dispatch(setDeliveryTypeToDelivery())}
            className={`flex-1 font-bold cursor-pointer text-center ${
              deliveryType == "Delivery" && `bg-white`
            }`}
          >
            Delivery
          </div>
          <div
            onClick={() => dispatch(setDeliveryTypeToPickUp())}
            className={`flex-1 font-bold cursor-pointer text-center ${
              deliveryType == "Pick Up" && `bg-white`
            }`}
          >
            Pick Up
          </div>
        </div>

        {/* delivery type selection field */}
        {deliveryType == "Delivery" ? (
          <div className="flex-1 flex flex-col gap-4">
            <input
              type="text"
              className="h-10 bg-gray-100 rounded-md px-2 ring-1 ring-gray-100 hover:ring-amber-500 focus:outline-amber-500"
              placeholder="Search Address"
            />
            <input
              type="text"
              className="h-10 bg-gray-100 rounded-md px-2 ring-1 ring-gray-100 hover:ring-amber-500 focus:outline-amber-500"
              placeholder="House No/Appt/Floor (optional)"
            />
            <div className="text-xs text-gray-400">
              **Ordering to delivery at home/ office usually we take 30-40 min
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col gap-4 overflow-auto p-4">
            <div className="text-center">Select your order schedule</div>
            <div className="grid grid-cols-3 gap-4">
              {timeSlots.map((val, index) => {
                if (val == timeSlot) {
                  return (
                    <div
                      onClick={() => dispatch(setOrderTimeSlot(val))}
                      key={index}
                      className="bg-gray-100 p-2 text-center ring-2 ring-amber-500 rounded-md font-bold"
                    >
                      {val}
                    </div>
                  );
                }
                return (
                  <div
                    onClick={() => dispatch(setOrderTimeSlot(val))}
                    key={index}
                    className="bg-gray-100 p-2 text-center hover:ring-2 hover:ring-amber-500 rounded-md font-bold"
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* confirm button */}
        <button
          onClick={() => dispatch(closeStartOrder())}
          className="bg-amber-500 p-2 rounded-2xl text-center font-bold cursor-pointer"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default StartOrderBox;
