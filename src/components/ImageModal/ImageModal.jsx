import css from './ImageModal.module.css';

const ImageModal = ({ item, onClose }) => {
  return (
    <div onClick={onClose} className={css.backdrop}>
      <img
        src={item.urls.regular}
        alt={item.description}
        className={css.modalImage}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};
export default ImageModal;
console.log('close');
