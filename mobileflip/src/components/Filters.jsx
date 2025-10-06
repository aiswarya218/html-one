// import React from "react";

// function Filters() {
//   return (
//     <aside className="filters-sidebar">
//       <div className="filter-heading">Filters</div>

//       <div className="filter-section">
//         <div className="filter-category">Categories</div>
//         <div className="filter-item">Mobiles</div>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">Price</div>
//         <input type="range" min="Min" max="30000" />
//         <div>Min - ₹30,000+</div>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">BRAND</div>
//         <label><input type="checkbox" /> Samsung</label><br />
//         <label><input type="checkbox" /> Apple</label><br />
//         <label><input type="checkbox" /> MOTOROLA</label><br />
//         <label><input type="checkbox" /> Google</label>
//       </div>

    //   <div className="filter-section">
    //     <div className="filter-category">CUSTOMER RATINGS</div>
    //     <label><input type="checkbox" /> 4★ & above</label><br />
    //     <label><input type="checkbox" /> 3★ & above</label><br />
    //     <label><input type="checkbox" /> 2★ & above</label><br />
    //     <label><input type="checkbox" /> 1★ & above</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">NETWORK TYPES</div>
    //     <label><input type="checkbox" /> 4G</label><br />
    //     <label><input type="checkbox" /> 3G</label><br />
    //     <label><input type="checkbox" /> 2G</label><br />
    //     <label><input type="checkbox" /> 5G</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">RAM</div>
    //     <label><input type="checkbox" /> 4 GB</label><br />
    //     <label><input type="checkbox" /> 3 GB</label><br />
    //     <label><input type="checkbox" /> 2 GB</label><br />
    //     <label><input type="checkbox" /> 1 GB and Below</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">GST INVOICE AVAILABLE</div>
    //     <label><input type="checkbox" /> GST Invoice Available</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">INTERNAL STORAGE</div>
    //     <label><input type="checkbox" /> 256 GB & Above</label><br />
    //     <label><input type="checkbox" /> 128 - 255.9 GB</label><br />
    //     <label><input type="checkbox" /> 64 - 127.9 GB</label><br />
    //     <label><input type="checkbox" /> 32 - 63.9 GB</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">BATTERY CAPACITY</div>
    //     <label><input type="checkbox" /> 1000 - 1999 mAh</label><br />
    //     <label><input type="checkbox" /> 2000 - 2999 mAh</label><br />
    //     <label><input type="checkbox" /> 3000 - 3999 mAh</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">SCREEN SIZE</div>
    //     <label><input type="checkbox" /> 5.7 - 5.9 inch</label><br />
    //     <label><input type="checkbox" /> 5.5 - 5.6 inch</label><br />
    //     <label><input type="checkbox" /> 4 - 4.4 inch</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">PRIMARY CAMERA</div>
    //     <label><input type="checkbox" /> Below 5 MP</label><br />
    //     <label><input type="checkbox" /> 5 - 7.9 MP</label><br />
    //     <label><input type="checkbox" /> 12 - 12.9 MP</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">SECONDARY CAMERA</div>
    //     <label><input type="checkbox" /> 12 - 15.9 MP</label><br />
    //     <label><input type="checkbox" /> 16 - 20.9 MP</label><br />
    //     <label><input type="checkbox" /> 21 MP & Above</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">PROCESSOR BRAND</div>
    //     <label><input type="checkbox" /> AMD</label><br />
    //     <label><input type="checkbox" /> ARM</label><br />
    //     <label><input type="checkbox" /> Broadcom</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">SPECIALITY</div>
    //     <label><input type="checkbox" /> Big Storage</label><br />
    //     <label><input type="checkbox" /> Higher Performance</label><br />
    //     <label><input type="checkbox" /> Long-Lasting Battery</label><br />
    //     <label><input type="checkbox" /> Selfie Camera</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">RESOLUTION TYPE</div>
    //     <label><input type="checkbox" /> Full HD</label><br />
    //     <label><input type="checkbox" /> Full HD+</label><br />
    //     <label><input type="checkbox" /> FWVGA</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">OPERATING SYSTEM</div>
    //     <label><input type="checkbox" /> Android</label><br />
    //     <label><input type="checkbox" /> Blackberry</label><br />
    //     <label><input type="checkbox" /> iOS</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">SIM TYPE</div>
    //     <label><input type="checkbox" /> Dual Sim</label><br />
    //     <label><input type="checkbox" /> Four Sim</label><br />
    //     <label><input type="checkbox" /> Single Sim</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">OFFERS</div>
    //     <label><input type="checkbox" /> Special Price</label><br />
    //     <label><input type="checkbox" /> Buy More, Save More</label><br />
    //     <label><input type="checkbox" /> No Cost EMI</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">FEATURES</div>
    //     <label><input type="checkbox" /> WiFi</label><br />
    //     <label><input type="checkbox" /> NFC</label><br />
    //     <label><input type="checkbox" /> GPRS</label>
    //   </div>


    //   <div className="filter-section">
    //     <div className="filter-category">TYPE</div>
    //     <label><input type="checkbox" /> Smartphones</label><br />
    //     <label><input type="checkbox" /> Feature Phones</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">AVAILABILITY</div>
    //       <svg width="16" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="ukzDZP">
    //       <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class="SV+H35"></path></svg>
    //     <label><input type="checkbox" /> Exclude Out of Stock</label>
    //   </div>

    //   <div className="filter-section">
    //     <div className="filter-category">OPERATING SYSTEM VERSION NAME</div>
    //     <label><input type="checkbox" /> Android</label><br />
    //     <label><input type="checkbox" /> Anna</label><br />
    //     <label><input type="checkbox" /> Gingerbread</label>
    //   </div>


    //   <div className="filter-section">
    //     <div className="filter-category">DISCOUNT</div>
    //     <label><input type="checkbox" /> 50% or more</label><br />
    //     <label><input type="checkbox" /> 40% or more</label><br />
    //     <label><input type="checkbox" /> 30% or more</label><br />
    //     <label><input type="checkbox" /> 20% or more</label><br />
    //     <label><input type="checkbox" /> 10% or more</label>
    //   </div>


    //   <div className="filter-section">
    //     <div className="filter-category">CLOCK SPEED</div>
    //     <label><input type="checkbox" /> 1.5 - 1.9 GHz</label><br />
    //     <label><input type="checkbox" /> 2 - 2.5 GHz</label><br />
    //     <label><input type="checkbox" /> Less than 900 MHz</label>
    //   </div>
    // </aside>
//   );
// }

// export default Filters;





import React, { useState } from "react";
import "./Filters.css"; // Assuming you save the CSS block below in Filters.css

function Filters() {
  // State initialization (as in the previous response)
  const [priceRange, setPriceRange] = useState(30000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  
  // --- HANDLER FUNCTIONS ---
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
    setState(value);
  };
  
  // A helper function to render a list of checkboxes
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

  // --- COMPONENT RENDER ---

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
            <input 
              type="range" 
              min="0" 
              max="50000" 
              step="1000"
              value={priceRange}
              onChange={handlePriceChange}
              className="custom-range-slider"
              style={{ 
                  background: `linear-gradient(to right, #2874f0 0%, #2874f0 ${priceRange / 50000 * 100}%, #ccc ${priceRange / 50000 * 100}%, #ccc 100%)`
              }}
            />
        </div>
        
        <div className="price-display-row">
            <select className="price-dropdown">
                <option>Min</option>
            </select>
            <span>to</span>
            <select className="price-dropdown selected-max">
                <option>{priceRange >= 30000 ? '₹30000+' : `₹${priceRange.toLocaleString('en-IN')}`}</option>
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
            <input 
              type="checkbox" 
              checked={selectedBrands.includes(brand)}
              onChange={() => handleCheckboxChange(brand, setSelectedBrands, selectedBrands)}
            /> 
            {brand}
          </label>
        ))}
      </div>
      
      {/* --- CUSTOMER RATINGS (Radio-like selection) --- */}
      <div className="filter-section">
        <div className="filter-category">CUSTOMER RATINGS</div>
        {['4★ & above', '3★ & above', '2★ & above', '1★ & above'].map(rating => (
            <label key={rating} className="filter-item-label rating-label">
                <input 
                    type="radio" 
                    name="rating-filter" 
                    checked={selectedRating === rating}
                    onChange={() => handleRadioChange(setSelectedRating, rating)}
                /> 
                {rating}
            </label>
        ))}
      </div>

      {/* --- Remaining Filter Sections (Static for brevity) --- */}

      {renderCheckboxes("NETWORK TYPES", ['4G', '3G', '2G', '5G'], [], () => {})}
      {renderCheckboxes("RAM", ['4 GB', '3 GB', '2 GB', '1 GB and Below'], [], () => {})}
      <div className="filter-section">
        <div className="filter-category">GST INVOICE AVAILABLE</div>
        <label className="filter-item-label"><input type="checkbox" /> GST Invoice Available</label>
      </div>
      {/* {renderCheckboxes("INTERNAL STORAGE", ['256 GB & Above', '128 - 255.9 GB', '64 - 127.9 GB', '32 - 63.9 GB'], [], () => {})}
      {renderCheckboxes("BATTERY CAPACITY", ['1000 - 1999 mAh', '2000 - 2999 mAh', '3000 - 3999 mAh'], [], () => {})}
      {renderCheckboxes("SCREEN SIZE", ['5.7 - 5.9 inch', '5.5 - 5.6 inch', '4 - 4.4 inch'], [], () => {})}
      {renderCheckboxes("PRIMARY CAMERA", ['Below 5 MP', '5 - 7.9 MP', '12 - 12.9 MP'], [], () => {})}
      {renderCheckboxes("SECONDARY CAMERA", ['12 - 15.9 MP', '16 - 20.9 MP', '21 MP & Above'], [], () => {})}
      {renderCheckboxes("PROCESSOR BRAND", ['AMD', 'ARM', 'Broadcom'], [], () => {})}
      {renderCheckboxes("SPECIALITY", ['Big Storage', 'Higher Performance', 'Long-Lasting Battery', 'Selfie Camera'], [], () => {})}
      {renderCheckboxes("RESOLUTION TYPE", ['Full HD', 'Full HD+', 'FWVGA'], [], () => {})}
      {renderCheckboxes("OPERATING SYSTEM", ['Android', 'Blackberry', 'iOS'], [], () => {})}
      {renderCheckboxes("SIM TYPE", ['Dual Sim', 'Four Sim', 'Single Sim'], [], () => {})}
      {renderCheckboxes("OFFERS", ['Special Price', 'Buy More, Save More', 'No Cost EMI'], [], () => {})}
      {renderCheckboxes("FEATURES", ['WiFi', 'NFC', 'GPRS'], [], () => {})}
      {renderCheckboxes("TYPE", ['Smartphones', 'Feature Phones'], [], () => {})} */}
         <div className="filter-section">
          <div className="filter-category">INTERNAL STORAGE</div>
         <label><input type="checkbox" /> 256 GB & Above</label><br />
         <label><input type="checkbox" /> 128 - 255.9 GB</label><br />
         <label><input type="checkbox" /> 64 - 127.9 GB</label><br />
         <label><input type="checkbox" /> 32 - 63.9 GB</label>
       </div>

       <div className="filter-section">
        <div className="filter-category">BATTERY CAPACITY</div>
        <label><input type="checkbox" /> 1000 - 1999 mAh</label><br />
//         <label><input type="checkbox" /> 2000 - 2999 mAh</label><br />
//         <label><input type="checkbox" /> 3000 - 3999 mAh</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">SCREEN SIZE</div>
//         <label><input type="checkbox" /> 5.7 - 5.9 inch</label><br />
//         <label><input type="checkbox" /> 5.5 - 5.6 inch</label><br />
//         <label><input type="checkbox" /> 4 - 4.4 inch</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">PRIMARY CAMERA</div>
//         <label><input type="checkbox" /> Below 5 MP</label><br />
//         <label><input type="checkbox" /> 5 - 7.9 MP</label><br />
//         <label><input type="checkbox" /> 12 - 12.9 MP</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">SECONDARY CAMERA</div>
//         <label><input type="checkbox" /> 12 - 15.9 MP</label><br />
//         <label><input type="checkbox" /> 16 - 20.9 MP</label><br />
//         <label><input type="checkbox" /> 21 MP & Above</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">PROCESSOR BRAND</div>
//         <label><input type="checkbox" /> AMD</label><br />
//         <label><input type="checkbox" /> ARM</label><br />
//         <label><input type="checkbox" /> Broadcom</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">SPECIALITY</div>
//         <label><input type="checkbox" /> Big Storage</label><br />
//         <label><input type="checkbox" /> Higher Performance</label><br />
//         <label><input type="checkbox" /> Long-Lasting Battery</label><br />
//         <label><input type="checkbox" /> Selfie Camera</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">RESOLUTION TYPE</div>
//         <label><input type="checkbox" /> Full HD</label><br />
//         <label><input type="checkbox" /> Full HD+</label><br />
//         <label><input type="checkbox" /> FWVGA</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">OPERATING SYSTEM</div>
//         <label><input type="checkbox" /> Android</label><br />
//         <label><input type="checkbox" /> Blackberry</label><br />
//         <label><input type="checkbox" /> iOS</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">SIM TYPE</div>
//         <label><input type="checkbox" /> Dual Sim</label><br />
//         <label><input type="checkbox" /> Four Sim</label><br />
//         <label><input type="checkbox" /> Single Sim</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">OFFERS</div>
//         <label><input type="checkbox" /> Special Price</label><br />
//         <label><input type="checkbox" /> Buy More, Save More</label><br />
//         <label><input type="checkbox" /> No Cost EMI</label>
//       </div>

//       <div className="filter-section">
//         <div className="filter-category">FEATURES</div>
//         <label><input type="checkbox" /> WiFi</label><br />
//         <label><input type="checkbox" /> NFC</label><br />
//         <label><input type="checkbox" /> GPRS</label>
//       </div>


//       <div className="filter-section">
//         <div className="filter-category">TYPE</div>
//         <label><input type="checkbox" /> Smartphones</label><br />
//         <label><input type="checkbox" /> Feature Phones</label>
//       </div>
      <div className="filter-section last-section">
        <div className="filter-category">AVAILABILITY</div>
        <label className="filter-item-label availability-label">
            <input type="checkbox" /> Exclude Out of Stock
        </label>
      </div>

      {renderCheckboxes("OPERATING SYSTEM VERSION NAME", ['Android', 'Anna', 'Gingerbread'], [], () => {})}
      {renderCheckboxes("DISCOUNT", ['50% or more', '40% or more', '30% or more', '20% or more', '10% or more'], [], () => {})}
      {renderCheckboxes("CLOCK SPEED", ['1.5 - 1.9 GHz', '2 - 2.5 GHz', 'Less than 900 MHz'], [], () => {})}
    </aside>
  );
}

export default Filters;