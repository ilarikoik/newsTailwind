// src/App.jsx
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import fetchNewestNews from "./hooks/fetchNews";
import Card from "./components/Card";
import CardRow from "./components/CardRow";
import Test from "./components/Test";
import { ColumnWidthOutlined } from "@ant-design/icons";

function App() {
  const titles = ["Top", "Business", "Sport", "Bitcoin"];
  const [category, setCategory] = useState("Tesla");
  const [news, setNews] = useState([]);
  const [col, setCol] = useState(true);
  const [showChoice, setShowChoice] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const res = await fetchNewestNews(category);
      setNews(res);
    };
    getNews();
  }, [category]);

  const handlePress = (item) => {
    setCategory(item);
    console.log(item);
  };

  // näyttää layout vaihtoehon
  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      setShowChoice(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCol(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="h-full bg-white" onClick={handleToggle}>
      <NavBar titles={titles} handlePress={handlePress}></NavBar>
      <p className="flex justify-center mt-5 text-news-blue font-bold text-xl font-style: italic">
        {category}
      </p>

      {showChoice && (
        <div className="flex w-full justify-center">
          <p
            className="w-fit hidden lg:flex lg:justify-center cursor-pointer text-news-blue font-bold"
            onClick={() => setCol(!col)}
          >
            Change layout
            <ColumnWidthOutlined
              style={{ fontSize: "30px", color: "#1890ff", marginLeft: "8px" }}
            />
          </p>
        </div>
      )}
      {col ? (
        <Card
          items={news}
          itemCon=" h-86 w-4/5 bg-red m-10 p-5 bg-light-gray md:p-16 lg:w-3/5"
          itemh3="text-black font-bold p-3"
          itemp="mt-10"
        ></Card>
      ) : (
        <CardRow
          items={news}
          itemCon=" h-2/3 w-2/6 m-10 p-5 bg-red m-10 p-5 bg-purple-500"
          itemh3="text-black font-bold p-3"
          itemp="mt-10"
        />
      )}
    </div>
  );
}

export default App;
