export const ImageGallery = items => {
  console.log(items);
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <img src={item.webformatURL} alt="" />
        </li>
      ))}
    </ul>
  );
};
