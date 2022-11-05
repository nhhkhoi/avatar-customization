import React from "react";

function Layers({ link, id, zIndex }) {
  return (
    <>
      <img
        src={`${link}/${id + 1}.png`}
        alt=""
        width="260"
        style={{
          zIndex: `${zIndex}`,
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      ></img>
    </>
  );
}

export default Layers;
