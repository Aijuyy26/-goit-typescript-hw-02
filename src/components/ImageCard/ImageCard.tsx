import React from "react";
import styles from "./ImageCard.module.css";

interface ImageCardProps {
  imgUrl: string;
  imgDescr: string;
  onClick: (imgUrl: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imgUrl, imgDescr, onClick }) => {
  const handleClick = () => {
    onClick(imgUrl);
  };

  return (
    <div className={styles.imageCard} onClick={handleClick}>
      <img src={imgUrl} alt={imgDescr} />
    </div>
  );
};

export default ImageCard;