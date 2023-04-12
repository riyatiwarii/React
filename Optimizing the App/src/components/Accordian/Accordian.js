import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";


const AccordianItem = ({data, index, clicked, onToggle}) => {
  const { title, items } = data.props;
  const [itemCounts, setItemCounts] = useState(Array(items?.length).fill(0));

  const incrementItemCount = (itemIndex) => {
    const newCounts = [...itemCounts];
    newCounts[itemIndex] += 1;
    setItemCounts(newCounts);
  }
  const dispatch = useDispatch();

  const decrementItemCount = (itemIndex) => {
    const newCounts = [...itemCounts];
    if (newCounts[itemIndex] === 0) {
      return;
    }
    newCounts[itemIndex] -= 1;
    setItemCounts(newCounts);
  }

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
          {items?.map((item, itemIndex) => (
            <div className="menu-item" key={item.card.info.id}>
              <span>{item.card.info.name} : {Math.round((item.card.info.price)/100)} </span>
              <div className="quantity">
                <button className="minus-btn" type="button" onClick={() => {
                  decrementItemCount(itemIndex)
                  dispatch(removeItem(item.card.info.id))
                }}>
                  <i className="fa fa-minus"></i>
                </button>
                <input type="text" name="quantity" value={itemCounts[itemIndex]} />
                <button className="plus-btn" type="button" onClick={
                  () => {
                    incrementItemCount(itemIndex)
                    dispatch(addItem(item.card.info))
                  }
                  }>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          ))}
        </> : <></>
      }
    </div>
  )
}


const AccordianContainer = (props) => {
  console.log(props);
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