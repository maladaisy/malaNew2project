import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductDetail } from "../../redux/actioncreator/actioncreator"; // Assuming a thunk
import {
  Card,
  CardHeader,
  CardSubdued,
  CardBody,
  Heading,
  Button,
  Spinner,
} from "@innovaccer/design-system";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const ProductDetailComponant = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cardData, status, errorCard, productImages } = useSelector(
    (state) => state.cart // Assuming state slice is named 'ecommerce'
  );

  console.log("card", cardData, status, errorCard, productImages)

  const processData = (refData) =>
    Array.isArray(refData?.data)
      ? refData.data.map((ele, index) => ({
          ...ele,
          image: productImages[index % productImages.length], // Use modulo to handle overflow
        }))
      : [];

  const processCard = useMemo(
    () => processData(cardData),
    [cardData?.data, productImages]
  );

  //   let filterData = useMemo(() => {

  //     return processCard.filter((ele) => ele.toLowerCase().includes(text.toLowerCase()));

  //  }, [text, array]);

  useEffect(() => {
    dispatch(ProductDetail()); // Assuming a thunk to fetch data
  }, [dispatch]);

  const handleRedirect = (dataDetails) => {
    console.log("dataDetails =>", dataDetails);

    navigate("/ProductAllItems", { state: dataDetails });
  };

  return (
    <>
      {status &&  <Spinner size={'medium'} />}
      {errorCard && <p>{errorCard}</p>}

      {processCard?.length > 0 && (
        <>
          <Card
            style={{ maxWidth: "100%", marginTop: "6rem", padding: "0px" }}
            shadow="none"
          >
            <CardHeader>
              <Heading size="l">All Items</Heading>
            </CardHeader>

            <CardBody>
              <div className="card-mainDiv">
                {processCard.map((data) => (
                  <div key={data._id}>
                    <div onClick={() => handleRedirect(data?.product_details)}>
                      <Card
                        style={{ width: "300px", margin: "3px" }}
                        shadow="none"
                      >
                        <CardHeader>
                          <Heading size="s">
                            {data.title.charAt(0).toUpperCase() +
                              data.title.slice(1).toLowerCase()}
                          </Heading>
                        </CardHeader>
                        <CardBody>
                          <img
                            src={data.image}
                            alt={data.title}
                            width="250"
                            height="250"
                          />
                        </CardBody>
                        <CardSubdued className="mt-5">
                          <div
                            onClick={() =>
                              handleRedirect(data?.product_details)
                            }
                          >
                            {data.title.charAt(0).toUpperCase() +
                              data.title.slice(1).toLowerCase()}
                          </div>
                        </CardSubdued>
                      </Card>
                    </div>
                    {/* </Navigate> */}
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </>
      )}
      {!status && !errorCard && processCard?.length === 0 && (
        <p>{"No Data Found"}</p>
      )}
    </>
  );
};

export default ProductDetailComponant;
