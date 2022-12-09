import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { imageByName } from 'api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    image: '',
    error: null,
    photo: [],
    isLoading: false,
  };

  async componentDidMount() {}

  // handlelFormSubmit = async image => {
  //   this.setState({ image });
  //   const photo = await imageByName(image);
  //   this.setState({ photo });
  // };

  handlelFormSubmit = async image => {
    try {
      this.setState({ image, isLoading: true, error: null });
      const photo = await imageByName(image);
      this.setState({ photo });
    } catch (error) {
      toast.error(
        'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇'
      );
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { error, image, photo } = this.state;
    console.log(image);
    return (
      <>
        <Searchbar onSubmit={this.handlelFormSubmit} />
        {error && <p>{error}</p>}
        <ImageGallery hits={photo} />
        <ToastContainer autoClose={2000} position="top-right" />
      </>
    );
  }
}
