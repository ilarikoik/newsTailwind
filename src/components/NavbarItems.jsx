///
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
export default function Items({ items, itemClass, handlePress }) {
  const [keyword, setKeyword] = useState("Top");

  return (
    <>
      <div className="flex flew-row justify-center items-center w-full p-3 h-8 mt-4 bg-news-blue rounded-md left-0 ">
        <input
          placeholder="Hae"
          className="flex w-16 h-5 focus:outline-none mr-3 rounded-sm p-1 lg:w-18 xl:w-36"
          icon="search"
          onChange={(event) => setKeyword(event.target.value)}
        />
        <SearchOutlined
          className="flex text-white h-full"
          style={{ fontSize: "20px" }}
          onClick={() => {
            handlePress(keyword);
            //setMenuItems([keyword, ...menuItems]);
          }}
        />
      </div>
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={itemClass}
            onClick={() => handlePress(item)}
          >
            {item}
          </li>
        );
      })}
    </>
  );
}
