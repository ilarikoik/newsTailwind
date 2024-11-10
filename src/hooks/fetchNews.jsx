//https://newsapi.org/v2/top-headlines?country=us&apiKey=720d484055cb4c7c956cb255ecc45004

import { APIANDKEY, URL } from "../config";

const fetchNewestNews = async (category) => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${category}&${APIANDKEY}`
    );
    const result = await res.json();
    console.log(result.articles);
    console.log(
      `https://newsapi.org/v2/top-headlines?q=${category}&${APIANDKEY}`
    );
    return result.articles;
  } catch (error) {
    console.log("Error fetching Newest top headlines " + error);
  }
};

export default fetchNewestNews;
