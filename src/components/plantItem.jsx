import CareScale from "./careScale";
import "../styles/plantItem.css";

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

function PlantItem({ cover, name, water, light, price }) {
  return (
    <li className="jh-plant-item" onClick={() => handleClick(name)}>
      <span className="jh-plant-item-price">{price}€</span>
      <img className="jh-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
