import React from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import "./UnderConstruction.css";

function UnderConstruction() {
  return (
    <>
      <div className="construction-container">
        <div className="construction-icon" alt="construction icon">
          <EngineeringIcon sx={{ fontSize: 70 }} />
        </div>
        <h1 className="construction-info">Page under construction</h1>
      </div>
    </>
  );
}

export default UnderConstruction;
