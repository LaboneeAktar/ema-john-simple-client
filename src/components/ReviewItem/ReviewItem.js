import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveItem }) => {
  const { id, img, name, price, shipping, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />

      <div className="review-details-container">
        <div className="review-details">
          <h4>{name}</h4>
          <p>
            <strong>Price:</strong> $ <span className="design"> {price}</span>
          </p>
          <p>
            <strong>Shipping:</strong> ${" "}
            <span className="design">{shipping}</span>
          </p>
          <p>
            <strong>Quantity: </strong>
            <span className="design">{quantity}</span>
          </p>
        </div>

        <div className="delete-item">
          <button onClick={() => handleRemoveItem(id)} className="btn-delete">
            <FontAwesomeIcon
              className="delete-icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
