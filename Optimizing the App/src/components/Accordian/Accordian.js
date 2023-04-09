import React from "react";
const BabyAccordian = ({ data }) => {
  const { title, items } = data;
  console.log(items);
  return (
    <>
      <details>
        <summary>
          {title}({items?.length})
        </summary>
        <ul>
          {items?.map((items) => (
            <li key={items.card.info.id}> {items.card.info.name} : {Math.round((items.card.info.price)/100)} </li>
          ))}
        </ul>
      </details>
    </>
  );
};

const AccordianParent = ({ props }) => {
  return (
    <>
      <BabyAccordian data={props} />
    </>
  );
};
export default AccordianParent;