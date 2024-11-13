export default function CardRow({ items, itemCon, itemh3, itemp }) {
  return (
    <div className="flex flex-wrap justify-evenly">
      {items.length > 0 &&
        items.map((item, index) => {
          return (
            <div className="flex flex-col items-center bg-light-white rounded-lg w-2/6 h-72 m-2 xl:w-3/12">
              <h3 className={itemh3}>{item.title}</h3>
              <div
                className="flex w-full h-96 bg-cover bg-center bg-no-repeat  cursor-pointer"
                onClick={() => window.open(item.url, "_blank")}
                style={{
                  backgroundImage: `url(${
                    item.urlToImage
                      ? item.urlToImage
                      : "https://imgproxy.vgn.at/?url=https%3A%2F%2Fat-vie-1-vgn-prod-statamic-tvmedia.sos-at-vie-1.exoscale-cdn.com%2Fistock-1445362736.jpg&width=2560&quality=75&format=webp"
                  })`,
                }}
              ></div>
            </div>
          );
        })}
    </div>
  );
}
