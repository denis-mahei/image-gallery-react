import css from './ImageModal.module.css';

const ImageModal = ({ item, onClose }) => {
  return (
    <div onClick={onClose} className={css.backdrop}>
      <div className={css.imageContainer}>
        <img
          src={item.urls.regular}
          alt={item.alt_description || 'image'}
          className={css.modalImage}
          onClick={(e) => e.stopPropagation()}
        />
        <div className={css.infoBox}>
          <p>Author: {item.user?.name || 'Unknown'}</p>
          {item.user?.instagram_username && (
            <p className={css.social}>
              instagram: @{item.user?.instagram_username}
            </p>
          )}
          <p>Likes❤️: {item.likes}</p>
        </div>
      </div>
    </div>
  );
};
export default ImageModal;
