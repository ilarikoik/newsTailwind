export default function Items({ items, itemClass, handlePress }) {
  return (
    <>
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
