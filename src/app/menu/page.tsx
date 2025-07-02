"use client";

import { useSelector } from "react-redux";

import Navbar from "../components/navbar/top_navbar";
import CategoricedProducts from "../components/products/categoriced_products";
import CategoryNavbar from "../components/navbar/category_navbar";
import StartOrder from "../components/startOrder/start_order";
import Footer from "../components/footer/footer";
import ProductDetailBox from "../components/products/product_detail_box";
import StartOrderBox from "../components/startOrder/start_order_box";
import OrderCartBox from "../components/sidecart/side_cart";
import SignIn from "../components/authentication/sign_in";
import RegisterIn from "../components/authentication/register_in";
import { RootState } from "../store";

function Menu() {
  const productBox = useSelector(
    (state: RootState) => state.general.productBox
  );
  const startOrder = useSelector(
    (state: RootState) => state.general.startOrder
  );
  const cartBox = useSelector((state: RootState) => state.general.cartBox);

  // sing in Box state
  const singInBox = useSelector((state: RootState) => state.general.signInToUs);
  //register In box
  const registerInBox = useSelector(
    (state: RootState) => state.general.registerInToUs
  );
  return (
    <div className="text-black">
      {/* start order, location, todays time */}
      <StartOrder />

      {/* food category */}
      <CategoryNavbar />

      {/* category products */}
      <CategoricedProducts />

      {/* footer */}
      <Footer />

      {/* all boxes */}
      {/* product detail box */}
      {productBox && <ProductDetailBox />}
      {/* start ordering box set address and time  */}
      {startOrder && <StartOrderBox />}
      {/* navarbar ordernow cart */}
      {cartBox && <OrderCartBox />}

      {/* signIn */}
      {singInBox && <SignIn />}
      {/* registerIn */}
      {registerInBox && <RegisterIn />}
    </div>
  );
}

export default Menu;
