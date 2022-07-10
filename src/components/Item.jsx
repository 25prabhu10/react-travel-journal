import { MdLocationOn } from "react-icons/md";

export const Item = ({ imgSrc, place, country, dates, desc, link }) => {
  return (
    <div className="item">
      <img src={imgSrc} alt={place} className="item__img" />
      <div className="item__details">
        <div className="item__loc">
          <MdLocationOn color="#f55a5a" size="12px" />
          <p className="item__loc-place">{country}</p>
          <a
            href={link}
            className="item__loc-link"
            target="_blank"
            referrerPolicy="no-referrer">
            View on Google Maps
          </a>
        </div>
        <h2 className="item__head">{place}</h2>
        <p className="item__date">{dates}</p>
        <p className="item__desc">{desc}</p>
      </div>
    </div>
  );
};
