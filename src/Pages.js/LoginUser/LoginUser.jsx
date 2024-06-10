import React from "react";
import {
  Input,
  Label,
  HelpText,
  Button,
  Link,
  Toast,
} from "@innovaccer/design-system";
import "@innovaccer/design-system/css/dist/index.css";
import commonInput from "../commonPage/commonInput";
import { Spinner } from "@innovaccer/design-system";

function LoginUser({
  formfield,
  visiblity,
  handleVisiblity,
  Message,
  errorMessage,
  onSubmit,
  handleonChange,
  isValidateLogin,
  LoginLoading,
  loginerr
}) {
  console.log("Loading =>", LoginLoading);
  const Inputs = {
    EmailAdress: "",
    Password: "",
  };

  return (
    <>
      {Message ? (
        <>
          <Toast
            appearance="success"
            message={Message}
            title="successfully sent"
          />
        </>
      ) : (
        <div className="container">
          <h1>{"Login"}</h1>
          <form onSubmit={onSubmit}>
            {Object.keys(Inputs).map((ele, index) => {
              return (
                <>
                  <>
                    <div key={index}>
                      <Label htmlFor={ele} withInput={true}>
                        {ele}
                      </Label>
                      <Input
                        placeholder={`Enter ${ele}`}
                        onChange={handleonChange}
                        type={
                          ele === "Password"
                            ? visiblity
                              ? "text"
                              : "password"
                            : null
                        }
                        name={ele}
                        value={formfield[ele]}
                        actionIcon={
                          ele === "Password" ? (
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
                </>
              );
            })}

            <br></br>
           

            {LoginLoading ? (
              <Spinner size={'medium'} />
            ) : (
              <Button
                appearance="primary"
                aria-label="Login"
                expanded={true}
                size="tiny"
                disabled={!isValidateLogin()}
                onClick={onSubmit}
              >
                {"Login"}
              </Button>
            )}
          </form>
          <div>
          {
              loginerr && (
                <HelpText error={true} message={loginerr} />
              )
              
            }
          </div>
          <div>
            <p>{"Dont Have An Account ?"}</p>

            <Link href="/Register" onClick={function () {}} target="_parent">
              {"Register"}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default commonInput(LoginUser);
