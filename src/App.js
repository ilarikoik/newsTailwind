// src/App.jsx
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import fetchNewestNews from "./hooks/fetchNews";
import Card from "./components/Card";
import Test from "./components/Test";
function App() {
  const titles = ["Top", "Business", "Sport", "Bitcoin"];

  const [category, setCategory] = useState("Tesla");
  const [news, setNews] = useState([]);

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
  return (
    <div className="h-full bg-white">
      <NavBar titles={titles} handlePress={handlePress}></NavBar>
      <p className="flex justify-center mt-5 text-news-blue font-bold text-xl font-style: italic">
        News by: {category}
      </p>
      <Card
        items={news}
        itemCon=" h-86 w-4/5 bg-red m-10 p-5 bg-light-gray md:p-16 lg:w-3/5"
        itemh3="text-black font-bold p-3"
        itemp="mt-10"
      ></Card>
    </div>
  );
}

export default App;
