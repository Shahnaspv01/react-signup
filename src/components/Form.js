import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setVisible] = React.useState(false);
  const matchesTablet = useMediaQuery("(min-width:790px)");
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const onSubmit = (data) => {
    setButtonLoading(true);
    axios
      .post(
        "https://gorest.co.in/public/v2/users?access-token=dd5bbc227d10ebe55066ad458394b38370d9f1fab2a759fed7a14c2af53db549",
        {
          name: data.name,
          gender: "male",
          status: "active",
          email: data.email,
          password: data.password,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setButtonLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
        <div style={{ marginBottom: 20, textAlign: "left" }}>
          <input
            placeholder="Full Name"
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          <span className="error">
            {errors.name?.type === "required" && "Name is required"}
          </span>
        </div>
        <div style={{ marginBottom: 20, textAlign: "left" }}>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "This is not a valid email",
              },
            })}
          />
          <span className="error">
            {errors.email?.type === "required" && "email is required"}
            {errors.email?.type === "pattern" && "email is not valid"}
          </span>
        </div>
        <div style={{ marginBottom: 20, textAlign: "left" }}>
          <div style={{ position: "relative" }}>
            <input
              placeholder="Password"
              type={passwordVisible ? "text" : "password"}
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "Password must be minimum 8 characters",
                },
              })}
            />
            <IconButton
              onClick={() => {
                setVisible(!passwordVisible);
              }}
              style={{
                position: "absolute",
                right: matchesTablet ? 8 : 0,
                top: 2.5,
              }}
            >
              {passwordVisible ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </div>
          <span className="error">
            {errors.password?.type === "required" && "Password is required"}
            {errors.password?.type === "minLength" &&
              "Password must contain 8 characters"}
          </span>
        </div>

        <Button
          disabled={buttonLoading}
          disableElevation
          variant="contained"
          fullWidth
          onClick={handleSubmit(onSubmit)}
          style={{
            background: "#ff4e58",
            borderRadius: 10,
            textTransform: "capitalize",
            padding: "12px 20px",
            border: "none",
            marginBottom: "20px",
            fontSize: 13,
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Continue
        </Button>
      </form>
    </div>
  );
}
