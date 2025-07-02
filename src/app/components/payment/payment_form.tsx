function PaymentForm() {
  return (
    <>
      <div className="bg-gray-200 flex flex-col gap-4 text-black p-8">
        {/* express payment */}
        <div className="flex flex-col gap-2">
          <div className="text-center">Express checkout</div>
          <div className="flex gap-2">
            <div className="flex-1 bg-amber-400 p-2 text-center rounded-sm">
              Shop Pay
            </div>
            <div className="flex-1 bg-amber-500 p-2 text-center rounded-sm">
              GPay
            </div>
          </div>
        </div>
        {/* or */}
        <div className="flex items-center justify-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-4 text-gray-400 whitespace-nowrap">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        {/* details contact, delivery, address, mobile no, pay now button  */}
        <div className="flex flex-col gap-8 p-8 bg-white rounded-sm">
          {/* contact */}
          <div className="flex flex-col gap-1">
            <div className="font-bold text-lg">Email</div>
            <input
              type="text"
              placeholder="Email (optional)"
              className="h-10 ring-1 ring-gray-400 rounded-sm px-2"
            />
            <label className="flex gap-2">
              <input type="checkbox"></input>
              <span className="text-gray-400">
                Email me with news and offers
              </span>
            </label>
          </div>

          {/* delivery */}
          <div className="flex flex-col gap-1">
            <div className="font-bold text-lg">Delivery</div>
            <div className="flex ring-1 ring-gray-400 rounded-sm">
              <div className="flex-1 text-center bg-white rounded-l-sm p-2">
                Pick Up
              </div>
              <div className="flex-1 text-center bg-gray-400 rounded-r-sm p-2">
                Delivery
              </div>
            </div>
            {/* delivery address */}
            <div className="flex flex-col gap-4 p-4 ring-1 ring-gray-400 rounded-sm my-8">
              <div className="font-bold">Delivery Address</div>
              {/* first name and last name */}
              <div className="flex gap-2">
                <input
                  type="text"
                  className="ring-1 h-8 px-2 rounded-sm flex-1 ring-gray-400"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="ring-1 h-8 px-2 rounded-sm flex-1 ring-gray-400"
                  placeholder="Last Name"
                />
              </div>
              {/* Company */}
              <input
                className="h-8 ring-1 ring-gray-400 rounded-sm px-2"
                placeholder="Company (optional)"
              ></input>
              {/* Addreess */}
              <input
                className="h-8 ring-1 ring-gray-400 rounded-sm px-2"
                placeholder="Addreess"
              ></input>
              {/* Apartment */}
              <input
                className="h-8 ring-1 ring-gray-400 rounded-sm px-2"
                placeholder="Apartment block no, house no"
              ></input>
              {/* city state and zip code */}
              <div className="flex justify-between">
                <input
                  className="h-8 ring-1 ring-gray-400 rounded-sm px-2"
                  placeholder="City"
                ></input>
                <input
                  className="h-8 ring-1 ring-gray-400 rounded-sm px-2"
                  placeholder="State"
                ></input>
                <input
                  className="h-8 ring-1 ring-gray-400 rounded-sm px-2"
                  placeholder="Zip Code"
                ></input>
              </div>
            </div>
          </div>

          {/* contact number */}
          <div className="flex flex-col gap-1">
            <div className="font-bold text-lg">Contact No</div>
            <input
              placeholder="Mobile Number"
              className="h-10 ring-1 ring-gray-400 rounded-sm px-2"
            />
          </div>

          {/* remember my details */}
          <label className="flex gap-2">
            <input type="checkbox" />
            <span>Remember my details for faster order next time</span>
          </label>

          {/* paynow button */}
          <div className="flex justify-center items-center">
            <button className="bg-amber-400 hover:bg-amber-500 p-2 rounded-sm">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentForm;
