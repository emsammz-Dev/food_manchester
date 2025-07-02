"use client";
import { useParams } from "next/navigation";
import { groceryCategories, groceryType } from "../../page";
import Link from "next/link";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { addToGroceryCart } from "@/features/groceryCart/groceryCartSlice";
// roostate import from app/store not app/query
import ProductBrandCard from "@/app/components/groceryProducts/grocery_pbrand_card";
import { RootState } from "@/app/store";

function ProductComp() {
  const { product, productType } = useParams<{
    product: string;
    productType: string;
  }>();

  const productTypeDecoded = decodeURIComponent(productType);
  const productDecoded = decodeURIComponent(product);

  const b = groceryCategories[productTypeDecoded].find(
    (val1) => val1.name == productDecoded
  );

  const dispatch = useDispatch();

  const groceryCart = useSelector(
    (state: RootState) => state.groceryCart.groceryProducts
  );
  console.log(groceryCart);
  return (
    <>
      <div className="p-8 flex flex-col gap-8 bg-gray-200 text-black">
        {/* navigation shortcut */}
        <div className="flex gap-2 justify-end">
          <Link
            href={"/collections"}
            className="hover:underline underline-offset-2 cursor-pointer"
          >
            Grocery
          </Link>
          <span>{"/"}</span>
          <Link
            href={`/collections/${productTypeDecoded}`}
            className="hover:underline underline-offset-2 cursor-pointer"
          >
            {productTypeDecoded}
          </Link>
          <span>{"/"}</span>
          <div className="font-light text-gray-500 italic">
            {productDecoded}
          </div>
        </div>
        {/* product name */}
        <div className="text-xl font-bold">{b?.name}</div>
        {/* product brands */}
        <div className="flex flex-col gap-4">
          {b?.brands.map((b, index) => (
            <ProductBrandCard
              key={index}
              productDecoded={productDecoded}
              brand={b}
            />
          ))}
        </div>

        {/* related category products */}
        <div className="bg-gray-300/50 p-4 rounded-xl flex flex-col gap-8">
          <div className="font-bold text-lg">{productTypeDecoded}</div>
          <div className="flex flex-wrap gap-4 justify-center">
            {groceryCategories[productTypeDecoded].map((p, index) => {
              if (p.name != productDecoded) {
                return (
                  <Link
                    key={index}
                    className="bg-gray-400 w-52 h-42 rounded-xl p-4 bg-[url(/paratha.avif)] bg-center font-bold cursor-pointer flex justify-center items-end shadow-md shadow-gray-500 hover:shadow-xl"
                    href={`/collections/${productTypeDecoded}/${p.name}`}
                  >
                    <span className="bg-white/30 backdrop-blur-2xl px-2 rounded-sm text-center">
                      {p.name}
                    </span>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductComp;
