This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

const menuItems = [
{ category: 'Starter', name: 'Paneer Tikka', detail: 'Grilled marinated cottage cheese cubes with spices', price: 220, type: 'Veg' },
{ category: 'Starter', name: 'Chicken Tandoori', detail: 'Charcoal-grilled chicken marinated in yogurt and spices', price: 280, type: 'Non-Veg' },
{ category: 'Main Course', name: 'Butter Chicken', detail: 'Creamy tomato-based curry with tandoori chicken', price: 320, type: 'Non-Veg' },
{ category: 'Main Course', name: 'Palak Paneer', detail: 'Cottage cheese in spinach gravy', price: 250, type: 'Veg' },
{ category: 'Dessert', name: 'Gulab Jamun', detail: 'Fried milk solids in sugar syrup', price: 90, type: 'Veg' },
{ category: 'Dessert', name: 'Rasgulla', detail: 'Spongy white cheese balls soaked in sugar syrup', price: 85, type: 'Veg' },
{ category: 'Snack', name: 'Samosa', detail: 'Crispy pastry filled with spicy mashed potatoes', price: 25, type: 'Veg' },
{ category: 'Beverage', name: 'Masala Chai', detail: 'Spiced Indian milk tea', price: 40, type: 'Veg' },
{ category: 'Beverage', name: 'Mango Lassi', detail: 'Sweet mango yogurt smoothie', price: 60, type: 'Veg' },
{ category: 'Starter', name: 'Fish Amritsari', detail: 'Spiced deep-fried fish bites', price: 300, type: 'Non-Veg' },
{ category: 'Main Course', name: 'Chole Bhature', detail: 'Spicy chickpeas served with fried bread', price: 180, type: 'Veg' },
{ category: 'Main Course', name: 'Mutton Rogan Josh', detail: 'Slow-cooked lamb in Kashmiri-style curry', price: 350, type: 'Non-Veg' },
{ category: 'Dessert', name: 'Kulfi', detail: 'Traditional frozen dairy dessert with nuts', price: 80, type: 'Veg' },
{ category: 'Snack', name: 'Pakora', detail: 'Vegetable fritters deep-fried in chickpea batter', price: 45, type: 'Veg' },
{ category: 'Starter', name: 'Tandoori Prawns', detail: 'Prawns marinated in spices and grilled', price: 340, type: 'Non-Veg' },
{ category: 'Main Course', name: 'Dal Makhani', detail: 'Black lentils cooked with cream and butter', price: 210, type: 'Veg' },
{ category: 'Main Course', name: 'Egg Curry', detail: 'Boiled eggs in spicy gravy', price: 200, type: 'Non-Veg' },
{ category: 'Dessert', name: 'Jalebi', detail: 'Deep-fried syrupy spirals', price: 70, type: 'Veg' },
{ category: 'Beverage', name: 'Filter Coffee', detail: 'South Indian strong brewed coffee with milk', price: 50, type: 'Veg' },
{ category: 'Main Course', name: 'Veg Biryani', detail: 'Spiced basmati rice with mixed vegetables', price: 240, type: 'Veg' },
{ category: 'Main Course', name: 'Chicken Biryani', detail: 'Layered rice with marinated chicken and spices', price: 280, type: 'Non-Veg' },
{ category: 'Snack', name: 'Kathi Roll', detail: 'Flatbread rolled with paneer and veggies', price: 150, type: 'Veg' },
{ category: 'Snack', name: 'Chicken Momos', detail: 'Steamed dumplings filled with minced chicken', price: 120, type: 'Non-Veg' },
{ category: 'Dessert', name: 'Rabri', detail: 'Thickened sweetened milk with dry fruits', price: 95, type: 'Veg' },
{ category: 'Beverage', name: 'Nimbu Pani', detail: 'Lemonade with Indian spices', price: 30, type: 'Veg' },
{ category: 'Starter', name: 'Hara Bhara Kabab', detail: 'Spinach and green pea patties with Indian spices', price: 160, type: 'Veg' },
{ category: 'Starter', name: 'Mutton Seekh Kebab', detail: 'Minced mutton skewers grilled to perfection', price: 330, type: 'Non-Veg' },
{ category: 'Main Course', name: 'Shahi Paneer', detail: 'Cottage cheese in a rich cream-based gravy', price: 260, type: 'Veg' },
{ category: 'Main Course', name: 'Prawn Masala', detail: 'Prawns cooked in a spicy coastal-style curry', price: 360, type: 'Non-Veg' },
{ category: 'Dessert', name: 'Malai Kulfi', detail: 'Dense milk frozen dessert with cardamom and saffron', price: 85, type: 'Veg' },
{ category: 'Dessert', name: 'Kheer', detail: 'Traditional Indian rice pudding with cardamom', price: 75, type: 'Veg' },
{ category: 'Snack', name: 'Bhel Puri', detail: 'Puffed rice tossed with chutneys and vegetables', price: 40, type: 'Veg' },
{ category: 'Beverage', name: 'Rose Milk', detail: 'Chilled sweetened milk with rose essence', price: 45, type: 'Veg' },
{ category: 'Beverage', name: 'Sweet Lassi', detail: 'Creamy yogurt drink sweetened with sugar and cardamom', price: 55, type: 'Veg' },
{ category: 'Starter', name: 'Veg Manchurian', detail: 'Crispy vegetable balls in tangy Indo-Chinese sauce', price: 190, type: 'Veg' },
{ category: 'Main Course', name: 'Paneer Lababdar', detail: 'Paneer cubes in a creamy tomato-onion gravy', price: 270, type: 'Veg' },
{ category: 'Main Course', name: 'Keema Pav', detail: 'Spiced minced meat served with buttered buns', price: 230, type: 'Non-Veg' },
{ category: 'Dessert', name: 'Chocolate Halwa', detail: 'Semolina and chocolate dessert with ghee', price: 90, type: 'Veg' },
{ category: 'Snack', name: 'Vada Pav', detail: 'Spicy potato fritter sandwiched in a pav bun', price: 30, type: 'Veg' },
{ category: 'Starter', name: 'Tandoori Mushroom', detail: 'Marinated mushrooms grilled in tandoor', price: 200, type: 'Veg' },
{ category: 'Main Course', name: 'Fish Curry', detail: 'Regional fish curry with tamarind and spices', price: 320, type: 'Non-Veg' },
{ category: 'Dessert', name: 'Basundi', detail: 'Sweet thickened milk flavored with cardamom', price: 90, type: 'Veg' },
{ category: 'Beverage', name: 'Aam Panna', detail: 'Raw mango summer cooler with mint and spices', price: 35, type: 'Veg' },
{ category: 'Snack', name: 'Onion Pakoda', detail: 'Crispy onion fritters seasoned with herbs', price: 40, type: 'Veg' },
{ category: 'Main Course', name: 'Egg Biryani', detail: 'Fragrant biryani with spiced boiled eggs', price: 260, type: 'Non-Veg' },
{ category: 'Starter', name: 'Veg Spring Roll', detail: 'Deep-fried rolls filled with sautéed veggies', price: 120, type: 'Veg' },
{ category: 'Main Course', name: 'Rajma Chawal', detail: 'Red kidney beans curry served with rice', price: 190, type: 'Veg' },
{ category: 'Dessert', name: 'Phirni', detail: 'Ground rice pudding topped with nuts', price: 80, type: 'Veg' },
{ category: 'Snack', name: 'Corn Chaat', detail: 'Boiled corn tossed with masala and lemon juice', price: 55, type: 'Veg' },
{ category: 'Beverage', name: 'Badam Milk', detail: 'Milk infused with almonds and saffron', price: 60, type: 'Veg' },
];

encode URI
encodeURIComponent("fresh food");
decode Uri
decodeURIComponent("fresh%20food");
