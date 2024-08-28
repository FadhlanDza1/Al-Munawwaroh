import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../Style/footnote.css";
import fbIcon from "../Assets/facebook.png";
import igIcon from "../Assets/instagram.png";
import telpIcon from "../Assets/phone-call.png";

function FootNote() {
  return (
    <Container fluid className="py-0 px-0">
      <div className="bg-footnote">
        <div className="content-wrapper">
          <Row className="text-style mt-3 pb-3">
            <Col xs={12} md={6} className="about-section">
              <h5>Tentang Kami</h5>
              <p>
                Kp. Sapan RT. 005 RW. 006 <br />
                Sumbersari Ciparay <br />
                Bandung <br />
                40622
              </p>
            </Col>
            <Col xs={12} md={6} className="contact-section">
              <h5>Hubungi Kami</h5>
              <Row className="mt-3">
                <Col xs={12} className="d-flex align-items-center mb-3 contact-item">
                  <Image src={fbIcon} fluid className="contact-icon" />
                  <span className="ms-2">AlMunawwaroh</span>
                </Col>
                <Col xs={12} className="d-flex align-items-center mb-3 contact-item">
                  <Image src={igIcon} fluid className="contact-icon" />
                  <span className="ms-2">@AlMunawwaroh</span>
                </Col>
                <Col xs={12} className="d-flex align-items-center contact-item">
                  <Image src={telpIcon} fluid className="contact-icon" />
                  <span className="ms-2">+6288-971-035-255</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}

export default FootNote;
