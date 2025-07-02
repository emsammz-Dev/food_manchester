"use client";

import { CgProfile } from "react-icons/cg";
import { IoArrowForwardOutline } from "react-icons/io5";
import Footer from "./components/footer/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-black flex flex-col gap-12 bg-gray-100">
        <div className="h-screen flex flex-col">
          <div className="bg-[url(/home.avif)] h-64 bg-fixed bg-center h-64"></div>
          <div className="flex-1">lorem</div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-6 place-content-center">
          {/* grocerry */}
          <div className="flex flex-col text-center gap-4">
            <div className="flex flex-col gap-2">
              <div className="font-bold text-xl">Online Grocery</div>
              <div className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                quia quisquam at est enim repudiandae consequatur excepturi
                exercitationem, sequi iste.
              </div>
            </div>
            <Link
              href={"/collections"}
              className="font-bold text-md flex justify-center items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <span>View</span> <IoArrowForwardOutline />
            </Link>
          </div>
          {/*  menu */}
          <div className="flex flex-col text-center gap-4">
            <div className="flex flex-col gap-2">
              <div className="font-bold text-xl">Online Food Orders</div>
              <div className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                quia quisquam at est enim repudiandae consequatur excepturi
                exercitationem, sequi iste.
              </div>
            </div>
            <Link
              href={"/menu"}
              className="font-bold text-md flex justify-center items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <span>View</span> <IoArrowForwardOutline />
            </Link>
          </div>
          {/* catering */}
          <div className="flex flex-col text-center gap-4">
            <div className="flex flex-col gap-2">
              <div className="font-bold text-xl">Catering Menu</div>
              <div className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                quia quisquam at est enim repudiandae consequatur excepturi
                exercitationem, sequi iste.
              </div>
            </div>
            <Link
              href={"/catering"}
              className="font-bold text-md flex justify-center items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <span>View</span> <IoArrowForwardOutline />
            </Link>
          </div>
        </div>

        <div className="bg-[url(/top.avif)] bg-left bg-fixed h-42"></div>
        <div className="border-y-1 border-gray-300 p-4 flex justify-around">
          <div>
            <div className="font-bold">Open Every Day</div>
            <div>365</div>
          </div>
          <div>
            <div className="font-bold">Open Every Day</div>
            <div>365</div>
          </div>
          <div>
            <div className="font-bold">Open Every Day</div>
            <div>365</div>
          </div>
          <div>
            <div className="font-bold">Open Every Day</div>
            <div>365</div>
          </div>
        </div>

        {/* cards here */}
        <div className="flex justify-around p-8 gap-8">
          <div className="flex-1 text-4xl font-bold content-center text-balance">
            Maharashtra Focused Grocery Shop
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="font-bold">100+ Curated Product</div>
            <div className="border-l-4 p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              eos sed ex repellat tenetur libero omnis, officiis, culpa maiores,
              vel laboriosam? Quo consequuntur amet optio?
            </div>
          </div>
        </div>

        {/* collecttions */}
        <div className="p-8 flex flex-col gap-8">
          <div className="flex-1 text-4xl font-bold content-center text-balance">
            Collections
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* card */}
            <div className="flex flex-col gap-2">
              <div className="bg-gray-300 w-full h-32 rounded-md"></div>
              <div className="font-bold text-lg">Fresh Mithali</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                perferendis officiis commodi dicta. Quasi, minima.
              </div>
              <div className="font-bold text-md flex items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                <span>View</span>
                <span>
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col gap-2">
              <div className="bg-gray-300 w-full h-32 rounded-md"></div>
              <div className="font-bold text-lg">Fresh Mithali</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                perferendis officiis commodi dicta. Quasi, minima.
              </div>
              <div className="font-bold text-md flex items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                <span>View</span>
                <span>
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col gap-2">
              <div className="bg-gray-300 w-full h-32 rounded-md"></div>
              <div className="font-bold text-lg">Fresh Mithali</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                perferendis officiis commodi dicta. Quasi, minima.
              </div>
              <div className="font-bold text-md flex items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                <span>View</span>
                <span>
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>
            {/* card */}
            <div className="flex flex-col gap-2">
              <div className="bg-gray-300 w-full h-32 rounded-md"></div>
              <div className="font-bold text-lg">Fresh Mithali</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                perferendis officiis commodi dicta. Quasi, minima.
              </div>
              <div className="font-bold text-md flex items-center gap-2 text-gray-400 hover:text-gray-600 cursor-pointer">
                <span>View</span>
                <span>
                  <IoArrowForwardOutline />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* post */}
        <div className="p-8 flex flex-col gap-8">
          <div className="flex-1 text-4xl font-bold content-center text-balance">
            Recent Post
          </div>
          <div className="flex flex-col gap-4">
            {/* card */}
            <div className="flex gap-2 border-b-1 p-4">
              <div className="text-gray-400">
                <CgProfile size={50} />
              </div>
              <div>
                <div className="font-bold text-lg">Mr. Lorem Mithali</div>
                <div className="text-md text-gray-600">January 6, 2025</div>
                <div className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  perferendis officiis commodi dicta. Quasi, minima. Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Dolore dolor
                  itaque aliquam esse. Odit optio deserunt id corporis quaerat
                  nesciunt fugit porro suscipit voluptatem nostrum!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}
