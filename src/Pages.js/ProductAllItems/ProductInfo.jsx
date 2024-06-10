import React, { useDeferredValue, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardSubdued,
  CardBody,
  Heading,
  Button,
  Toast,
} from "@innovaccer/design-system";
import "../ProductDetail/Product.css";
import { FaOpencart } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity } from "../../redux/Slice/AddCartSlice";
import { useDebugValue } from "react";

export default function ProductInfo(props) {
  let cartStatus = useSelector((state) => state.addCart.cartStatus);
  let navigate = useNavigate();
  let location = useLocation();
  let dispatch = useDispatch();
  let Info = location?.state;
  const [showToast, setShowToast] = useState(false);
  // let deffered = useDeferredValue(showToast);
  console.log("cartStatus", cartStatus);

  // Discount
  let Original = Info.price;
  let discountPrice = Info.discount_percentage;

  const getDiscount = useMemo(() => {
    return Original && discountPrice
      ? ((Original - discountPrice) / Original) * 100
      : 0;
  }, [Original, discountPrice]);

  const handleaddcart = (WantedData) => {
    // console.log("Info", WantedData);
    setShowToast(true);
    dispatch(addQuantity(WantedData));
    navigate("/ProductAllItems/addedCart");
  };

  useEffect(() => {
    let timer;
    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }

    
  }, [showToast]);

  console.log("showToast =>", showToast);

  return (
    <>
      <div className="container-details">
        <div className="left-card">
          <Card style={{ width: "30rem" }} shadow="none">
            <CardHeader>
              <Heading size="m">{Info?.title}</Heading>
            </CardHeader>
            <CardBody>
              <img
                src={Info?.image}
                alt={Info?.title}
                width="350"
                height="350"
              />
            </CardBody>
            <CardSubdued
              className="mt-5"
              style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
            >
              <div style={{ display: "flex", flex: "1" }}>
                <Button
                  style={{ color: "#fff", backgroundColor: "#144757" }}
                  aria-label="cart"
                  icon={<FaOpencart />}
                  iconAlign="left"
                  onClick={() => handleaddcart(Info)}
                >
                  ADD TO CART
                </Button>
              </div>
              <div>
                <Button
                  aria-label="buy"
                  icon={<BiPurchaseTag />}
                  iconAlign="left"
                  style={{ color: "#fff", backgroundColor: "#144757" }}
                >
                  BUY NOW
                </Button>
              </div>
            </CardSubdued>
          </Card>
        </div>

        <div className="right-card">
          <Card style={{ width: "30rem", margin: "3px" }} shadow="none">
            <CardHeader>
              <Heading size="m">{"Details"}</Heading>
            </CardHeader>
            <CardBody>
              <h2>{Info?.description}</h2>
              <div>
                <Button
                  aria-label="rank"
                  icon={<IoStar />}
                  iconAlign="right"
                  style={{ color: "#fff", backgroundColor: "green" }}
                >
                  {Info?.rating}
                </Button>
                &nbsp;
                <span>
                  {Info?.reviews_rating_details?.length > 0
                    ? Info?.reviews_rating_details?.length
                    : 0}
                  &nbsp;
                  {"Reviews"}
                </span>
              </div>
              <span>{"Special Price"}</span>
              <div>
                <span>{Info?.price}</span>
                &nbsp; &nbsp; {getDiscount.toFixed()}
                {"%"}
                <span>{"Offer"}</span>
              </div>
              <div>
                <h3>{"Available Offers"}</h3>
              </div>
              <div className="row">
                <div className="column">{"Description"}</div>
                <div className="column">{Info?.description}</div>
              </div>

              <>
                <Card shadow="none">
                  <CardHeader>
                    <Heading size="m">{"Specification"}</Heading>
                  </CardHeader>
                  <CardBody>
                    <div className="row">
                      <div className="column">
                        <h4>{"General"}</h4>
                        <p>{"Modal Name"}</p>
                        <p>{"Color"}</p>
                      </div>
                      <div className="column">
                        <h5>&nbsp;</h5>{" "}
                        {/* Empty header to align with the first column */}
                        <p>{""}</p> {/* Placeholder for future content */}
                        <p>{Info?.title}</p>
                        <p>{"red"}</p>
                      </div>
                    </div>
                  </CardBody>
                  <CardSubdued>{"Read More"}</CardSubdued>
                </Card>
                <Card shadow="none" style={{ marginTop: "5px" }}>
                  <CardHeader>
                    <Heading size="m">{"Ratings & Reviews"}</Heading>
                  </CardHeader>
                  <CardBody>{"Uploaded Images"}</CardBody>
                </Card>
                {Info?.reviews_rating_details.length > 0 ? (
                  Info.reviews_rating_details.map((e, index) => {
                    const now = moment();
                    const date = moment(e?.date);
                    const years = now.diff(date, "years");
                    const months = now.diff(date, "months") % 12;
                    return (
                      <Card
                        shadow="none"
                        key={e._id}
                        style={{ marginTop: "5px" }}
                      >
                        <CardBody>
                          <div
                            style={{
                              marginTop: "5px",
                              display: "flex",
                              alignItems: "center",
                              gap: "10px",
                            }}
                          >
                            <Button
                              size="tiny"
                              aria-label="rank"
                              icon={<IoStar />}
                              iconAlign="right"
                              style={{
                                color: "#000",
                                backgroundColor: "#D8F8E4",
                              }}
                            >
                              {e?.rating}
                            </Button>

                            <h6>{"Just Okay"}</h6>
                          </div>

                          <div className="details">
                            <p>{e?.comment}</p>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <span>{e?.reviewer_name}</span>
                              <p style={{ marginLeft: "10px" }}>
                                {years > 0
                                  ? `${years} year${years > 1 ? "s" : ""}`
                                  : ""}
                                {years > 0 && months > 0 ? " and " : ""}
                                {months > 0
                                  ? `${months} month${
                                      months > 1 ? "s" : ""
                                    } ago`
                                  : " ago"}
                              </p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    );
                  })
                ) : (
                  <p>No reviews available</p>
                )}
              </>

              {/* Add more content to enable scrolling */}
            </CardBody>
          </Card>
        </div>
        {showToast && cartStatus === "initial" && (
          <div>
            <Toast
              appearance="success"
              message={`Title New Item Added Successfully`}
              title="Success"
              className="toast-success-custom"
            />
          </div>
        )}
        {showToast && cartStatus === "second" && (
          <div>
            <Toast
              appearance="success"
              message={`Title Item Added Successfully`}
              title="Success"
              className="toast-success-custom"
            />
          </div>
        )}
      </div>
    </>
  );
}
