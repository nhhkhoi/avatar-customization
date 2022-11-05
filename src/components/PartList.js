import React from "react";
import PartItems from "./PartItems";

function PartList({ partListId, partListName, partListURL, handleClick }) {
  const Total = {
    body: 17,
    eyes: 24,
    hair: 73,
    mouths: 24,
    eyebrows: 15,
    hats: 28,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };

  const partName = Total[`${partListId}`];
  const partArray = Array(partName).fill(null);

  return (
    <>
      <div className="list-section">
        <h2>{partListName}</h2>
        <div className="list">
          {partArray.map((object, i) => {
            return (
              <PartItems
                partItemId={i + 1}
                partItemURL={partListURL}
                handleClick={() => handleClick(i, partListURL)}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PartList;
