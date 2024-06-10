import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Column,
  Heading,
  Row,
  CardSubdued
} from "@innovaccer/design-system";
import "../ProductAllItems/productadd.css"

const ProductAddItem = () => {
  return (
    <>
     <div className="container-fluid">
      <Row>
        <Column size="7" className="left-column">
          <div className="left-card-side">
            <Row style={{ marginLeft: "8rem", marginTop: "9rem" }}>
              <Column size="12">
                <Card shadow="none" className="mb-3">
                  <CardHeader className="d-flex justify-content-between">
                    <span weight="strong" appearance="disabled">SECONDARY</span>
                    <Badge>INACTIVE</Badge>
                  </CardHeader>
                  <CardBody>
                    <span appearance="disabled">Community Plan</span>
                    <br />
                    <span small={true}>Blue Shield of California</span>
                    <br />
                    <div className="py-6">
                      <span small={true} appearance="disabled">Subscriber</span>
                      <br />
                      <span appearance="disabled">LAWSON, MICHAEL (Spouse)</span>
                      <br />
                      <span weight="medium">HKA987654321</span>
                    </div>
                  </CardBody>
                  <CardFooter className="position-relative" withSeperator={false}>
                    <div>
                      <span appearance="disabled" small={true}>Last attr:</span>
                      <span small={true} className="ml-3">11/18</span>
                      <span appearance="disabled" small={true} className="ml-7">Payer ID:</span>
                      <span small={true} className="ml-3">042</span>
                    </div>
                  </CardFooter>
                </Card>
              </Column>
            </Row>
            <Row style={{ marginLeft: "8rem", marginTop: "1rem" }}>
              <Column size="12">
                <Card shadow="none" className="mb-0">
                  <CardHeader className="d-flex justify-content-between">
                    <span weight="strong" appearance="disabled">SECONDARY</span>
                    <Badge>INACTIVE</Badge>
                  </CardHeader>
                  <CardBody>
                    <span appearance="disabled">Community Plan</span>
                    <br />
                    <span small={true}>Blue Shield of California</span>
                    <br />
                    <div className="py-6">
                      <span small={true} appearance="disabled">Subscriber</span>
                      <br />
                      <span appearance="disabled">LAWSON, MICHAEL (Spouse)</span>
                      <br />
                      <span weight="medium">HKA987654321</span>
                    </div>
                  </CardBody>
                  <CardFooter className="position-relative" withSeperator={false}>
                    <div>
                      <span appearance="disabled" small={true}>Last attr:</span>
                      <span small={true} className="ml-3">11/18</span>
                      <span appearance="disabled" small={true} className="ml-7">Payer ID:</span>
                      <span small={true} className="ml-3">042</span>
                    </div>
                  </CardFooter>
                </Card>
               
              </Column>
            </Row>
            <Row style={{ marginLeft: "8rem"}}>
            <Column size="12">
            <Card className="p-7">
                  <Button>{"Place Order"}</Button>
                </Card>
            </Column>
           
            </Row>
          </div>
        </Column>
        <Column size="5" className="right-column">
          <div className="right-card-side">
            <Row style={{ marginLeft: "2rem", marginTop: "9rem" }}>
              <Column size="8">
                <Card shadow="none" className="mb-3">
                  <CardHeader className="d-flex justify-content-between">
                    <span weight="strong" appearance="disabled">SECONDARY</span>
                    <Badge>INACTIVE</Badge>
                  </CardHeader>
                  <CardBody>
                    <span appearance="disabled">Community Plan</span>
                    <br />
                    <span small={true}>Blue Shield of California</span>
                    <br />
                    <div className="py-6">
                      <span small={true} appearance="disabled">Subscriber</span>
                      <br />
                      <span appearance="disabled">LAWSON, MICHAEL (Spouse)</span>
                      <br />
                      <span weight="medium">HKA987654321</span>
                    </div>
                  </CardBody>
                  <CardFooter className="position-relative" withSeperator={false}>
                    <div>
                      <span appearance="disabled" small={true}>Last attr:</span>
                      <span small={true} className="ml-3">11/18</span>
                      <span appearance="disabled" small={true} className="ml-7">Payer ID:</span>
                      <span small={true} className="ml-3">042</span>
                    </div>
                  </CardFooter>
                </Card>
              </Column>
            </Row>
          </div>
        </Column>
      </Row>
    </div>
    </>
  );
};

export default ProductAddItem;
