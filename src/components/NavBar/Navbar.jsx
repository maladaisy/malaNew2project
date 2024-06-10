import React, { useMemo, useTransition } from "react";
import { Icon, Link, Text } from "@innovaccer/design-system";
import { TfiShoppingCartFull } from "react-icons/tfi";
import "./nav.css";
import { useRef, useState } from "react";
import { TbSearch } from "react-icons/tb";
import ProductDetailComponant from "../../Pages.js/ProductDetail/ProductDetailComponant";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/AuthSlice/AuthSlice";

export default function Navbar() {
  let inputref = useRef(null);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const [tra, setTransition] = useTransition();
  let navigate = useNavigate();
  let CartCounting = useSelector((state) => state.addCart.cartItems) ;
 
  
  const CartValue = CartCounting.map((ele) => {
    return {
        cartStore : ele.cartQuantity
       }
  }
)

let value ;
let arrSum;
const sample = useMemo(() => {
    value = CartValue.map((ele) => ele.cartStore)
   return arrSum = value.reduce((pre, curr) => pre + curr, 0)
},[CartValue])


const handlelogout = () => {
  dispatch(logout())
  navigate("/login"); 
}


  // let filterData = useMemo(() => {
    
  //    return array.filter((ele) => ele.toLowerCase().includes(text.toLowerCase()));
    
  // }, [text, array]);

  // console.log("filterData",filterData)

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   let valueref = inputref.current.value;
  //   console.log("value", valueref);
  //   if (valueref === "") return;

  //   setTransition(() => {
  //     setArray((prev) => [...prev, valueref]);
  //   });

  //   inputref.current.value = "";
  // };

  console.log("array =>", array);
  return (
    <>
      <div className="nav-bar-fixed">
        <span className="Sub1">
          <Link>
            <Text>{"Online Shopping"}</Text>
          </Link>
        </span>
        <span className="search-container">
          <input
            type="text"
            className="inputSearch"
            placeholder="Search..."
            onChange={(e) => setText(e.target.value)}
          />
          <button className="search-button">
            <TbSearch />
          </button>
        </span>

        <span className="Sub1">
          <div onClick={handlelogout}>
            {"Logout"}
          </div>

          <div onClick={() => navigate("/ProductAllItems/addedCart")}>
            <TfiShoppingCartFull style={{ width: "32px", height: "32px" }} />
            <span className="filled-circle">
              <p className="text-count">{sample}</p>
            </span>
          </div>
        </span>
      </div>
    
      {/* <>
        <div style={{ height: "50%", marginTop: "10%" }}>
          <input ref={inputref} type="text" name="name"></input>
          <button onClick={handleClick}>{"Submit"}</button>

          {tra
            ? "....Loading"
            : Array.isArray(filterData) ? filterData.map((ele, index) => {
                return (
                  <>
                    <h4 key={index}>{ele}</h4>
                  </>
                );
              }) : 
              <span>
                {"No Data Found"}
              </span>
            }
        </div>
      </> */}
    </>
  );
}
