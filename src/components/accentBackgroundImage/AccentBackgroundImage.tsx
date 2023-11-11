import lightAccentBackground from '../../assets/light-image.avif';
import darkAccentBackground from '../../assets/dark-image.avif';
import './accentBackgroundImage.scss';

function AccentBackgroundImage() {
  return (
    <div className="accent-background-container">
      <div className="image-parent">
        <img
          src={lightAccentBackground}
          alt="Light accent background"
          className="image image-light"
          loading="eager"
        />
        <img
          src={darkAccentBackground}
          alt="Dark accent background"
          className="image image-dark"
          loading="eager"
        />
      </div>
    </div>
  );
}

export default AccentBackgroundImage;
