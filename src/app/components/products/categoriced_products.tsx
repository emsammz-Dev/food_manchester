import { addToCart, ProductType } from "@/features/cart/cartSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { RootState } from "@/app/store";
import ProductDetailBox from "./product_detail_box";
import { openProductBox } from "@/features/general/generalSlice";
import ProductCart from "./product_card";
const menuItems = [
  {
    category: "Starter",
    name: "Paneer Tikka",
    detail: "Grilled marinated cottage cheese cubes with spices",
    price: 220,
    type: "Veg",
  },
  {
    category: "Starter",
    name: "Chicken Tandoori",
    detail: "Charcoal-grilled chicken marinated in yogurt and spices",
    price: 280,
    type: "Non-Veg",
  },
  {
    category: "Main Course",
    name: "Butter Chicken",
    detail: "Creamy tomato-based curry with tandoori chicken",
    price: 320,
    type: "Non-Veg",
  },
  {
    category: "Main Course",
    name: "Palak Paneer",
    detail: "Cottage cheese in spinach gravy",
    price: 250,
    type: "Veg",
  },
  {
    category: "Dessert",
    name: "Gulab Jamun",
    detail: "Fried milk solids in sugar syrup",
    price: 90,
    type: "Veg",
  },
  {
    category: "Dessert",
    name: "Rasgulla",
    detail: "Spongy white cheese balls soaked in sugar syrup",
    price: 85,
    type: "Veg",
  },
  {
    category: "Snack",
    name: "Samosa",
    detail: "Crispy pastry filled with spicy mashed potatoes",
    price: 25,
    type: "Veg",
  },
  {
    category: "Beverage",
    name: "Masala Chai",
    detail: "Spiced Indian milk tea",
    price: 40,
    type: "Veg",
  },
  {
    category: "Beverage",
    name: "Mango Lassi",
    detail: "Sweet mango yogurt smoothie",
    price: 60,
    type: "Veg",
  },
  {
    category: "Starter",
    name: "Fish Amritsari",
    detail: "Spiced deep-fried fish bites",
    price: 300,
    type: "Non-Veg",
  },
  {
    category: "Main Course",
    name: "Chole Bhature",
    detail: "Spicy chickpeas served with fried bread",
    price: 180,
    type: "Veg",
  },
  {
    category: "Main Course",
    name: "Mutton Rogan Josh",
    detail: "Slow-cooked lamb in Kashmiri-style curry",
    price: 350,
    type: "Non-Veg",
  },
  {
    category: "Dessert",
    name: "Kulfi",
    detail: "Traditional frozen dairy dessert with nuts",
    price: 80,
    type: "Veg",
  },
  {
    category: "Snack",
    name: "Pakora",
    detail: "Vegetable fritters deep-fried in chickpea batter",
    price: 45,
    type: "Veg",
  },
  {
    category: "Starter",
    name: "Tandoori Prawns",
    detail: "Prawns marinated in spices and grilled",
    price: 340,
    type: "Non-Veg",
  },
  {
    category: "Main Course",
    name: "Dal Makhani",
    detail: "Black lentils cooked with cream and butter",
    price: 210,
    type: "Veg",
  },
  {
    category: "Main Course",
    name: "Egg Curry",
    detail: "Boiled eggs in spicy gravy",
    price: 200,
    type: "Non-Veg",
  },
  {
    category: "Dessert",
    name: "Jalebi",
    detail: "Deep-fried syrupy spirals",
    price: 70,
    type: "Veg",
  },
  {
    category: "Beverage",
    name: "Filter Coffee",
    detail: "South Indian strong brewed coffee with milk",
    price: 50,
    type: "Veg",
  },
  {
    category: "Main Course",
    name: "Veg Biryani",
    detail: "Spiced basmati rice with mixed vegetables",
    price: 240,
    type: "Veg",
  },
  {
    category: "Main Course",
    name: "Chicken Biryani",
    detail: "Layered rice with marinated chicken and spices",
    price: 280,
    type: "Non-Veg",
  },
  {
    category: "Snack",
    name: "Kathi Roll",
    detail: "Flatbread rolled with paneer and veggies",
    price: 150,
    type: "Veg",
  },
  {
    category: "Snack",
    name: "Chicken Momos",
    detail: "Steamed dumplings filled with minced chicken",
    price: 120,
    type: "Non-Veg",
  },
  {
    category: "Dessert",
    name: "Rabri",
    detail: "Thickened sweetened milk with dry fruits",
    price: 95,
    type: "Veg",
  },
  {
    category: "Beverage",
    name: "Nimbu Pani",
    detail: "Lemonade with Indian spices",
    price: 30,
    type: "Veg",
  },
  {
    category: "Starter",
    name: "Hara Bhara Kabab",
    detail: "Spinach and green pea patties with Indian spices",
    price: 160,
    type: "Veg",
  },
  {
    category: "Starter",
    name: "Mutton Seekh Kebab",
    detail: "Minced mutton skewers grilled to perfection",
    price: 330,
    type: "Non-Veg",
  },
  {
    category: "Main Course",
    name: "Shahi Paneer",
    detail: "Cottage cheese in a rich cream-based gravy",
    price: 260,
    type: "Veg",
  },
  {
    category: "Main Course",
    name: "Prawn Masala",
    detail: "Prawns cooked in a spicy coastal-style curry",
    price: 360,
    type: "Non-Veg",
  },
  {
    category: "Dessert",
    name: "Malai Kulfi",
    detail: "Dense milk frozen dessert with cardamom and saffron",
    price: 85,
    type: "Veg",
  },
  {
    category: "Dessert",
    name: "Kheer",
    detail: "Traditional Indian rice pudding with cardamom",
    price: 75,
    type: "Veg",
  },
  {
    category: "Snack",
    name: "Bhel Puri",
    detail: "Puffed rice tossed with chutneys and vegetables",
    price: 40,
    type: "Veg",
  },
  {
    category: "Beverage",
    name: "Rose Milk",
    detail: "Chilled sweetened milk with rose essence",
    price: 45,
    type: "Veg",
  },
  {
    category: "Beverage",
    name: "Sweet Lassi",
    detail: "Creamy yogurt drink sweetened with sugar and cardamom",
    price: 55,
    type: "Veg",
  },
  {
    category: "Starter",
    name: "Veg Manchurian",
    detail: "Crispy vegetable balls in tangy Indo-Chinese sauce",
    price: 190,
    type: "Veg",
  },
  {
    category: "Main Course",
    name: "Paneer Lababdar",
    detail: "Paneer cubes in a creamy tomato-onion gravy",
    price: 270,
    type: "Veg",
  },
  {
    category: "Main Course",
    name: "Keema Pav",
    detail: "Spiced minced meat served with buttered buns",
    price: 230,
    type: "Non-Veg",
  },
  {
    category: "Dessert",
    name: "Chocolate Halwa",
    detail: "Semolina and chocolate dessert with ghee",
    price: 90,
    type: "Veg",
  },
  {
    category: "Snack",
    name: "Vada Pav",
    detail: "Spicy potato fritter sandwiched in a pav bun",
    price: 30,
    type: "Veg",
  },
  {
    category: "Starter",
    name: "Tandoori Mushroom",
    detail: "Marinated mushrooms grilled in tandoor",
    price: 200,
    type: "Veg",
  },
  {
    category: "Main Course",
    name: "Fish Curry",
    detail: "Regional fish curry with tamarind and spices",
    price: 320,
    type: "Non-Veg",
  },
  {
    category: "Dessert",
    name: "Basundi",
    detail: "Sweet thickened milk flavored with cardamom",
    price: 90,
    type: "Veg",
  },
  {
    category: "Beverage",
    name: "Aam Panna",
    detail: "Raw mango summer cooler with mint and spices",
    price: 35,
    type: "Veg",
  },
  {
    category: "Snack",
    name: "Onion Pakoda",
    detail: "Crispy onion fritters seasoned with herbs",
    price: 40,
    type: "Veg",
  },
  {
    category: "Main Course",
    name: "Egg Biryani",
    detail: "Fragrant biryani with spiced boiled eggs",
    price: 260,
    type: "Non-Veg",
  },
  {
    category: "Starter",
    name: "Veg Spring Roll",
    detail: "Deep-fried rolls filled with sautéed veggies",
    price: 120,
    type: "Veg",
  },
  {
    category: "Main Course",
    name: "Rajma Chawal",
    detail: "Red kidney beans curry served with rice",
    price: 190,
    type: "Veg",
  },
  {
    category: "Dessert",
    name: "Phirni",
    detail: "Ground rice pudding topped with nuts",
    price: 80,
    type: "Veg",
  },
  {
    category: "Snack",
    name: "Corn Chaat",
    detail: "Boiled corn tossed with masala and lemon juice",
    price: 55,
    type: "Veg",
  },
  {
    category: "Beverage",
    name: "Badam Milk",
    detail: "Milk infused with almonds and saffron",
    price: 60,
    type: "Veg",
  },
];
export const timeSlots = [
  "10:30 AM",
  "10:45 AM",
  "11:00 AM",
  "11:15 AM",
  "11:30 AM",
  "11:45 AM",
  "12:00 PM",
  "12:15 PM",
  "12:30 PM",
  "12:45 PM",
  "1:00 PM",
  "1:15 PM",
  "1:30 PM",
  "1:45 PM",
  "2:00 PM",
  "2:15 PM",
  "2:30 PM",
  "2:45 PM",
  "3:00 PM",
  "3:15 PM",
  "3:30 PM",
  "3:45 PM",
  "4:00 PM",
  "4:15 PM",
  "4:30 PM",
  "4:45 PM",
  "5:00 PM",
  "5:15 PM",
  "5:30 PM",
  "5:45 PM",
  "6:00 PM",
  "6:15 PM",
  "6:30 PM",
  "6:45 PM",
  "7:00 PM",
  "7:15 PM",
  "7:30 PM",
  "7:45 PM",
  "8:00 PM",
  "8:15 PM",
];

export interface MenuItemsType {
  category: string;
  name: string;
  detail: string;
  price: number;
  type: string;
}

interface AccType {
  [key: string]: {
    category: string;
    name: string;
    detail: string;
    price: number;
    type: string;
  }[];
}

export const categoriesMenu = menuItems.reduce((acc, details) => {
  if (!acc[details.category]) {
    acc[details.category] = [];
  }
  acc[details.category] = [...acc[details.category], details];
  return acc;
}, {} as AccType);

function CategoricedProducts() {
  return (
    <>
      <div className="flex flex-col bg-gray-100 py-14 gap-16 justify-center items-center p-4">
        {/* corporate lunch */}
        {Object.keys(categoriesMenu).map((val, index) => (
          <div key={index} className="flex flex-col gap-8">
            {/* heading */}
            <div>
              {/* <div className="text-xl font-bold text-gray-500"></div> */}
              <div className="text-2xl font-bold">{val}</div>
            </div>
            {/* products */}

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 min-lg:max-xl:w-[1000px] min-xl:w-[1000px]">
              {categoriesMenu[val].map((product, index) => (
                <ProductCart product={product} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoricedProducts;
