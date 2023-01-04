import React, { useContext } from "react";
import lightImg from "../assets/img.jpg";
import darkImg from "../assets/darkmode.jpg";
import Grid from "@mui/material/Grid";
import { Hidden } from "@mui/material";
import { ThemeContext } from "../App";

function Image() {
  const { theme } = useContext(ThemeContext);
  return (
    <Hidden mdDown>
      <Grid item xs={12} lg={6}>
        <div style={{ height: "100%" }}>
          <img
            style={{ objectFit: "fill", height: "100%", width: "100%" }}
            src={theme === "light" ? lightImg : darkImg}
            alt="login"
          />
        </div>
      </Grid>
    </Hidden>
  );
}

export default Image;
