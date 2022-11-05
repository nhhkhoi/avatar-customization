import React, { useState } from "react";
import PartList from "./PartList";
import Avatar from "./Avatar";

function Customization() {
  const bodyLink = "character/body";
  const eyesLink = "character/eyes";
  const hairLink = "character/hair";
  const mouthLink = "character/mouths";
  const eyebrowsLink = "character/eyebrows";
  const glassesLink = "character/accessories/glasses";
  const hatLink = "character/accessories/hats";
  const clothing1Link = "character/clothes/layer_1";
  const clothing2Link = "character/clothes/layer_2";
  const clothing3Link = "character/clothes/layer_3";

  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(4);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(1);
  const [eyebrows, setEyebrows] = useState(2);
  const [glasses, setGlasses] = useState(-1);
  const [hat, setHat] = useState(-1);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);

  // Bound Id and Link
  const boundClick = (id, link) => {
    if (link === hairLink) {
      setHair(id);
    }
    if (link === bodyLink) {
      setBody(id);
    }
    if (link === eyesLink) {
      setEyes(id);
    }
    if (link === mouthLink) {
      setMouth(id);
    }
    if (link === eyebrowsLink) {
      setEyebrows(id);
    }
    if (link === glassesLink) {
      setGlasses(id);
    }
    if (link === hatLink) {
      setHat(id);
    }
    if (link === clothing1Link) {
      setClothing1(id);
    }
    if (link === clothing2Link) {
      setClothing2(id);
    }
    if (link === clothing3Link) {
      setClothing3(id);
    }
  };

  // Handle Click
  const handleClick = (id, link) => {
    boundClick(id, link);
  };
  // Handle Randomize
  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const handleRandomize = () => {
    setBody(randomInteger(0, 16));
    setEyes(randomInteger(0, 23));
    setHair(randomInteger(0, 72));
    setMouth(randomInteger(0, 23));
    setEyebrows(randomInteger(0, 14));
    setHat(randomInteger(0, 27));
    setGlasses(randomInteger(0, 16));
    setClothing1(randomInteger(0, 4));
    setClothing2(randomInteger(0, 4));
    setClothing3(randomInteger(0, 8));
  };
  return (
    <div>
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <div className="avatar">
              <Avatar
                body={body}
                eyes={eyes}
                hair={hair}
                mouth={mouth}
                eyebrows={eyebrows}
                glasses={glasses}
                hat={hat}
                clothing1={clothing1}
                clothing2={clothing2}
                clothing3={clothing3}
              />
            </div>
            <div className="text-center">
              <button className="button" onClick={handleRandomize}>
                Randomize!
              </button>
            </div>
          </div>
        </div>
        <div>
          <PartList
            partListId="body"
            partListName="Body"
            partListURL={bodyLink}
            handleClick={handleClick}
          />
          <PartList
            partListId="eyes"
            partListName="Eyes"
            partListURL={eyesLink}
            handleClick={handleClick}
          />
          <PartList
            partListId="hair"
            partListName="Hair"
            partListURL={hairLink}
            handleClick={handleClick}
          />
          <PartList
            partListId="mouths"
            partListName="Mouths"
            partListURL={mouthLink}
            handleClick={handleClick}
          />
          <PartList
            partListId="eyebrows"
            partListName="Eyebrows"
            partListURL={eyebrowsLink}
            handleClick={handleClick}
          />
          <PartList
            partListId="glasses"
            partListName="Glasses"
            partListURL={glassesLink}
            handleClick={handleClick}
          />
          <PartList
            partListId="hats"
            partListName="Hats"
            partListURL={hatLink}
            handleClick={handleClick}
          />
          <PartList
            partListId="clothing1"
            partListName="Clothing (Layer1)"
            partListURL={clothing1Link}
            handleClick={handleClick}
          />
          <PartList
            partListId="clothing2"
            partListName="Clothing (Layer2)"
            partListURL={clothing2Link}
            handleClick={handleClick}
          />
          <PartList
            partListId="clothing3"
            partListName="Clothing (Layer3)"
            partListURL={clothing3Link}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Customization;
