import React from "react";

function PartItems({ partItemId, partItemURL }) {
  const imgURL = `${partItemURL}/${partItemId}.png`;

  return (
    <div>
      <div className="clickable square">
        <img
          src={imgURL}
          alt=""
          height="60"
          class="img-center"
          style={{ top: "50%" }}
        />
      </div>
    </div>
  );
}

export default PartItems;
