import { Component } from 'react';
import scss from './imageGalleryItem.module.scss';

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.openModal(this.props.imageSrc);
  };

  render() {
    return (
      <>
        <li className={scss.galleryItem} onClick={this.handleClick}>
          <img className={scss.img} src={this.props.imageUrl} alt={this.props.imageName} />
        </li>
      </>
    );
  }
}

export default ImageGalleryItem;
