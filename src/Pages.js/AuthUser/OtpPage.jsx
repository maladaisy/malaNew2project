import React, { useState } from "react";
import { Input, Label, HelpText, Spinner } from "@innovaccer/design-system";
import "@innovaccer/design-system/css/dist/index.css";
import "../AuthUser/otp.css";
import commonInput from "../commonPage/commonInput";
import { Button } from "@innovaccer/design-system";
import { Link } from "@innovaccer/design-system";
import { Toast } from "@innovaccer/design-system";

function OtpPage(props) {
  const {
    handleonChange,
    Message,
    onSubmit,
    formfield,
    registerErr,
    visiblity,
    handleVisiblity,
    isValidate,
    errorMessage,
    RegisterLoading
  } = props;

  const Inputs = {
    Name: "",
    phoneNumber: "",
    emailAdress: "",
    password: "",
    matchPassword: "",
  };

  const arr = [
    "Name",
    "phoneNumber",
    "EmailAdress",
    "Password",
    "MatchPassword",
  ];

  return (
    <>
      {Message ? (
        <>
          <Toast
            appearance="success"
            message={Message}
            title="successfully sent"
          />
           <Link href="/login" target="_parent">
              {"Login"}
          </Link>

        </>
      ) : (
        <>
          <h1>{"Registration"}</h1>
          <form onSubmit={onSubmit}>
            {/* {Object.keys(Inputs).map((ele) => {
              return (
                <>
                  <Label htmlFor="fullName" withInput={true}>
                    {ele}
                  </Label>
                  <Input onChange={handleonChange} label={ele} />
                </>
              );
            })} */}
            {arr.map((ele, index) => {
              return (
                <>
                  <div key={index}>

                    <Label htmlFor={ele} withInput={true}>
                      {ele}
                    </Label>

                    <Input
                      placeholder={`Enter ${ele}`}
                      onChange={handleonChange}
                      type={
                        ele === "Password" || ele === "MatchPassword"
                          ? visiblity
                            ? "text"
                            : "password"
                          : ele === "EmailAdress"
                          ? "email"
                          : "text"
                      }
                      name={ele}
                      value={formfield[ele]}
                      actionIcon={
                        ele === "Password" || ele === "MatchPassword" ? (
                          <Input.ActionButton
                            aria-label={
                              visiblity ? "Hide Password" : "Show Password"
                            }
                            className="cursor-pointer"
                            onClick={handleVisiblity}
                            name={
                              visiblity ? "visibility_off" : "visibility_on"
                            }
                          />
                        ) : null
                      }
                    />
                    
                    {errorMessage[ele] && (
                      <>
                        <HelpText error={true} message={errorMessage[ele]} />
                      </>
                    )}
                  </div>
                </>
              );
            })}
            <br></br>

           
             {RegisterLoading ? (
              <Spinner size={'medium'} />
            ) : (
               <Button
              appearance="primary"
              aria-label="Login"
              expanded={true}
              size="tiny"
              disabled={!isValidate()}
              onClick={onSubmit}
            >
              Register
            </Button> 
            )}
          </form>
          <div>
          {
              registerErr && (
                <HelpText error={true} message={registerErr} />
              )
              
            }
          </div>
          <div>
            <p>{"Aready Have An Account?"}</p>

            <Link href="/login" onClick={function () {}} target="_parent">
              {"Login"}
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default commonInput(OtpPage);
