import Icon from "../Icon/Icon";
import "./card.css";

const Card = ({ player, onPlay, index, gameEnd }) => {
  let icon = <Icon />;
  if (player === "X") {
    icon = <Icon name="cross" />;
  } else if (player === "O") {
    icon = <Icon name="circle" />;
  }

  return (
    <div
      className="card"
      onClick={() => {
        !player && !gameEnd && onPlay(index);
      }}
    >
      {icon}
    </div>
  );
};

export default Card;
