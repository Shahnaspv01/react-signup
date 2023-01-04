import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Image from "./Image";
import "../styles/global.css";
import Header from "./Header";
import Form from "./Form";
import SocialButton from "./SocialButton";

export default function SignUp() {
  const matchesTablet = useMediaQuery("(min-width:790px)");

  return (
    <Box
      style={{
        margin: !matchesTablet ? "20px 0" : "0px",
        width: "90vw",
        borderRadius: 30,
        maxWidth: 1500,
      }}
    >
      <Grid
        container
        style={{
          width: matchesTablet ? "90vw" : "100%",
          maxWidth: 1500,
        }}
      >
        <Image />
        <Grid
          justifyContent="center"
          sx={{ display: "flex" }}
          item
          xs={12}
          lg={6}
        >
          <div
            style={{
              width: matchesTablet ? "75%" : "95%",
              marginTop: matchesTablet ? 30 : 25,
            }}
          >
            <Header />
            <Divider />
            <div
              style={{
                margin: "20px 0",
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography className="sign" component="h1" variant="h5">
                Sign in to Travelguru
              </Typography>
              <Typography>
                <span className="sign" style={{ fontSize: "11px" }}>
                  Don't have an account?
                </span>{" "}
                <span
                  style={{
                    fontSize: "12px",
                    color: "#ff5353",
                    fontWeight: "bold",
                  }}
                >
                  Sign up
                </span>
              </Typography>
            </div>
            <Divider />
            {/* <hr sx={{marginLeft: '5%', marginRight: '5%'}}/> */}
            <div style={{ margin: "20px 0" }}>
              <br />
              <Form />
              <Divider style={{ marginBottom: 20 }} />
              <div
                className="sign"
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                - OR -
              </div>
              <br />

              <SocialButton />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
