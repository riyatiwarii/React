import React, {useState} from "react";

// const BabyAccordian = ({ data }) => {
//   const { title, items } = data;
//   console.log(items);
//   return (
//     <>
//       <details>
//         <summary>
//           {title}({items?.length})
//         </summary>
//         <ul>
//           {items?.map((items) => (
//             <li key={items.card.info.id}> {items.card.info.name} : {Math.round((items.card.info.price)/100)} </li>
//           ))}
//         </ul>
//       </details>
//     </>
//   );
// };

// const AccordianParent = ({ props }) => {
//   console.log(props);
//   return (
//     <>
//       <BabyAccordian data={props} />
//     </>
//   );
// };

const AccordianItem = ({data, index, clicked, onToggle}) => {
  const { title, items } = data.props;
  return (
      <div className="accordian-item">
          <div className="accordian-title">
              <h3>{title}({items?.length})</h3>
              {
                  clicked === index ? <i className="fa-solid fa-circle-chevron-down" onClick={onToggle}></i> : <i class="fa-solid fa-circle-chevron-up" onClick={onToggle}></i>
              }
          </div>
      {
          clicked === index ? <>
          {items?.map((items) => (
            <p key={items.card.info.id}> {items.card.info.name} : {Math.round((items.card.info.price)/100)} </p>
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