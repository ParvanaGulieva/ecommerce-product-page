import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import ImageModal from "./components/ImageModal";
import img1Big from "./assets/image-product-1.jpg";
import img2Big from "./assets/image-product-2.jpg";
import img3Big from "./assets/image-product-3.jpg";
import img4Big from "./assets/image-product-4.jpg";

function App() {
  const [num, setNum] = useState(1);
  const [quantity, setQuantity] = useState(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState("img1");

  const bigImageMap: Record<string, any> = {
    img1: img1Big,
    img2: img2Big,
    img3: img3Big,
    img4: img4Big,
  };

  const handleImageClick = (imageName: string) => {
    setActiveImage(imageName);
  };

  return (
    <div className="App">
      <Navbar quantity={quantity} setQuantity={setQuantity} />
      <Details
        num={num}
        setNum={setNum}
        setQuantity={setQuantity}
        setShowModal={setShowModal}
        bigImageMap={bigImageMap}
        activeImage={activeImage}
        handleImageClick={handleImageClick}
      />
      {showModal && (
        <ImageModal
          setShowModal={setShowModal}
          bigImageMap={bigImageMap}
          activeImage={activeImage}
          handleImageClick={handleImageClick}
        />
      )}
    </div>
  );
}

export default App;
