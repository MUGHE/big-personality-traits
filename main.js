import React, { Component, useState, useEffect } from "react";
import "./main.css";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Main() {
  const [essay, setEssay] = useState({ body: "" });
  const [traits, setTraits] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const notify = () => {
    toast.warning("NO INPUT IS GIVEN", { position: "top-right" });
  };
  const notify2 = () => {
    toast.success("RESULTS DISPLAYED", { position: "top-right" });
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };
  function handleChange(e) {
    setEssay((essay) => ({ ...essay, [e.target.name]: e.target.value }));
    console.log(essay);
  }
  function getResults() {
    if (essay.body !== "" || isFilePicked) {
      let c = [];
      for (let i = 0; i < 5; i++) {
        let x = Math.floor(Math.random() * (0 + 2));
        c[i] = x;
      }
      setTraits(c);
      notify2();
      console.log(traits);
      console.log(c);
    } else {
      notify();
    }
  }
  return (
    <div className="gradient-custom" style={{ height: "100vh" }}>
      <ToastContainer />
      <Container>
        <Row>
          <Col md="8">
            <Card className="gradient-custom text-warning">
              <Card.Header>
                <Card.Title as="h4">
                  Big 5 Personality Traits Evaluator
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md="12" classsName="font-weight-bold">
                    <span className="font-weight-bold">O</span>
                    <span className="ml-4"> Openness </span>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" classsName="font-weight-bold">
                    <span className="font-weight-bold">C</span>
                    <span className="ml-4"> Conscientiousness </span>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" classsName="font-weight-bold">
                    <span className="font-weight-bold">E</span>
                    <span className="ml-4"> Extraversion </span>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" classsName="font-weight-bold">
                    <span className="font-weight-bold">A</span>
                    <span className="ml-4"> Agreeableness </span>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" classsName="font-weight-bold">
                    <span className="font-weight-bold">N</span>
                    <span className="ml-4"> Neuroticism </span>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" classsName="font-weight-bold">
                    <a
                      href="https://www.verywellmind.com/the-big-five-personality-dimensions-2795422"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Want to know more about the traits?
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col md="12" classsName="font-weight-bold">
                    <a
                      href="https://www.britannica.com/art/flashback"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read about Stream of Consciousness
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <textarea
                      className="form-control"
                      name="body"
                      type="text"
                      value={essay.body}
                      onChange={handleChange}
                      rows={4}
                      cols={5}
                    />
                    <label
                      className="form-label text-warning"
                      htmlFor="textAreaExample3"
                    >
                      Write Your Essay (Or upload a file below)
                    </label>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <input type="file" name="file" onChange={changeHandler} />
                  </Col>
                </Row>
                <Row>
                  <Col md="12" className="text-center">
                    <Button
                      type="submit"
                      variant="info"
                      onClick={() => getResults()}
                      //onSubmit={handleSubmit}
                      // onSubmit={(e) => handleSubmit(e)}
                    >
                      Get Your Results
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <span className="font-weight-bold ml-4">Openness</span>
                    <span className="font-weight-bold ml-4">
                      Conscientiousness
                    </span>
                    <span className="font-weight-bold ml-4">Extraversion</span>
                    <span className="font-weight-bold ml-4">Agreeableness</span>
                    <span className="font-weight-bold ml-4">Neuroticism</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    {traits?.map((value, index) => {
                      return (
                        <span className="font-weight-bold ml-4">
                          {value === 1 && <span> Present </span>}
                          {value === 0 && <span> Not Present </span>}
                        </span>
                      );
                    })}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Main;
