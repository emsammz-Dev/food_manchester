"use client";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCartBox,
  closeGroceryCart,
  openSignInToUsBox,
} from "@/features/general/generalSlice";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import GrocerySideCart from "../components/groceryProductsCart/grocery_side_cart";
import { RootState } from "../store";

export const groceryCategories: {
  [category: string]: {
    name: string;
    brands: {
      name: string;
      weight: string;
      price: number;
    }[];
  }[];
} = {
  "Fresh Produce": [
    {
      name: "Apples",
      brands: [
        { name: "Farm Fresh", weight: "1kg", price: 120 },
        { name: "Nature's Basket", weight: "1kg", price: 135 },
        {
          name: "OrganicBox",
          weight: "1kg",
          price: 160,
        },
      ],
    },
    {
      name: "Bananas",
      brands: [
        { name: "Golden Bunch", weight: "1 dozen", price: 60 },
        { name: "Daily Harvest", weight: "1 dozen", price: 65 },
        { name: "TropiFarm", weight: "1 dozen", price: 70 },
      ],
    },
    {
      name: "Spinach",
      brands: [
        { name: "GreenLeaf", weight: "250g", price: 25 },
        { name: "FreshKart", weight: "250g", price: 22 },
        { name: "AgriPure", weight: "250g", price: 28 },
      ],
    },
    {
      name: "Carrots",
      brands: [
        { name: "Organic Roots", weight: "500g", price: 30 },
        { name: "Nature's Basket", weight: "500g", price: 34 },
        { name: "VeggieVille", weight: "500g", price: 33 },
      ],
    },
    {
      name: "Onions",
      brands: [
        { name: "Krishi Supply", weight: "1kg", price: 25 },
        { name: "HarvestKart", weight: "1kg", price: 28 },
        { name: "Farm2Door", weight: "1kg", price: 26 },
      ],
    },
  ],

  "Dairy & Eggs": [
    {
      name: "Milk",
      brands: [
        { name: "Amul", weight: "1L", price: 55 },
        { name: "Mother Dairy", weight: "1L", price: 56 },
        { name: "Nandini", weight: "1L", price: 54 },
      ],
    },
    {
      name: "Paneer",
      brands: [
        { name: "Amul", weight: "200g", price: 85 },
        { name: "Gowardhan", weight: "200g", price: 90 },
        { name: "Mother Dairy", weight: "200g", price: 88 },
      ],
    },
    {
      name: "Yogurt",
      brands: [
        { name: "Epigamia", weight: "100g", price: 35 },
        { name: "Danone", weight: "85g", price: 32 },
        { name: "Amul", weight: "200g", price: 40 },
      ],
    },
    {
      name: "Cheese Slices",
      brands: [
        { name: "Britannia", weight: "100g", price: 70 },
        { name: "Amul", weight: "100g", price: 72 },
        { name: "Go Cheese", weight: "100g", price: 68 },
      ],
    },
    {
      name: "Eggs",
      brands: [
        { name: "NutriFresh", weight: "6 pcs", price: 50 },
        { name: "BestFarm", weight: "12 pcs", price: 95 },
        { name: "Healthy Hen", weight: "12 pcs", price: 110 },
      ],
    },
  ],

  "Oils & Ghee": [
    {
      name: "Sunflower Oil",
      brands: [
        { name: "Fortune", weight: "1L", price: 145 },
        { name: "Saffola", weight: "1L", price: 155 },
        { name: "Dhara", weight: "1L", price: 150 },
      ],
    },
    {
      name: "Mustard Oil",
      brands: [
        { name: "Engine", weight: "1L", price: 150 },
        { name: "Patanjali", weight: "1L", price: 145 },
      ],
    },
    {
      name: "Olive Oil",
      brands: [
        { name: "Figaro", weight: "1L", price: 780 },
        { name: "Borges", weight: "1L", price: 820 },
        { name: "Disano", weight: "1L", price: 750 },
      ],
    },
    {
      name: "Desi Ghee",
      brands: [
        { name: "Amul", weight: "500ml", price: 290 },
        { name: "Mother Dairy", weight: "500ml", price: 295 },
      ],
    },
    {
      name: "Groundnut Oil",
      brands: [
        { name: "Dhara", weight: "1L", price: 170 },
        { name: "24 Mantra", weight: "1L", price: 180 },
      ],
    },
  ],

  "Snacks & Packaged Foods": [
    {
      name: "Chips",
      brands: [
        { name: "Lay's", weight: "100g", price: 30 },
        { name: "Bingo", weight: "90g", price: 28 },
        { name: "Uncle Chipps", weight: "75g", price: 25 },
      ],
    },
    {
      name: "Biscuits",
      brands: [
        { name: "Parle-G", weight: "250g", price: 20 },
        { name: "Hide & Seek", weight: "200g", price: 35 },
      ],
    },
    {
      name: "Instant Noodles",
      brands: [
        { name: "Maggi", weight: "70g", price: 15 },
        { name: "Top Ramen", weight: "70g", price: 14 },
        { name: "Yippee", weight: "70g", price: 16 },
      ],
    },
    {
      name: "Pasta",
      brands: [
        { name: "Del Monte", weight: "500g", price: 85 },
        { name: "Weikfield", weight: "500g", price: 90 },
      ],
    },
    {
      name: "Makhana",
      brands: [
        { name: "Too Yumm", weight: "100g", price: 130 },
        { name: "Farmley", weight: "100g", price: 140 },
      ],
    },
  ],

  "Sauces & Spreads": [
    {
      name: "Tomato Ketchup",
      brands: [
        { name: "Kissan", weight: "500g", price: 90 },
        { name: "Maggi", weight: "500g", price: 95 },
      ],
    },
    {
      name: "Peanut Butter",
      brands: [
        { name: "Pintola", weight: "1kg", price: 350 },
        { name: "Alpino", weight: "1kg", price: 340 },
      ],
    },
    {
      name: "Mayonnaise",
      brands: [
        { name: "Del Monte", weight: "250g", price: 99 },
        { name: "FunFoods", weight: "250g", price: 95 },
      ],
    },
    {
      name: "Fruit Jam",
      brands: [
        { name: "Kissan", weight: "500g", price: 120 },
        { name: "Mapro", weight: "500g", price: 140 },
      ],
    },
    {
      name: "Soy Sauce",
      brands: [
        { name: "Kikkoman", weight: "200ml", price: 180 },
        { name: "Ching's Secret", weight: "200ml", price: 45 },
      ],
    },
  ],
};
export const groceryType = Object.keys(groceryCategories);

function Collections() {
  const groceryCartBox = useSelector(
    (state: RootState) => state.general.groceryCart
  );

  const groceryCart = useSelector(
    (state: RootState) => state.groceryCart.groceryProducts
  );

  const dispatch = useDispatch();
  return (
    <>
      <div className=" bg-gray-200 text-black">
        <div className="bg-[url(/grocery.avif)] h-64 bg-fixed bg-center h-64"></div>
        <div className="sticky top-[70px] bg-white flex justify-around items-center h-8 border-b-1 border-gray-400">
          {groceryType.map((val, index) => (
            <div key={index}>{val}</div>
          ))}
        </div>
        <div className="flex flex-col gap-8 p-8">
          {groceryType.map((val, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="text-xl font-bold">{val}</div>

              <div className="grid grid-cols-3 gap-4 p-4">
                {groceryCategories[val].map((p, index) => (
                  <Link
                    key={index}
                    href={`/collections/${val}/${p.name}`}
                    className="w-full h-32 rounded-md p-4 bg-[url(/apple.avif)] bg-center bg-gray-300 shadow-xl shadow-gray-400 cursor-pointer"
                  >
                    <span className="font-bold">{p.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Collections;
