import { useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
interface Props {
  text: string;
  color?: string;
  onClick2: () => void;
}

const Button = ({ text, onClick2, color = "primary" }: Props) => {
  const [isLoveSelected, setLoveSelection] = useState(false);

  const handleLoveIcon = () => {
    setLoveSelection(!isLoveSelected);
    console.log("clicked");
  };

  return (
    <div>
      {isLoveSelected ? (
        <CiHeart size={40} onClick={handleLoveIcon}></CiHeart>
      ) : (
        <IoHeartSharp color="red" size={40} onClick={handleLoveIcon} ></IoHeartSharp>
      )}
      <button type="button" className={"btn btn-" + color} onClick={onClick2}>
        {text}
      </button>
    </div>
  );
};

export default Button;
