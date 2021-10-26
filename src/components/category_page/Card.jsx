/*jshint esversion: 6 */
import { Link } from "react-router-dom";

const Card = (props) => {
  const title = props.title;  
  return (
    <div className="" style={{borderRadius:'12px',overflow:'hidden',opacity:'.3',background:'rgba(0,0,0,.3)'}}>
      <Link className="catCardContainer"  to={`/${props.cat}/subcat/${props.sub_cat_slug}`}>
        <img className=" d-block catCardImg" src={props.src} alt="subCategory"/>
        <div className="cardOverlay text-light">{title}</div>
      </Link>
    </div>
  );
};
export default Card;
