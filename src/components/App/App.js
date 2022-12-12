import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { imageByName } from 'api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadMore } from 'components/Button/Button';
import { Section } from './App.styled';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    page: 1,
    image: '',
    error: null,
    photo: [],
    isLoading: false,
  };

  handlelFormSubmit = image => {
    this.setState({
      page: 1,
      image,
      error: null,
      photo: [],
      isLoading: false,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.image !== this.state.image
    ) {
      try {
        this.setState({ isLoading: true });
        const { image, page } = this.state;
        const photo = await imageByName(image, page);
        this.setState(prevState => ({
          photo: [...prevState.photo, ...photo],
        }));
      } catch (error) {
        toast.error(
          'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇'
        );
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { error, image, photo, isLoading } = this.state;
    console.log(photo);
    return (
      <Section>
        <Searchbar onSubmit={this.handlelFormSubmit} />
        {isLoading && <Loader />}
        {error && <p>{error}</p>}
        {image && <ImageGallery hits={photo} />}
        {photo.length >= 12 && <LoadMore onClick={this.loadMore} />}
        <ToastContainer autoClose={2000} position="top-right" />
      </Section>
    );
  }
}
