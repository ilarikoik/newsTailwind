export default function Card({ items, itemCon, itemh3, itemp }) {
  return items.map((item, index) => {
    return (
      <div className="flex justify-center items-center">
        <div
          key={index}
          className={`${
            index % 2 === 0
              ? " bg-light-white  w-5/5 m-10 p-5 md:p-16 w-5/5 lg:w-4/6 rounded-lg"
              : itemCon
          }`}
        >
          <div
            className="flex flex-col lg:flex-row cursor-pointer"
            onClick={() => window.open(item.url, "_blank")}
          >
            <div
              className="flex w-full h-96 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${
                  item.urlToImage
                    ? item.urlToImage
                    : "https://imgproxy.vgn.at/?url=https%3A%2F%2Fat-vie-1-vgn-prod-statamic-tvmedia.sos-at-vie-1.exoscale-cdn.com%2Fistock-1445362736.jpg&width=2560&quality=75&format=webp"
                })`,
              }}
            ></div>
            <div className="flex flex-col p-5">
              <h3 className={itemh3}>{item.title}</h3>
              <p className={itemp}>{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
}
