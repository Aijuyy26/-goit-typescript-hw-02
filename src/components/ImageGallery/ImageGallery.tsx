import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

interface ImageGalleryItem {
  id: string;
  urls: { small: string };
  slug: string;
}

interface ImageGalleryProps {
  items: ImageGalleryItem[];
  onImageClick: (imgUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <ul className={styles.imageGallery}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard
            imgUrl={item.urls.small}
            imgDescr={item.slug}
            onClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;