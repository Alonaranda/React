import React from "react";

export const NotesAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>18 de Mayo 1995</span>
      <div>
        <button 
            className="btn"
        >Picture</button>

        <button 
            className="btn"
        >Save</button>
        
      </div>
    </div>
  );
};
