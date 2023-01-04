import { Apple, Facebook, Google } from "@mui/icons-material";
import { Button, Grid, IconButton } from "@mui/material";
import React from "react";

export default function SocialButton() {
  return (
    <Grid style={{ width: "100%" }} container spacing={1}>
      <Grid item xs={12} lg={8}>
        <Button
          disableElevation
          startIcon={<Google />}
          variant="contained"
          style={{
            background: "#FDECED",
            color: "#281761",
            // padding: "10px 40px",
            borderRadius: 10,
            textTransform: "none",
            width: "100%",
            fontWeight: "700",
            padding: "12px 30px",
            fontSize: 13,
          }}
        >
          Sign in with Google
        </Button>
      </Grid>

      <Grid item xs={6} lg={2}>
        <IconButton
          style={{
            height: "100%",
            width: "100%",
            background: "#FDECED",
            color: "#281761",
            borderRadius: 10,
          }}
        >
          <Facebook />
        </IconButton>
      </Grid>
      <Grid item xs={6} lg={2}>
        <IconButton
          style={{
            height: "100%",
            width: "100%",
            background: "#FDECED",
            color: "#281761",
            borderRadius: 10,
          }}
        >
          <Apple />
        </IconButton>
      </Grid>
    </Grid>
  );
}
