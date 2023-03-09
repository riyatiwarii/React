import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/Coding/logo2.png"
import "./style.css"

// fetch("http://localhost:5500/Coding/response.json")
// .then(response => {
//    return response.json();
// })
// .then(data => console.log(data));

// import data from './response.json';
// console.log(data);

const Logo = () => (
    <img className = "logo" src = {logo}></img>
)

const NavItems = () => (
    <ul className="navitems" >
        <li><a href="/"><span>Home</span></a></li>
        <li><a className='offers' href=''>
        <span><svg className="nav" viewBox="0 0 32 32" height="19" width="19"><path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z"></path></svg></span>
        <span>Offers</span>
      </a></li>
        <li><a className='help' href=''>
        <span><svg className="nav" viewBox="6 -1 12 25" height="19" width="19"><path d="M21.966903,13.2244898 C22.0156989,12.8231523 22.0408163,12.4145094 22.0408163,12 C22.0408163,11.8357822 22.036874,11.6724851 22.029079,11.5101984 L17.8574333,11.5102041 C17.8707569,11.6717062 17.877551,11.8350597 17.877551,12 C17.877551,12.4199029 17.8335181,12.8295214 17.749818,13.2244898 L21.966903,13.2244898 Z M21.5255943,15.1836735 L16.9414724,15.1836735 C15.8950289,16.8045422 14.0728218,17.877551 12,17.877551 C9.92717823,17.877551 8.1049711,16.8045422 7.05852762,15.1836735 L2.47440565,15.1836735 C3.80564362,19.168549 7.56739481,22.0408163 12,22.0408163 C16.4326052,22.0408163 20.1943564,19.168549 21.5255943,15.1836735 Z M21.7400381,9.55102041 C20.6468384,5.18931674 16.7006382,1.95918367 12,1.95918367 C7.2993618,1.95918367 3.3531616,5.18931674 2.25996187,9.55102041 L6.6553883,9.55102041 C7.58404845,7.5276442 9.62792376,6.12244898 12,6.12244898 C14.3720762,6.12244898 16.4159515,7.5276442 17.3446117,9.55102041 L21.7400381,9.55102041 Z M2.03309705,13.2244898 L6.25018203,13.2244898 C6.16648186,12.8295214 6.12244898,12.4199029 6.12244898,12 C6.12244898,11.8350597 6.1292431,11.6717062 6.14256675,11.5102041 L1.97092075,11.5102041 C1.96312595,11.6724851 1.95918367,11.8357822 1.95918367,12 C1.95918367,12.4145094 1.98430112,12.8231523 2.03309705,13.2244898 Z M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,15.9183673 C14.1640545,15.9183673 15.9183673,14.1640545 15.9183673,12 C15.9183673,9.83594547 14.1640545,8.08163265 12,8.08163265 C9.83594547,8.08163265 8.08163265,9.83594547 8.08163265,12 C8.08163265,14.1640545 9.83594547,15.9183673 12,15.9183673 Z"></path></svg></span>
        <span>Help</span>
      </a></li>
        <li><a className='signin' href=''>
        <span><svg className="nav" viewBox="6 0 12 24" height="19" width="18"><path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path></svg></span>
        <span>Sign In</span>
      </a></li>
        <li><a className='Cart' href=''>
        <i className="fa-solid fa-cart-shopping"></i>
        <span>Cart</span>
      </a></li>
    </ul> 
)

const RestaurantData = [
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "15837",
          "name": "Pizza Express",
          "uuid": "f6260a46-d135-4f17-ab1d-6cddd8f4646d",
          "city": "5",
          "area": "Bandra Kurla Complex",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "4e4a84880b3d2aa3e0cd0a86adc1e45b",
          "cuisines": [
            "Pizzas",
            "Italian"
          ],
          "tags": [
            
          ],
          "costForTwo": 100000,
          "costForTwoString": "₹1000 FOR TWO",
          "deliveryTime": 42,
          "minDeliveryTime": 42,
          "maxDeliveryTime": 42,
          "slaString": "42 MINS",
          "lastMileTravel": 1.600000023841858,
          "slugs": {
            "restaurant": "pizza-express-times-square-bulding-andheri-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "Plot No. C/ 54 & 55, Unit No.001, Block C, FIFC Building, Bandra Kurla Complex, Mumbai, Maharashtra 400020, India",
          "locality": "Bandra Kurla Complex",
          "parentId": 3531,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off | Use code PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "10% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off | Use code PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "15837",
            "deliveryTime": 42,
            "minDeliveryTime": 42,
            "maxDeliveryTime": 42,
            "lastMileTravel": 1.600000023841858,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "28721",
          "name": "Oven Story Pizza",
          "uuid": "1812a30f-1d08-4307-ad3b-b67eb1f3d54e",
          "city": "5",
          "area": "Santacruz East",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
          "cuisines": [
            "Pizzas",
            "Italian"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 42,
          "minDeliveryTime": 42,
          "maxDeliveryTime": 42,
          "slaString": "42 MINS",
          "lastMileTravel": 1.7999999523162842,
          "slugs": {
            "restaurant": "ovenstory-pizza-santacruz-east-scruz-bandra-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "no 34, Ground Floor, Swastik Industrial Estate, behind Mercedes showroom , Kalina, Santacruz East, Mumbai- 400098",
          "locality": "Kalina",
          "parentId": 3534,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT125 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "28721",
            "deliveryTime": 42,
            "minDeliveryTime": 42,
            "maxDeliveryTime": 42,
            "lastMileTravel": 1.7999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "17499",
          "name": "Faasos - Wraps & Rolls",
          "uuid": "da4235ca-1bef-4e03-8074-cdb769a1d1a9",
          "city": "5",
          "area": "Santacruz East",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "afkyp5wgf6q1mqwtj2vw",
          "cuisines": [
            "Fast Food",
            "North Indian",
            "Street Food",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 35,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 35,
          "slaString": "35 MINS",
          "lastMileTravel": 1.7999999523162842,
          "slugs": {
            "restaurant": "faasos-opp-campus-kalina-scruz-bandra-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "no 34, Ground Floor, Swastik Industrial Estate, behind Mercedes showroom , Kalina, Santacruz East, Mumbai- 400098",
          "locality": "Kalina",
          "parentId": 21809,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT125 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "17499",
            "deliveryTime": 35,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 35,
            "lastMileTravel": 1.7999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "558020",
          "name": "Wraps and Rolls",
          "uuid": "82ba4143-55ed-4302-a919-c725a2079cf8",
          "city": "5",
          "area": "BKC",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "x4rrp0ibex1xzvdlvtuo",
          "cuisines": [
            "Snacks",
            "Fast Food",
            "Healthy Food"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "slaString": "39 MINS",
          "lastMileTravel": 1.399999976158142,
          "slugs": {
            "restaurant": "wraps-&-rolls-scruz-bandra-east-scruz-bandra-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "Gala No. 28, Ground Floor, Swastik Industrial Estate, Kalina, Bandra East, Mumbai, Maharashtra 400098.",
          "locality": "Scruz Bandra East",
          "parentId": 5988,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "40% off",
            "shortDescriptionList": [
              {
                "meta": "40% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "40% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "558020",
            "deliveryTime": 39,
            "minDeliveryTime": 39,
            "maxDeliveryTime": 39,
            "lastMileTravel": 1.399999976158142,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.5",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "62894",
          "name": "LunchBox - Meals and Thalis",
          "uuid": "25e33df1-fb06-433a-8013-837cea6349bc",
          "city": "5",
          "area": "Santacruz East",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "pjobovhpe4jwxdxoe1ns",
          "cuisines": [
            "North Indian",
            "Punjabi",
            "Biryani",
            "Healthy Food",
            "Jain",
            "Thalis",
            "Indian",
            "Mughlai",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 41,
          "minDeliveryTime": 41,
          "maxDeliveryTime": 41,
          "slaString": "41 MINS",
          "lastMileTravel": 1.7999999523162842,
          "slugs": {
            "restaurant": "lunchbox-opp-campus-kalina-scruz-bandra-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "no 34, Ground Floor, Swastik Industrial Estate, behind Mercedes showroom , Kalina, Santacruz East, Mumbai- 400098",
          "locality": "Kalina",
          "parentId": 4925,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT125 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "62894",
            "deliveryTime": 41,
            "minDeliveryTime": 41,
            "maxDeliveryTime": 41,
            "lastMileTravel": 1.7999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "376244",
          "name": "Good Flippin' Burgers",
          "uuid": "9bf39417-12ed-4e44-8c05-1a81d268c24c",
          "city": "5",
          "area": "Bandra Kurla Complex",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "c3ba5f77ce2ce09b1aa34d7af539bd64",
          "cuisines": [
            "Burgers",
            "American",
            "Fast Food",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 60000,
          "costForTwoString": "₹600 FOR TWO",
          "deliveryTime": 42,
          "minDeliveryTime": 42,
          "maxDeliveryTime": 42,
          "slaString": "42 MINS",
          "lastMileTravel": 1.7999999523162842,
          "slugs": {
            "restaurant": "good-flippin'-burgers-scruz-bandra-east-scruz-bandra-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "Gala - 22, Smartco Kitchens, 24, CST Road, Kolivery Village, MMRDA Area, Kalina, Santacruz E, Mumbai",
          "locality": "Scruz Bandra East",
          "parentId": 11748,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FREE DELIVERY",
            "shortDescriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "",
            "shortDescriptionList": [
              {
                "meta": "Free Delivery",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "376244",
            "deliveryTime": 42,
            "minDeliveryTime": 42,
            "maxDeliveryTime": 42,
            "lastMileTravel": 1.7999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.6",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "301549",
          "name": "The Momo Co.",
          "uuid": "9230ddb7-543f-4c61-8ef9-1d5adbd85433",
          "city": "5",
          "area": "Santacruz East",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "imcvofqybbodbxlwgpf0",
          "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "slaString": "36 MINS",
          "lastMileTravel": 1.600000023841858,
          "slugs": {
            "restaurant": "the-momo-co.-kurla-kurla-2",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "Gala No. 35, Ground Floor, Swastik Industrial Estate, 178, CST Road, Kalina, Santacruz East, Mumbai 400098",
          "locality": "CST Road",
          "parentId": 11442,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "Flat 175 off",
            "shortDescriptionList": [
              {
                "meta": "Flat 175 off | Use FLAT175",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat 175 off | Use code FLAT175",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹175 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLAT175",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat 175 off | Use code FLAT175",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "301549",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "lastMileTravel": 1.600000023841858,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "156134",
          "name": "The Good Bowl",
          "uuid": "5f7766a4-1022-4130-b315-627a4d2aedd9",
          "city": "5",
          "area": "Santacruz East",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "erlwuv2gcflw3lfueewd",
          "cuisines": [
            "North Indian",
            "Punjabi",
            "Biryani",
            "Chinese",
            "Beverages",
            "Desserts",
            "Jain",
            "Indian",
            "Hyderabadi",
            "Mughlai"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "slaString": "36 MINS",
          "lastMileTravel": 1.600000023841858,
          "slugs": {
            "restaurant": "the-good-bowl-bkc-fc-scruz-bandra-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "no 34, Ground Floor, Swastik Industrial Estate, 178 Vidya Nagri Marg, Kalina, Mumbai 400098",
          "locality": "BKC FC",
          "parentId": 7918,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FLAT125 off",
            "shortDescriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FLAT125 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "156134",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "lastMileTravel": 1.600000023841858,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.1",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "640817",
          "name": "BONOMI Coffee",
          "uuid": "b5b248a9-fd2d-4855-86e6-24ff1ab9b362",
          "city": "5",
          "area": "Scruz Bandra East",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "073eb11a3bb8124e5cfe0991d92c1321",
          "cuisines": [
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "slaString": "33 MINS",
          "lastMileTravel": 1.399999976158142,
          "slugs": {
            "restaurant": "bonomi-scruz-bandra-east-scruz-bandra-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "Gala No. 28, Ground Floor, Swastik Industrial Estate, Kalina, Bandra East, Mumbai, Maharashtra 400098",
          "locality": "kalina",
          "parentId": 242555,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "25% off",
            "shortDescriptionList": [
              {
                "meta": "25% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "25% off up to ₹65 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "25% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "25% off up to ₹65 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "640817",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "lastMileTravel": 1.399999976158142,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.8",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "24463",
          "name": "Domino's Pizza",
          "uuid": "dbe36400-4d4c-4649-a870-12eb97bfcfff",
          "city": "5",
          "area": "Kurla West",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "sxkkygjqz7e8mad1qnvw",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "slaString": "25 MINS",
          "lastMileTravel": 0,
          "slugs": {
            "restaurant": "dominos-pizza-near-sanagam-theatre-andheri-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "Shop No-2 Ground Floor Kanakkia Zillion Lbs Road Kurla West Mumbai 400070 Maharashtra",
          "locality": "Near Sanagam Theatre",
          "parentId": 2456,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "40% off",
            "shortDescriptionList": [
              {
                "meta": "40% off | Use SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "40% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "hasSurge": false,
          "sla": {
            "restaurantId": "24463",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "lastMileTravel": 0,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.6",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "337459",
          "name": "Goodness To Go",
          "uuid": "8c0dd958-faa6-4c39-948b-33acd908d9c6",
          "city": "5",
          "area": "Kurla",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "xnqmiqatrp5ki0k206o3",
          "cuisines": [
            "Salads",
            "European",
            "Italian",
            "Juices",
            "Bakery",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "slaString": "39 MINS",
          "lastMileTravel": 1.5,
          "slugs": {
            "restaurant": "goodness-to-go-by-smoke-house-deli-bandra-kurla-complex-scruz-bandra-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "Smoke House Deli, 3A, Ground Floor, First International Financial Centre, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051",
          "locality": "Bandra Kurla Complex",
          "parentId": 12021,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "Flat ₹125 off",
            "shortDescriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹399",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹399 | Use code SWIGGYHOLI",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹125 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use SWIGGYHOLI",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹125 off on orders above ₹399 | Use code SWIGGYHOLI",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "337459",
            "deliveryTime": 39,
            "minDeliveryTime": 39,
            "maxDeliveryTime": 39,
            "lastMileTravel": 1.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "575041",
          "name": "Veg Daawat by Behrouz",
          "uuid": "b7e2d7e4-36f3-4357-8f31-0492428023c6",
          "city": "5",
          "area": "Santacruz East",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "ylsoafadmkp6txpm8qyr",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "North Indian",
            "Persian",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 38,
          "minDeliveryTime": 38,
          "maxDeliveryTime": 38,
          "slaString": "38 MINS",
          "lastMileTravel": 1.7999999523162842,
          "slugs": {
            "restaurant": "veg-daawat-by-behrouz-kalina-scruz-bandra-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "no 34, Ground Floor, Swastik Industrial Estate, behind Mercedes showroom , Kalina, Santacruz East, Mumbai- 400098",
          "locality": "Kalina",
          "parentId": 344904,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "40% off",
            "shortDescriptionList": [
              {
                "meta": "40% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "40% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "575041",
            "deliveryTime": 38,
            "minDeliveryTime": 38,
            "maxDeliveryTime": 38,
            "lastMileTravel": 1.7999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "--",
          "totalRatings": 0,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "536304",
          "name": "Sushi Junction",
          "uuid": "6e45d53a-5e6d-47e9-bfb4-60b2b807cc4c",
          "city": "5",
          "area": "Bandra Kurla Complex",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "jcucazx1eqclkqp47lra",
          "cuisines": [
            "Japanese"
          ],
          "tags": [
            
          ],
          "costForTwo": 60000,
          "costForTwoString": "₹600 FOR TWO",
          "deliveryTime": 42,
          "minDeliveryTime": 42,
          "maxDeliveryTime": 42,
          "slaString": "42 MINS",
          "lastMileTravel": 1.7999999523162842,
          "slugs": {
            "restaurant": "sushi-junction-scruz-bandra-east-scruz-bandra-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "UNIT NO G4A, TRADE CENTER BKC, BANDRA KURLA COMPLEX, BANDRA (E), MUMBAI, Greater Mumbai Ward-H/E, Greater Mumbai, Maharashtra-400051",
          "locality": "Bandra Kurla Complex",
          "parentId": 2260,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "Flat ₹100 off",
            "shortDescriptionList": [
              {
                "meta": "Flat ₹100 off on orders above ₹499",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹100 off on orders above ₹499 | Use code SWIGGYHOLI",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "₹100 OFF",
            "shortDescriptionList": [
              {
                "meta": "Use SWIGGYHOLI",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "Flat ₹100 off on orders above ₹499 | Use code SWIGGYHOLI",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "536304",
            "deliveryTime": 42,
            "minDeliveryTime": 42,
            "maxDeliveryTime": 42,
            "lastMileTravel": 1.7999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    },
    {
      "cardType": "restaurant",
      "layoutAlignmentType": "VERTICAL",
      "data": {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "16640",
          "name": "Behrouz Biryani",
          "uuid": "3d3e248f-34cd-43cc-a819-835138062b6b",
          "city": "5",
          "area": "Santacruz East",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "s2ixbsealk9xhotlb9sr",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "North Indian",
            "Persian",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "slaString": "36 MINS",
          "lastMileTravel": 1.7999999523162842,
          "slugs": {
            "restaurant": "behrouz-biryani-opp-campus-kalina-scruz-bandra-east",
            "city": "mumbai"
          },
          "cityState": "5",
          "address": "no 34, Ground Floor, Swastik Industrial Estate, behind Mercedes showroom , Kalina, Santacruz East, Mumbai- 400098",
          "locality": "Kalina",
          "parentId": 1803,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "FREE DELIVERY",
            "shortDescriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "",
            "shortDescriptionList": [
              {
                "meta": "Free Delivery",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "FREE DELIVERY",
                "discountType": "FREE_DELIVERY",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "16640",
            "deliveryTime": 36,
            "minDeliveryTime": 36,
            "maxDeliveryTime": 36,
            "lastMileTravel": 1.7999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      "parentWidget": false
    }
]

const RestaurantCard = ({...restaurant}) => {
    const {name, cloudinaryImageId, cuisines, avgRating, slaString, costForTwoString} = restaurant.data.data
    return (<div className='hotel'> 
        <a href=''>
            <img className="_2tuBw _12_oN" alt="Cuisine image" width="254" height="160" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId}/>
            <div className='hotelTitle'>
            <div className='hotelName'>{name}</div>
            <div className='hotelDescription'>{cuisines.join(", ")}</div>
            </div>
            <div className='hotelDetails'>
            <span className='hotelRatings'><i className="fa-regular fa-star"></i>{avgRating}</span>
            <span>•</span>
            <span className='hotelTime'>{slaString.toLowerCase()}</span>
            <span>•</span>
            <span className='hotelCost'>{costForTwoString}</span>
            </div>
        </a>
    </div>);
}

const RestaurantCardsContainer = () => (
    <div id="cards">
        {
            RestaurantData.map((restrauant, index) => {
                return <RestaurantCard {...restrauant} key={index} />
            })
        }
    </div>
)

const HeaderSection = () => (
    <header>
        <div className="navbar">
        <Logo/>
        <NavItems/>
        </div>
    </header>
)

const Body = () => (
    <>
    <HeaderSection></HeaderSection>
    <RestaurantCardsContainer/>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Body/>)

