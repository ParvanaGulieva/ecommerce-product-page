import React, { useState } from "react";
import img1 from "../../assets/image-product-1-thumbnail.jpg";
import img2 from "../../assets/image-product-2-thumbnail.jpg";
import img3 from "../../assets/image-product-3-thumbnail.jpg";
import img4 from "../../assets/image-product-4-thumbnail.jpg";

const ImageModal = ({
  setShowModal,
  activeImage,
  bigImageMap,
  handleImageClick,
}: {
  setShowModal: (value: boolean) => void;
  bigImageMap: Record<string, any>;
  activeImage: string;
  handleImageClick: (imageName: string) => void;
}) => {
  const imagesArray = ["img1", "img2", "img3", "img4"];
  const [activeIndex, setActiveIndex] = useState(
    imagesArray.indexOf(activeImage)
  );

  const handleNextClick = () => {
    const nextIndex = activeIndex + 1;
    if (nextIndex < imagesArray.length) {
      setActiveIndex(nextIndex);
      handleImageClick(imagesArray[nextIndex]);
    }
  };

  const handlePrevClick = () => {
    const prevIndex = activeIndex - 1;
    if (prevIndex >= 0) {
      setActiveIndex(prevIndex);
      handleImageClick(imagesArray[prevIndex]);
    }
  };

  return (
    <div className="image-modal">
      <div className="image-container">
        <svg
          onClick={() => setShowModal(false)}
          className="close-icon"
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
        <img
          className="modal-big-image"
          src={bigImageMap[activeImage]}
          alt=""
        />

        <div className="next" onClick={handleNextClick}>
          <svg
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className="next-icon"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="prev" onClick={handlePrevClick}>
          <svg
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className="prev-icon"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="gallery">
          <div
            className={activeImage === "img1" ? "active img1" : "img1"}
            onClick={() => handleImageClick("img1")}
          >
            <img src={img1} alt="image1" />
          </div>
          <div
            className={activeImage === "img2" ? "active img2" : "img2"}
            onClick={() => handleImageClick("img2")}
          >
            <img src={img2} alt="image2" />
          </div>
          <div
            className={activeImage === "img3" ? "active img3" : "img3"}
            onClick={() => handleImageClick("img3")}
          >
            <img src={img3} alt="image3" />
          </div>
          <div
            className={activeImage === "img4" ? "active img4" : "img4"}
            onClick={() => handleImageClick("img4")}
          >
            <img src={img4} alt="image4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
