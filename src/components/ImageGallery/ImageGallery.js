export const ImageGallery = ({ hits }) => {
  console.log(hits);
  return (
    <ul>
      {hits.map(hit => (
        <li key={hit.id}>
          <img src={hit.webformatURL} alt="" />
        </li>
      ))}
    </ul>
  );
};
