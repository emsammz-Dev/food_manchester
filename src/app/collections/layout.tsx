"use client";
import React from "react";
import { useSelector } from "react-redux";
import GrocerySideCart from "../components/groceryProductsCart/grocery_side_cart";
import { RootState } from "../store";

function CollectionLayout({ children }: { children: React.ReactNode }) {
  const groceryCartBox = useSelector(
    (state: RootState) => state.general.groceryCart
  );

  const groceryCart = useSelector(
    (state: RootState) => state.groceryCart.groceryProducts
  );
  return (
    <>
      <div>{children}</div>
      {groceryCartBox && <GrocerySideCart />}
    </>
  );
}

export default CollectionLayout;
