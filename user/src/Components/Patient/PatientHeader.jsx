import React, { useState } from "react";
import classes from "./patient.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function PatientHeader() {
  const [isopen, setIsopen] = useState(false);
  return (
    <div className={classes.header_outer_container}>
      <div className={classes.header_inner_container}>
        <div className={classes.profile}>
          <div
            onMouseEnter={() => {
              setIsopen(true);
            }}
            onMouseLeave={() => {
              setIsopen(false);
            }}
          >
            <AccountCircleIcon fontSize="large" />
            {isopen && (
              <div className={classes.dropdownProfileMenue}>
                <p className={classes.profbtn}>Account info</p>
                <p className={classes.profbtn}>logout</p>
              </div>
            )}
          </div>
        </div>
        <button className={classes.btn}>Book appointment</button>
      </div>
    </div>
  );
}
