import { useState } from "react";
import Items from "./NavbarItems";

export default function NavBar({ titles, handlePress }) {
  return (
    <>
      <div className="bg-white">
        <section className="flex flex-col items-center  bg-white max-h-fit md:flex-row">
          <h3 className="flex w-32 p-5 rounded-2xl h-12 items-center bg-news-blue text-light-white font-extrabold text-4xl mt-5 justify-center md:ml-7">
            NEWS
          </h3>

          <ul className="flex flex-row flex-wrap w-full p-5  bg-white justify-around md:w-full mt-4">
            <Items
              items={titles}
              itemClass="flex justify-center items-center h-8 w-fit m-3 p-2 text-news-blue font-bold underline cursor-pointer"
              handlePress={handlePress}
            />
          </ul>
        </section>
      </div>
    </>
  );
}
