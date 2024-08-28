import React from "react";
import NavigationBar from "./navbar";
import { Col, Container, Row, Image } from "react-bootstrap";
import asrama from "../Assets/Screenshot 2024-08-20 005931.png";
import aula from "../Assets/aula-almu.JPG";
import asramaPutri from "../Assets/asramaputri.JPG";
import masjid from "../Assets/masjid.jpg";
import hadroh from "../Assets/hadroh.jpg";
import kelas from "../Assets/kelas.JPG"
import mck from "../Assets/mck.JPG"
import kantin from "../Assets/kantin.JPG"
import Footnote from "../Componen/footnote";
import "../Style/fasilitas.css";

function Fasilitas() {
  return (
    <>
      <NavigationBar />
      <div className="fasilitas-page">
        <header className="facility-header">
          <div className="header-text">
            <h1 className="facility-title">Fasilitas</h1>
          </div>
        </header>
        <Container>
          <Row className="mt-5">
            <Col md={6} className="mb-4">
              <div className="facility-section">
                <h2 className="facility-section-title">Asrama Putra</h2>
                <div className="facility-section-content">
                  <Image
                    src={asramaPutri}
                    fluid
                    className="facility-image"
                  />
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="facility-section">
                <h2 className="facility-section-title">Asrama Putri</h2>
                <div className="facility-section-content">
                  <Image
                    src={asramaPutri}
                    fluid
                    className="facility-image"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <div className="facility-section">
                <h2 className="facility-section-title">Aula</h2>
                <div className="facility-section-content">
                  <Image
                    src={aula}
                    fluid
                    className="facility-image"
                  />
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="facility-section">
                <h2 className="facility-section-title">Masjid</h2>
                <div className="facility-section-content">
                  <Image
                    src={masjid}
                    fluid
                    className="facility-image"
                  />
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="facility-section">
                <h2 className="facility-section-title">Kamar Mandi</h2>
                <div className="facility-section-content">
                  <Image
                    src={mck} // Replace with correct image
                    fluid
                    className="facility-image"
                  />
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="facility-section">
                <h2 className="facility-section-title">Ruang Kelas</h2>
                <div className="facility-section-content">
                  <Image
                    src={kelas} // Replace with correct image
                    fluid
                    className="facility-image"
                  />
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="facility-section">
                <h2 className="facility-section-title">Hadroh</h2>
                <div className="facility-section-content">
                  <Image
                    src={hadroh}
                    fluid
                    className="facility-image"
                  />
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="facility-section">
                <h2 className="facility-section-title">Kantin Pondok</h2>
                <div className="facility-section-content">
                  <Image
                    src={kantin} // Replace with correct image
                    fluid
                    className="facility-image"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footnote />
    </>
  );
}

export default Fasilitas;
