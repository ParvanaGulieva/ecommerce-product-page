import CartItem from "components/CartItem";
import React, { useRef } from "react";

const Cart = ({
  setShowCart,
  setQuantity,
  showCart,
  quantity,
}: {
  setShowCart: (value: boolean) => void;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  showCart: boolean;
  quantity: number;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShowCart(false);
    }
  };

  return (
    <div className="cart-container" onClick={handleOverlayClick}>
      <div ref={modalRef}>
        <div className="title">Cart</div>
        <div className={quantity > 0 ? "contain" : "contain empty"}>
          {quantity > 0 ? (
            <CartItem num={quantity} setQuantity={setQuantity} />
          ) : (
            <p>Cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
