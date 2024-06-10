import React, { useEffect, useState } from "react";
import "../AuthUser/otp.css";
import {
  AuthRegisterMethod,
  LoginMethod,
} from "../../redux/Authactioncreator/Authactioncreator";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const commonInput = (OriginalComponent) => {
  const NewComponent = () => {
    let dispatch = useDispatch();

    const [formfield, setFormfield] = useState({
      Name: "",
      phoneNumber: "",
      EmailAdress: "",
      Password: "",
      MatchPassword: "",
    });

    const [visiblity, setVisiblity] = useState(false);
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState({});
    const { logindata, loginerr, LoginLoading, message, err, Loading } =
      useSelector((state) => state.auth);

    const [successMessage, setSuccessMessage] = useState("");

    console.log("message", message && message.data.message, "err", err);

    useEffect(() => {
      let SuccessMessage = logindata ? logindata.data.message : "";
      let StatusValue = logindata ? logindata.data.status : "";
      let RegisterMessage = message ? message.data.message : "";
      let Registerstatus = message ? message.data.status : "";

      if (StatusValue === 200) {
        setSuccessMessage(SuccessMessage || "Login Successfully");
        setFormfield((pre) => {
          return {
            ...pre,
            EmailAdress: "",

            Password: null,
          };
        });
        setTimeout(() => {
          navigate("/ProductAllList");
        }, 3000);
      } else if (Registerstatus === 201) {
        setSuccessMessage(RegisterMessage || "Register Successfully");
        setFormfield((pre) => {
          return {
            ...pre,
            Name: "",
            phoneNumber: null,
            EmailAdress: "",
            Password: null,
            MatchPassword: null,
          };
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else if (StatusValue === 400 || Registerstatus === 400) {
        if (StatusValue === 400) {
          setSuccessMessage(loginerr || "Login Error");
        } else if (Registerstatus === 400) {
          setSuccessMessage(err || "Register Error");
        }
      }
    }, [logindata, loginerr, navigate, message, err]);

    const isValidate = () => {
      //console.log("Validate =>",Object.values(formfield).every((ele) => ele.trim() !== ""))
      return Object.values(formfield).every((ele) => ele !== "");
    };

    const isValidateLogin = () => {
      return (
        formfield.EmailAdress.trim() !== "" && formfield.Password.trim() !== ""
      );
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      let payload = {
        user_name: formfield.Name,
        user_email: formfield.EmailAdress,
        user_phone_number: formfield.phoneNumber,
        user_password: formfield.Password
          ? formfield.Password
          : formfield.MatchPassword,
      };

      let payload1 = {
        user_email: formfield.EmailAdress,
        user_password: formfield.Password
          ? formfield.Password
          : formfield.MatchPassword,
      };
      if (isValidate()) {
        dispatch(AuthRegisterMethod(payload));
      } else if (isValidateLogin()) {
        dispatch(LoginMethod(payload1));
      } else {
        setSuccessMessage("Error");
      }
    };

    const handleVisiblity = () => {
      setVisiblity(!visiblity);
    };
    console.log("visiblity =>", visiblity);

    const handleChange = (e) => {
      let { name, value } = e.target;

      setFormfield((pre) => {
        return { ...pre, [name]: value };
      });
      let validationError = {};

      switch (name) {
        case "Name":
          if (value.trim() === "") {
            validationError.Name = "UserName is Requied";
          } else if (!(value.length >= 3)) {
            validationError.Name =
              "UserName should be greater than 3 charector";
          }

          break;

        case "phoneNumber":
          let regexphone = /^\d{1,10}$/;
          if (!value.trim()) {
            validationError.phoneNumber = "Phone Number is Requied";
          } else if (!regexphone.test(value)) {
            validationError.phoneNumber = "Invalid Phone Number";
          }
          break;

        case "EmailAdress":
          let regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
          if (!value.trim()) {
            validationError.EmailAdress = "email is Requied";
          } else if (!regexEmail.test(value)) {
            validationError.EmailAdress = "Invalid Email";
          }
          break;

        case "Password":
          let regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

          if (!value.trim()) {
            validationError.Password = "Password is Requied";
          } else if (!regex.test(value)) {
            validationError.Password =
              "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
          }
          // else if(!(value === formfield.MatchPassword)){
          //   validationError.Password = "Password is Not Matched"
          // }
          break;

        case "MatchPassword":
          if (!value.trim()) {
            validationError.Password = "Password is Requied";
          } else if (!(value === formfield.Password)) {
            validationError.MatchPassword = "Password is Not Matched";
          }

          //console.log("password",value.trim() ,"another", formfield.Password.trim(),"test",value.trim() === formfield.Password.trim() )

          break;

        default:
          break;
      }

      setErrorMessage((pre) => ({ ...pre, [name]: validationError[name] }));
    };

    return (
      <>
        <div className="MainPage">
          <div className="card card-detail login-card">
            <div className="container">
              <OriginalComponent
                onSubmit={handleSubmit}
                handleonChange={handleChange}
                formfield={formfield}
                Message={successMessage}
                visiblity={visiblity}
                setVisiblity={setVisiblity}
                handleVisiblity={handleVisiblity}
                isValidate={isValidate}
                errorMessage={errorMessage}
                isValidateLogin={isValidateLogin}
                LoginLoading={LoginLoading}
                RegisterLoading={Loading}
                loginerr={loginerr}
                registerErr={err}
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  return NewComponent;
};

export default commonInput;
