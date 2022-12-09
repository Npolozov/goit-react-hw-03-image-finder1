import { Item, ImageGalleryItemimage } from './ImageGalleryItem';

export const ImageGalleryItem = ({ hit: { webformatURL, largeImageURL } }) => {
  return (
    <Item>
      <ImageGalleryItemimage src={webformatURL} alt="" />
    </Item>
  );
};
