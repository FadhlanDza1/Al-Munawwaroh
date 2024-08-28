import React from "react";
import NavigationBar from "./navbar";
import FootNote from "./footnote";
import "../Style/home.css";
import guru from "../Assets/Guru-AlMuna.jpg";
import { Card, Col, Row, Image, Container, Carousel } from "react-bootstrap";
import pimpinan from "../Assets/pimpinan.png";
import smp from "../Assets/IMG_1140.JPG";
import ibura from "../Assets/ibu_ra.jpg"
import books from "../Assets/open-book.png";
import historyImage from "../Assets/Guru-AlMuna.jpg";
import corousel2 from "../Assets/IMG_1137.JPG"
import corousel3 from "../Assets/IMG_1134.JPG"
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavigationBar />
      <Container fluid className="p-0">
        <div className="carousel-section">
          <Carousel>
            <Carousel.Item interval={10000}>
              <Image
                className="d-block w-100 carousel-image"
                src={guru}
              />
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <Image
                className="d-block w-100 carousel-image"
                src={corousel2}
              />
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <Image
                className="d-block w-100 carousel-image"
                src={corousel3}
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="bg-history py-5">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} className="text-content">
                <h2 className="section-histori">Sejarah Singkat</h2>
                <p className="text-body">
                  Pondok Pesantren Al-Munawwaroh Sapan merupakan lembaga yang
                  ada di bawah naungan Yayasan Al Munawwaroh Sapan yang
                  didirikan oleh H. DADAN RAMDANI, S.Ag., M.Pd pada tahun
                  2002.<br />
                  Cikal bakal Ponpes Al-Munawwaroh Sapan adalah pengajian
                  anak-anak kampung Sapan di asuh oleh (Alm) Abah H. Apud yang
                  bertempat di Tajug (mushola) belakang rumah alm Abah H.
                  Apud.<br />
                  Sebagai wujud kecintaan terhadap generasi bangsa yang ingin
                  menimba ilmu agama, maka didirikanlah Ponpes Al-Munawwaroh
                  Sapan, Ponpes ini merupakan Pesantren yang berhaluan
                  Ahlusunnah Wal Jamaah yang selalu mengedepankan nilai-nilai
                  tasammuh (toleran), tawassuth (pertengahan) tawazun
                  (seimbang) dan mu'adallah (adil).<br />
                  Para pengajar yang ada di Ponpes Al Munawwaroh Sapan
                  merupakan para alumni dari beberapa Ponpes yang terkenal di
                  Jawa Barat bahkan ada yang dari Al Azhar Mesir.
                </p>
              </Col>
              <Col xs={12} md={6} className="d-flex justify-content-center">
                <Image
                  src={historyImage}
                  fluid
                  className="history-image"
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-leadership py-5">
          <Container>
            <h2 className="section-title text-center">Jajaran Kepemimpinan</h2>
            <Row className="text-center">
              <Col xs={12} sm={4} className="mb-4 mb-sm-0">
                <Image
                  src={pimpinan}
                  roundedCircle
                  fluid
                  className="leadership-image"
                />
                <div className="mt-3">
                  <h4 className="leadership-title">Pimpinan Yayasan</h4>
                  <p className="leadership-name">H. DADAN RAMDANI, S.Ag., M.Pd</p>
                </div>
              </Col>
              <Col xs={12} sm={4} className="mb-4 mb-sm-0">
                <Image
                  src={ibura}
                  roundedCircle
                  fluid
                  className="leadership-image"
                />
                <div className="mt-3">
                  <h4 className="leadership-title">Kepala Sekolah RA</h4>
                  <p className="leadership-name">Iim Fatimah S.Ag., S.Pd.</p>
                </div>
              </Col>
              <Col xs={12} sm={4} className="mb-4 mb-sm-0">
                <Image
                  src={smp}
                  roundedCircle
                  fluid
                  className="leadership-image"
                />
                <div className="mt-3">
                  <h4 className="leadership-title">Kepala Sekolah SMP</h4>
                  <p className="leadership-name">Febi Febriana S.Pt., M.Pd</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-programs py-5">
          <Container>
            <Row className="text-center">
              <Col xs={12} sm={4} className="mb-4 mb-sm-0">
                <Card className="program-card mx-auto">
                  <Card.Img variant="top" src={books} className="card-image" />
                  <Card.Body>
                    <Card.Title className="card-title">Pondok Pesantren</Card.Title>
                    <Card.Text className="card-text">
                      Pondok Pesantren Al-Munawwaroh Sapan menerapkan kurikulum Nasional Dinas
                      Pendidikan dan kurikulum Salafiyah (Pembelajaran Kitab Kuning dan
                      Tahfidzul Qur'an) serta bermanhaj Akidah Ahlus Sunnah Wal Jama'ah
                      An-Nahdiyyah.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={4} className="mb-4 mb-sm-0">
                <Card className="program-card mx-auto">
                  <Card.Img variant="top" src={books} className="card-image" />
                  <Card.Body>
                    <Card.Title className="card-title">Raudhatul Athfal</Card.Title>
                    <Card.Text className="card-text">
                      Raudhatul Athfal Al-Munawwaroh menjadi salah satu jalur pendidikan formal usia dini yang menyelenggarakan program pendidikan dengan ke-khasan agama islam, agar anak dapat menanamkan jiwa agama dari sejak dini.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={4} className="mb-4 mb-sm-0">
                <Card className="program-card mx-auto">
                  <Card.Img variant="top" src={books} className="card-image" />
                  <Card.Body>
                    <Card.Title className="card-title">Sekolah Menengah Pertama</Card.Title>
                    <Card.Text className="card-text">
                      Lorem Ipsum
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="text-center mt-4">
              <Col>
              <Link to={"/visiMisi"}>
                <h4>Pelajari Selanjutnya</h4>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <FootNote />
    </>
  );
}

export default Home;
