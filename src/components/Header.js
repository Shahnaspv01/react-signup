import React from "react";
import StarsIcon from "@mui/icons-material/Stars";
import Switch from "./UI/Switch";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <p
          style={{
            fontSize: 12,
            fontWeight: "700",
            color: "#ff4e58",
          }}
        >
          Travelguru
        </p>
        <StarsIcon
          style={{
            fontSize: 10,
            marginTop: 1.5,
            marginLeft: 5,
            color: "#ff4e58",
          }}
        />
      </div>

      <Switch />
    </div>
  );
}
