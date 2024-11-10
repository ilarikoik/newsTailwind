import { useState } from "react";
import Items from "./NavbarItems";
import classNames from "classnames";
import { SearchOutlined } from "@ant-design/icons";

export default function NavBar({ titles, handlePress }) {
  const [menuItems, setMenuItems] = useState([
    "Top",
    "Business",
    "Sport",
    "Bitcoin",
    "Services",
    "Contact",
    "Trump",
    "Nhl",
    "Science",
  ]);
  const [opened, setOpened] = useState(false);
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <div className="bg-white">
        <section className="flex flex-col items-center  bg-white max-h-fit md:flex-row">
          <div className="flex flex-row w-full justify-around ">
            <h3 className="flex w-32 p-5 rounded-2xl h-12 items-center bg-news-blue text-light-white font-extrabold text-4xl mt-5 justify-center md:ml-7">
              NEWS
            </h3>
            <div>
              <div
                onClick={() => setOpened(!opened)}
                className={classNames(
                  `tham tham-e-squeeze tham-w-6 mt-9 right-0 lg:hidden`,
                  {
                    "tham-active": opened,
                  }
                )}
              >
                <div className="tham-box">
                  <div className="tham-inner" />
                </div>
              </div>
            </div>

            {opened && (
              <div className="flex flex-col absolute top-20 right-0 w-2/3 bg-white shadow-lg p-4 ">
                <div className="flex flex-row justify-between border border-news-blue rounded-lg p-1">
                  <input
                    placeholder="Hae"
                    className="flex w-full focus:outline-none  "
                    icon="search"
                    onChange={(event) => setKeyword(event.target.value)}
                  />
                  <SearchOutlined
                    className="flex text-gray-500"
                    style={{ fontSize: "20px" }}
                    onClick={() => {
                      handlePress(keyword);
                      setOpened(!opened);
                      setMenuItems([keyword, ...menuItems]);
                    }}
                  />
                </div>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index} className="py-2">
                      <a
                        onClick={() => {
                          handlePress(item);
                          setOpened(false);
                        }}
                        className="text-gray-800 hover:text-blue-600"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <ul className="p-5 hidden bg-white justify-around lg:flex flex-row mt-4">
            {!opened && (
              <Items
                items={menuItems}
                itemClass="flex justify-center items-center h-8 w-fit m-3 p-2 text-news-blue font-bold underline cursor-pointer"
                handlePress={handlePress}
              />
            )}
          </ul>
        </section>
      </div>
    </>
  );
}
