import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";
import { useSelector } from "react-redux";

const AccordianItem = ({data, index, clicked, onToggle}) => {
  const { title, items } = data.props;
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="accordian-item">
      <div className="accordian-title">
        <h2>{title}({items?.length})</h2>
        {
          clicked === index ? <i className="fa-solid fa-circle-chevron-down" onClick={onToggle}></i> : <i className="fa-solid fa-circle-chevron-up" onClick={onToggle}></i>
        }
      </div>
      {
        clicked === index ? <>
          {items?.map((item, itemIndex) => {
            const count = cartItems.filter(card => card.id === item.card.info.id)
            return (
              <div className="menu-item" key={item.card.info.id}>
              <span>{item.card.info.name} : {Math.round((item.card.info.price)/100)} </span>
              <div className="quantity">
                <button className="minus-btn" type="button" onClick={() => {
                  dispatch(removeItem(item.card.info.id))
                }}>
                  <i className="fa fa-minus"></i>
                </button>
                <input type="text" name="quantity" value={count.length} />
                <button className="plus-btn" type="button" onClick={
                  () => {
                    dispatch(addItem(item.card.info))
                  }
                  }>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
            )
                })}
        </> : <></>
      }
    </div>
  )
}


const AccordianContainer = (props) => {
  const [ clicked, setClicked ] = useState(false)
  const handleToggle = (index) => {
      if(clicked === index){
          return setClicked(false)
      } else {
          setClicked(index)
      }
  }
  
  return (
      <div className="accordian-container">
      {
        Array(1).fill("").map((item, index) => {
          return <AccordianItem data = {props} index = {index} clicked = {clicked} onToggle = {() => {handleToggle(index)}}/>
        })  
      }
      </div>
  )
}

export default AccordianContainer;