import React from "react";

const GenderCheckBox = ( {selectedGender, onCheckBoxChange }) => {
  return (
    <div className="flex">
      <div className=" form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male"? "selected" : ""} `}>
          <span className=" label-text text-white">Male</span>
          <input type="checkbox" className="checkbox border-slate-900" 
            checked = {selectedGender === "male"}
            onChange={ () => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className=" form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female"? "selected" : ""}`}>
          <span className=" label-text text-white">Female</span>
          <input type="checkbox" className="checkbox border-slate-900" 
            checked = {selectedGender === "female"}
            onChange={ () => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;

// STARTER CODE FOR THIS FILE
// import React from 'react'

// const GenderCheckBox = () => {
//   return (
//     <div className='flex'>
//       <div className=' form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className=' label-text text-white'>Male</span>
//           <input type='checkbox' className='checkbox border-slate-900'/>
//         </label>
//       </div>
//       <div className=' form-control'>
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className=' label-text text-white'>Female</span>
//           <input type='checkbox' className='checkbox border-slate-900'/>
//         </label>
//       </div>
//     </div>
//   )
// }

// export default GenderCheckBox;
