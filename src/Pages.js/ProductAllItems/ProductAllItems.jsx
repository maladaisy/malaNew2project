import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardSubdued,
  CardBody,
  Heading,
} from "@innovaccer/design-system";
import "../ProductDetail/Product.css";

export default function ProductAllItems(props) {
  let location = useLocation();
  let navigate = useNavigate();
  const data = location.state || []; // Assuming 'products' is the key containing the array

  // console.log("Details", data);

  const datadetails = data?.map((ele, index) => {
    return {
      ...ele,
      index: index + 1,
      image: ele.image,
      title: ele.title,
      price: ele.price,
      shipping_information: ele.shipping_information,
      availablity_status: ele.availablity_status,
      stock: ele.stock,
      discount_percentage: ele.discount_percentage,
      rating: ele.rating,
    };
  });

  const handleRedirect = (dataDetails) => {
    // console.log("data =>",dataDetails);
    navigate(`/ProductEachItem/:id=${dataDetails?._id}`, { state: dataDetails });
  };

  return (
    <>
      <div className="cards-container">
        {datadetails?.length > 0 ? (
          datadetails?.map((ele) => {
            return (
              <>
                <div
                  className="container-details1"
                  onClick={() => handleRedirect(ele)}
                >
                  <Card shadow="none" key={ele._id}>
                    <CardHeader>
                      <Heading size="m">{ele.title || "sample"}</Heading>
                    </CardHeader>
                    <CardBody>
                      <img
                        src={ele.image}
                        alt={ele.title || "Image"}
                        width="280"
                        height="280"
                      />
                      <div className="details">
                        <p>Shipping Information: {ele.shipping_information}</p>
                        <p>Availability: {ele.availablity_status}</p>
                        <p>Stock: {ele.stock}</p>
                        <p>Discount: {ele.discount_percentage}%</p>
                        <p>Rating: {ele.rating}</p>
                      </div>
                    </CardBody>
                    <CardSubdued className="mt-5">
                      <Heading size="s">Price: {ele.price}</Heading>
                    </CardSubdued>
                  </Card>
                </div>
              </>
            );
          })
        ) : (
          <p>No Data Found</p>
        )}
      </div>
    </>
  );
}
