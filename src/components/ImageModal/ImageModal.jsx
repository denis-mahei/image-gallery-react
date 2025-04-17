import css from './ImageModal.module.css';
import { FaInstagram } from 'react-icons/fa';

const ImageModal = ({ item, onClose }) => {
  return (
    <div onClick={onClose} className={css.backdrop}>
      <div className={css.imageContainer}>
        <img
          src={item.urls.regular}
          alt={item.user.bio}
          className={css.modalImage}
          onClick={(e) => e.stopPropagation()}
        />
        <div className={css.infoBox}>
          <p>Author: {item.user?.name || 'Unknown'}</p>
          {item.user?.instagram_username && (
            <p className={css.social}>
              <FaInstagram color="brown" />: @
              {item.user?.instagram_username}
            </p>
          )}
          <p>Likes❤️: {item.likes}</p>
        </div>
      </div>
    </div>
  );
};
export default ImageModal;
