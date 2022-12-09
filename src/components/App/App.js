import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { imageByName } from 'api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    image: '',
    error: null,
  };

  handlelFormSubmit = async query => {
    try {
      const image = await imageByName(query);
      this.setState({ image });
    } catch (error) {
      this.setState({
        error:
          'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇',
      });
    }
  };

  // selectBreed = async breedId => {
  //   try {
  //     this.setState({ isLoading: true, error: null });
  //     const dog = await fetchDogByBreed(breedId);
  //     this.setState({ dog });
  //   } catch {
  //     this.setState({
  //       error:
  //         'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇',
  //     });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // };

  render() {
    const { error, image } = this.state;
    console.log(image);
    return (
      <>
        <Searchbar onSubmit={this.handlelFormSubmit} />
        {error && <p>{error}</p>}
        <ImageGallery hits={image} />
      </>
    );
  }
}
