// import React, { useState } from "react";
// import "./Filters.css";
// import { jsx } from "react/jsx-runtime";
// import { RiKickLine } from "react-icons/ri";

// function Filters1() {

//   const [priceRange, setPriceRange] = useState(30000);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [selectedRating, setSelectedRating] = useState(null);
//   const [selectedNetworkTypes, setSelectedNetworkTypes] = useState([]);
//   const [selectedRAM, setSelectedRAM] = useState([]);
//   const [selectedStorage, setSelectedStorage] = useState([]);
//   const [selectedBattery, setSelectedBattery] = useState([]);

//   const handlePriceChange = (event) => {
//     setPriceRange(parseInt(event.target.value, 10));
//   };

//   const handleCheckboxChange = (value, setState, currentState) => {
//     if (currentState.includes(value)) {
//       setState(currentState.filter(item => item !== value));
//     } else {
//       setState([...currentState, value]);
//     }
//   };

//   const handleRadioChange = (setState, value) => {
//     setState(prevValue => prevValue === value ? null : value); 
//   };

//   const renderCheckboxes = (title, items, currentState, setState) => (
//     <div className="filter-section" key={title}>
//       <div className="filter-category">{title}</div>
//       {items.map(item => (
//         <label key={item} className="filter-item-label">
//           <input type="checkbox" checked={currentState.includes(item)} onChange={() => handleCheckboxChange(item, setState, currentState)}/> 
//           {item}
//         </label>
//       ))}
//     </div>
//   );

//   return (
//     <aside className="filters-sidebar">
//       <div className="filter-heading">Filters</div>

//       <div className="filter-section static-section">
//         <div className="filter-category">Categories</div>
//         <div className="filter-item static-item">Mobiles</div>
//       </div>

//       <div className="filter-section price-filter-section">
//         <div className="filter-category price-category-heading">PRICE</div>
//         <div className="price-range-container">
//             <input type="range" min="0" max="50000" step="1000" value={priceRange} onChange={handlePriceChange} className="custom-range-slider"
//               style={{ 
//                   background: `linear-gradient(to right, #2874f0 0%, #2874f0 ${priceRange / 50000 * 100}%, #ccc ${priceRange / 50000 * 100}%, #ccc 100%)`
//               }} />
//         </div>
        
//         <div className="price-display-row">
//             <select className="price-dropdown">
//                 <option>Min</option>
//             </select>
//             <span>to</span>
//             <select className="price-dropdown selected-max">
//                 <option>{priceRange >= 30000 ? '₹30000+' : `₹${priceRange.toLocaleString('en-IN')}`}</option>
//             </select>
//         </div>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">BRAND</div>
//         <div className="search-box">
//             <input type="text" placeholder="Search Brand" className="search-input" />
//         </div>
//         {['Apple', 'Google', 'MOTOROLA', 'Samsung'].map(brand => (
//           <label key={brand} className="filter-item-label brand-label">
//             <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => handleCheckboxChange(brand, setSelectedBrands, selectedBrands)} /> 
//             {brand}
//           </label>
//         ))}
//       </div> 

//       <div className="filter-section">
//         <div className="filter-category">CUSTOMER RATINGS</div>
//         {['4★ & above', '3★ & above', '2★ & above', '1★ & above'].map(rating => (
//             <label key={rating} className="filter-item-label rating-label">
//                 <input type="radio" name="rating-filter" checked={selectedRating === rating} onChange={() => handleRadioChange(setSelectedRating, rating)} /> 
//                 {rating}
//             </label>
//         ))}
//       </div>

//       {renderCheckboxes(
//         "NETWORK TYPES", 
//         ['4G', '3G', '2G', '5G'], 
//         selectedNetworkTypes, 
//         setSelectedNetworkTypes
//       )}

//       {renderCheckboxes(
//         "RAM", 
//         ['4 GB', '3 GB', '2 GB', '1 GB and Below'], 
//         selectedRAM, 
//         setSelectedRAM
//       )}

//       <div className="filter-section">
//         <div className="filter-category">GST INVOICE AVAILABLE</div>
//         <label className="filter-item-label">
//             <input type="checkbox" /> GST Invoice Available</label>
//       </div>

//       {renderCheckboxes(
//         "INTERNAL STORAGE", 
//         ['256 GB & Above', '128 - 255.9 GB', '64 - 127.9 GB', '32 - 63.9 GB'], 
//         selectedStorage, 
//         setSelectedStorage
//       )}
      
//       {renderCheckboxes(
//         "BATTERY CAPACITY", 
//         ['1000 - 1999 mAh', '2000 - 2999 mAh', '3000 - 3999 mAh'], 
//         selectedBattery, 
//         setSelectedBattery
//       )}

//       <div className="filter-section">
//         <div className="filter-category">SCREEN SIZE</div>
//         <label className="filter-item-label"><input type="checkbox" /> 5.7 - 5.9 inch</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> 5.5 - 5.6 inch</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> 4 - 4.4 inch</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">PRIMARY CAMERA</div>
//         <label className="filter-item-label"><input type="checkbox" /> Below 5 MP</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> 5 - 7.9 MP</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> 12 - 12.9 MP</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">SECONDARY CAMERA</div>
//         <label className="filter-item-label"><input type="checkbox" /> 12 - 15.9 MP</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> 16 - 20.9 MP</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> 21 MP & Above</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">PROCESSOR BRAND</div>
//         <label className="filter-item-label"><input type="checkbox" /> AMD</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> ARM</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Broadcom</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">SPECIALITY</div>
//         <label className="filter-item-label"><input type="checkbox" /> Big Storage</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Higher Performance</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Long-Lasting Battery</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Selfie Camera</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">RESOLUTION TYPE</div>
//         <label className="filter-item-label"><input type="checkbox" /> Full HD</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Full HD+</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> FWVGA</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">OPERATING SYSTEM</div>
//         <label className="filter-item-label"><input type="checkbox" /> Android</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Blackberry</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> iOS</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">SIM TYPE</div>
//         <label className="filter-item-label"><input type="checkbox" /> Dual Sim</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Four Sim</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Single Sim</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">OFFERS</div>
//         <label className="filter-item-label"><input type="checkbox" /> Special Price</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Buy More, Save More</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> No Cost EMI</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">FEATURES</div>
//         <label className="filter-item-label"><input type="checkbox" /> WiFi</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> NFC</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> GPRS</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">TYPE</div>
//         <label className="filter-item-label"><input type="checkbox" /> Smartphones</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Feature Phones</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">AVAILABILITY</div>
//           <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="ukzDZP">
//           <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="SV+H35"></path></svg> {/* Changed fill to #000 for visibility */}
//         <label className="filter-item-label"><input type="checkbox" /> Exclude Out of Stock</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">OPERATING SYSTEM VERSION NAME</div>
//         <label className="filter-item-label"><input type="checkbox" /> Android</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Anna</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Gingerbread</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">DISCOUNT</div>
//         <label className="filter-item-label"><input type="checkbox" /> 50% or more</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> 40% or more</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> 30% or more</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> 20% or more</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> 10% or more</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">CLOCK SPEED</div>
//         <label className="filter-item-label"><input type="checkbox" /> 1.5 - 1.9 GHz</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> 2 - 2.5 GHz</label><br />
//         <label className="filter-item-label"><input type="checkbox" /> Less than 900 MHz</label>
//       </div>
//     </aside>
//   );
// }

// export default Filters1;



// // // ... (rest of the component JSX before NETWORK TYPES)

// //       {/* --- NETWORK TYPES (Manual Single Labels) --- */}
// //       <div className="filter-section">
// //         <div className="filter-category">NETWORK TYPES</div>
        
// //         <label className="filter-item-label">
// //             <input 
// //                 type="checkbox" 
// //                 checked={selectedNetworkTypes.includes('4G')} 
// //                 onChange={() => handleCheckboxChange('4G', setSelectedNetworkTypes, selectedNetworkTypes)} 
// //             /> 
// //             4G
// //         </label>
        
// //         <label className="filter-item-label">
// //             <input 
// //                 type="checkbox" 
// //                 checked={selectedNetworkTypes.includes('3G')} 
// //                 onChange={() => handleCheckboxChange('3G', setSelectedNetworkTypes, selectedNetworkTypes)} 
// //             /> 
// //             3G
// //         </label>
        
// //         <label className="filter-item-label">
// //             <input 
// //                 type="checkbox" 
// //                 checked={selectedNetworkTypes.includes('2G')} 
// //                 onChange={() => handleCheckboxChange('2G', setSelectedNetworkTypes, selectedNetworkTypes)} 
// //             /> 
// //             2G
// //         </label>
        
// //         <label className="filter-item-label">
// //             <input 
// //                 type="checkbox" 
// //                 checked={selectedNetworkTypes.includes('5G')} 
// //                 onChange={() => handleCheckboxChange('5G', setSelectedNetworkTypes, selectedNetworkTypes)} 
// //             /> 
// //             5G
// //         </label>
// //       </div>   

// // ... (rest of the component JSX after NETWORK TYPES)
// // While this approach works perfectly, remember that if you have many filter options that use the same structure, the reusable renderCheckboxes function or the concise .map() loop is generally preferred in React for cleaner, less repetitive code. 
// // For your other filters like RAM or Internal Storage, continuing to use the loop pattern is recommended unless you need unique customization for a specific item.


import React, { useState } from "react";
import "./Filters.css";

function Filters1() {
  const [priceRange, setPriceRange] = useState(30000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null); 
  const [selectedNetworkTypes, setSelectedNetworkTypes] = useState([]);
  const [selectedRAM, setSelectedRAM] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [selectedBattery, setSelectedBattery] = useState([]);
 
  const [selectedGST, setSelectedGST] = useState([]);
  const [selectedScreenSize, setSelectedScreenSize] = useState([]);
  const [selectedPrimaryCamera, setSelectedPrimaryCamera] = useState([]);
  const [selectedSecondaryCamera, setSelectedSecondaryCamera] = useState([]);
  const [selectedProcessorBrand, setSelectedProcessorBrand] = useState([]);
  const [selectedSpeciality, setSelectedSpeciality] = useState([]);
  const [selectedResolutionType, setSelectedResolutionType] = useState([]);
  const [selectedOperatingSystem, setSelectedOperatingSystem] = useState([]);
  const [selectedSIMType, setSelectedSIMType] = useState([]);
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedOSVersion, setSelectedOSVersion] = useState([]);
  const [selectedDiscount, setSelectedDiscount] = useState([]);
  const [selectedClockSpeed, setSelectedClockSpeed] = useState([]);

  const handlePriceChange = (event) => {
    setPriceRange(parseInt(event.target.value, 10));
  };

  const handleCheckboxChange = (value, setState, currentState) => {
    if (currentState.includes(value)) {
      setState(currentState.filter(item => item !== value));
    } else {
      setState([...currentState, value]);
    }
  };

  const handleRadioChange = (setState, value) => {
    setState(prevValue => prevValue === value ? null : value); 
  };


  const renderCheckboxes = (title, items, currentState, setState) => (
    <div className="filter-section" key={title}>
      <div className="filter-category">{title}</div>
      {items.map(item => (
        <label key={item} className="filter-item-label">
          <input 
            type="checkbox" 
            checked={currentState.includes(item)} 
            onChange={() => handleCheckboxChange(item, setState, currentState)}
          /> 
          {item}
        </label>
      ))}
    </div>
  );

  return (
    <aside className="filters-sidebar">
      <div className="filter-heading">Filters</div>

      <div className="filter-section static-section">
        <div className="filter-category">Categories</div>
        <div className="filter-item static-item">Mobiles</div>
      </div>

      <div className="filter-section price-filter-section">
        <div className="filter-category price-category-heading">PRICE</div>
        <div className="price-range-container">
            <input type="range" min="0" max="50000" step="1000" value={priceRange} onChange={handlePriceChange} className="custom-range-slider"
              style={{ 
                  background: `linear-gradient(to right, #2874f0 0%, #2874f0 ${priceRange / 50000 * 100}%, #ccc ${priceRange / 50000 * 100}%, #ccc 100%)`
              }} />
        </div>
        
        <div className="price-display-row">
            <select className="price-dropdown">
                <option>Min</option>
            </select>
            <span>to</span>
            <select className="price-dropdown selected-max">
                <option>{priceRange >= 50000 ? '₹50000+' : `₹${priceRange.toLocaleString('en-IN')}`}</option>
            </select>
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-category">BRAND</div>
        <div className="search-box">
            <input type="text" placeholder="Search Brand" className="search-input" />
        </div>
        {['Apple', 'Google', 'MOTOROLA', 'Samsung'].map(brand => (
          <label key={brand} className="filter-item-label brand-label">
            <input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => handleCheckboxChange(brand, setSelectedBrands, selectedBrands)} /> 
            {brand}
          </label>
        ))}
      </div> 

      <div className="filter-section">
        <div className="filter-category">CUSTOMER RATINGS</div>
        {['4★ & above', '3★ & above', '2★ & above', '1★ & above'].map(rating => (
            <label key={rating} className="filter-item-label rating-label">
                <input type="radio" name="rating-filter" checked={selectedRating === rating} onChange={() => handleRadioChange(setSelectedRating, rating)} /> 
                {rating}
            </label>
        ))}
      </div>

      {renderCheckboxes(
        "NETWORK TYPES", 
        ['4G', '3G', '2G', '5G'], 
        selectedNetworkTypes, 
        setSelectedNetworkTypes
      )}

      {renderCheckboxes(
        "RAM", 
        ['4 GB', '3 GB', '2 GB', '1 GB and Below'], 
        selectedRAM, 
        setSelectedRAM
      )}

      {renderCheckboxes(
        "GST INVOICE AVAILABLE", 
        ['GST Invoice Available'], 
        selectedGST, 
        setSelectedGST
      )}

      {renderCheckboxes(
        "INTERNAL STORAGE", 
        ['256 GB & Above', '128 - 255.9 GB', '64 - 127.9 GB', '32 - 63.9 GB'], 
        selectedStorage, 
        setSelectedStorage
      )}
      
      {renderCheckboxes(
        "BATTERY CAPACITY", 
        ['1000 - 1999 mAh', '2000 - 2999 mAh', '3000 - 3999 mAh'], 
        selectedBattery, 
        setSelectedBattery
      )}

      {renderCheckboxes(
        "SCREEN SIZE", 
        ['5.7 - 5.9 inch', '5.5 - 5.6 inch', '4 - 4.4 inch'], 
        selectedScreenSize, 
        setSelectedScreenSize
      )}

      {renderCheckboxes(
        "PRIMARY CAMERA", 
        ['Below 5 MP', '5 - 7.9 MP', '12 - 12.9 MP'], 
        selectedPrimaryCamera, 
        setSelectedPrimaryCamera
      )}

      {renderCheckboxes(
        "SECONDARY CAMERA", 
        ['12 - 15.9 MP', '16 - 20.9 MP', '21 MP & Above'], 
        selectedSecondaryCamera, 
        setSelectedSecondaryCamera
      )}

      {renderCheckboxes(
        "PROCESSOR BRAND", 
        ['AMD', 'ARM', 'Broadcom'], 
        selectedProcessorBrand, 
        setSelectedProcessorBrand
      )}

      {renderCheckboxes(
        "SPECIALITY", 
        ['Big Storage', 'Higher Performance', 'Long-Lasting Battery', 'Selfie Camera'], 
        selectedSpeciality, 
        setSelectedSpeciality
      )}

      {renderCheckboxes(
        "RESOLUTION TYPE", 
        ['Full HD', 'Full HD+', 'FWVGA'], 
        selectedResolutionType, 
        setSelectedResolutionType
      )}

      {renderCheckboxes(
        "OPERATING SYSTEM", 
        ['Android', 'Blackberry', 'iOS'], 
        selectedOperatingSystem, 
        setSelectedOperatingSystem
      )}

      {renderCheckboxes(
        "SIM TYPE", 
        ['Dual Sim', 'Four Sim', 'Single Sim'], 
        selectedSIMType, 
        setSelectedSIMType
      )}

      {renderCheckboxes(
        "OFFERS", 
        ['Special Price', 'Buy More, Save More', 'No Cost EMI'], 
        selectedOffers, 
        setSelectedOffers
      )}

      {renderCheckboxes(
        "FEATURES", 
        ['WiFi', 'NFC', 'GPRS'], 
        selectedFeatures, 
        setSelectedFeatures
      )}

      {renderCheckboxes(
        "TYPE", 
        ['Smartphones', 'Feature Phones'], 
        selectedType, 
        setSelectedType
      )}

      <div className="filter-section">
        <div className="filter-category">AVAILABILITY</div>
        <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="ukzDZP">
          <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" className="SV+H35"></path>
        </svg>
        {renderCheckboxes(
            ['Exclude Out of Stock'], 
            selectedAvailability, 
            setSelectedAvailability
        )}
      </div>

      {renderCheckboxes(
        "OPERATING SYSTEM VERSION NAME", 
        ['Android', 'Anna', 'Gingerbread'], 
        selectedOSVersion, 
        setSelectedOSVersion
      )}

      {renderCheckboxes(
        "DISCOUNT", 
        ['50% or more', '40% or more', '30% or more', '20% or more', '10% or more'], 
        selectedDiscount, 
        setSelectedDiscount
      )}

      {renderCheckboxes(
        "CLOCK SPEED", 
        ['1.5 - 1.9 GHz', '2 - 2.5 GHz', 'Less than 900 MHz'], 
        selectedClockSpeed, 
        setSelectedClockSpeed
      )}
    </aside>
  );
}

export default Filters1;