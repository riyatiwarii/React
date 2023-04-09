import React from "react";

const AccordianItem = ({index, clicked, onToggle}) => {
    return (
        <div className="accordian-item">
            <div className="accordian-title">
                <h3>Title</h3>
                {
                    clicked === index ? <i className="fa-solid fa-circle-chevron-down" onClick={onToggle}></i> : <i class="fa-solid fa-circle-chevron-up" onClick={onToggle}></i>
                }
            </div>
        {
            clicked === index ? <p className="accordian-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> : <></>
        }
        </div>
    )
}

export default AccordianItem