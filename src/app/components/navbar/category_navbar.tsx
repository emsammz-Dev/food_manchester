import { categoriesMenu } from "../products/categoriced_products";

function CategoryNavbar() {
  return (
    <>
      <div className="h-12 px-16 flex justify-between items-center sticky top-[70px] bg-white border-b-[1px] border-gray-200 overflow-hidden">
        {Object.keys(categoriesMenu).map((val, index) => (
          <span key={index}>{val}</span>
        ))}
      </div>
    </>
  );
}

export default CategoryNavbar;
