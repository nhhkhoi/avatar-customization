import React from "react";

function PartItems({ partItemId, partItemURL, handleClick }) {
  return (
    <div>
      <div className="clickable square" onClick={handleClick}>
        <img
          src={`${partItemURL}/${partItemId}.png`}
          alt=""
          height="60"
          className="img-center"
          style={{ top: "50%" }}
        />
      </div>
    </div>
  );
}

export default PartItems;
