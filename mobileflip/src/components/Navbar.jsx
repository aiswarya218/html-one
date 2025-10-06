import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function NavItem() {
  return (
    <ul>
        <li><a href="#">Electronics<FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '5px' }} /></a></li>
        <li><a href="#">TVs & Appliances</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Baby & Kids</a></li>
        <li><a href="#">Home & Furniture</a></li>
        <li><a href="#">Sports, Books & More</a></li>
        <li><a href="#">Flights</a></li>
        <li><a href="#">Offer Zone</a></li> 
    </ul>
  );
}

export default NavItem; 


// import React from "react";
// function Nav() {
//   const ArrowSVG = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//   <path fill="#000000" d="M7 10l5 5 5-5z"/>
// </svg>
// );
//   return (
//     <nav className="secondary-nav">
//       <ul>
//         <li>
//             <a href="#">Electronics
//                 <ArrowSVG />
//             </a>
//         </li> 
//         <li>
//             <a href="#">TVs & Appliances
//                 <ArrowSVG />
//             </a>
//         </li>s
//         <li>
//             <a href="#">Men
//                 <ArrowSVG />
//             </a>
//         </li>
//         <li>
//             <a href="#">Women
//                 <ArrowSVG />
//             </a>
//         </li>
//         <li>
//             <a href="#">Baby & Kids
//                 <ArrowSVG />
//             </a>
//         </li>  
//         <li>
//             <a href="#">Home & Furniture
//                 <ArrowSVG />
//             </a>
//         </li>
//         <li><a href="#">Sports, Books & More
//                <ArrowSVG />
//             </a>
//         </li>
//         <li><a href="#">Flights</a></li>
//         <li><a href="#">Offer Zone</a></li>
//       </ul>
//     </nav>
//   );
// }
// export default Nav;