import { useState } from "react";
import ProductDetailBox from "./product_detail_box";
import { ProductType } from "@/features/cart/cartSlice";
import { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { openProductBox, setProduct } from "@/features/general/generalSlice";

interface Props {
  product: ProductType;
}

function ProductCart({ product }: Props) {
  const dispatch = useDispatch();
  function handleOpenProductBox() {
    dispatch(setProduct(product));
    dispatch(openProductBox());
  }

  return (
    <>
      <div
        className="ring-1 ring-gray-200 rounded-xl p-4 flex gap-4 w-full shadow-xl shadow-gray-200 cursor-pointer"
        onClick={() => handleOpenProductBox()}
      >
        {/* product card detail left */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="font-bold">{product.name}</div>
          <div className="line-clamp-3 text-gray-600">{product.detail}</div>
          <div className="flex gap-4 font-bold">
            <div>
              <span>Rs.</span>
              <span>{product.price}</span>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="bg-gray-200 px-1 rounded-md content-center">
                {product.type}
              </span>
            </div>
          </div>
        </div>
        <div className="w-[120px] h-[120px] ring-1 ring-gray-100 rounded-xl bg-gray-200"></div>
      </div>
    </>
  );
}

export default ProductCart;
