import css from './ImageModal.module.css';

const ImageModal = ({ item, onClose }) => {
  return (
    <div onClick={onClose} className={css.backdrop}>
      <img
        src={item.urls.regular}
        alt={item.bio}
        className={css.modalImage}
        onClick={(e) => e.stopPropagation()}
      />
      <div className={css.infoBox}>
        <p className={css.title}>
          Author: {item.user?.name || 'Unknown'}
        </p>
        <p>Instagram: @{item.user.instagram_username}</p>
      </div>
    </div>
  );
};
export default ImageModal;
