import React from "react";
import NavigationBar from "./navbar";
import FootNote from "./footnote";
import { Container, Col, Row, Image } from "react-bootstrap";
import "../Style/ra.css";
import OIP from "../Assets/OIP.jpg";
import struktur from "../Assets/Screenshot 2024-08-27 091854.png"

function VisiMisi() {
  return (
    <>
      <NavigationBar />
      <div>
        <header className="pg-header">
          <h2 className="pg-title">Visi Misi</h2>
        </header>
        <div className="bg-pg">
          <Container>
            <Row>
              <Col className="mt-4">
                <h2>Sejarah Singkat</h2>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col className="tumbnail mb-4 mb-md-0">
                <div className="text-align">
                  <p>
                    Pada awal tahun 2000-an, kebutuhan akan pendidikan anak usia dini yang berkualitas dan berbasis agama Islam semakin dirasakan di berbagai daerah di Indonesia. Masyarakat di Desa Cempaka, Kabupaten Bogor, mulai merasa bahwa pendidikan dini yang menggabungkan pembelajaran agama dan keterampilan dasar sangat penting untuk perkembangan anak-anak mereka.
                  </p>
                  <p>
                    Melihat kebutuhan ini, sekelompok tokoh masyarakat dan pendidik yang peduli memutuskan untuk mendirikan sebuah lembaga pendidikan yang khusus melayani anak-anak usia dini. Mereka mulai merancang konsep sekolah yang tidak hanya fokus pada pendidikan akademis, tetapi juga pada pembentukan karakter dan iman anak-anak. Kurikulum yang dirancang mencakup pengenalan huruf hijaiyah, doa-doa sehari-hari, serta cerita-cerita nabi, sambil tetap mengajarkan keterampilan dasar seperti membaca, menulis, dan berhitung dengan metode yang sesuai dengan usia dini.
                  </p>
                  <p>
                    Pada tahun 2004, tim pendiri mulai mengumpulkan dana melalui sumbangan masyarakat dan berbagai pihak. Dana tersebut digunakan untuk membangun gedung sekolah, yang terdiri dari ruang kelas, area bermain, dan ruang administrasi. Dengan segala persiapan yang matang, pada Januari 2005, mereka meresmikan pendirian RA Al-Hikmah, nama yang dipilih dengan harapan memberikan hikmah dan kebaikan bagi anak-anak yang belajar di sana.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mt-5" xs={6} md={5}>
                <Image
                  src={OIP}
                  fluid
                  style={{
                    maxHeight: "700px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  roundedCircle
                />
              </Col>
              <Col>
                <Row className="mt-5">
                  <h2>Visi</h2>
                </Row>
                <Row>
                  <div>
                    <p>
                      Terwujudnya lembaga pendidikan yang SANTUN (Sehat, Agamis, Nyaman, Taat, Unggul dan Nyaman) serta mampu bersaing di era globalisasi.
                    </p>
                  </div>
                </Row>
                <Row>
                  <h2>Misi</h2>
                </Row>
                <Row>
                  <div>
                    <ul>
                      <li>Menjadikan santri berakhlaqul karimah yang diaplikasikan dalam kehidupan sehari-hari serta dapat berbakti kepada orangtua, taat beragama, berbangsa dan bernegara.</li>
                      <li>Membangun santri yang berjiwa mandiri, inovatif, dan kreatif.</li>
                      <li>Membentuk santri yang memahami dan mengamalkan keilmuannya dalam rangka kemaslahatan dan kemakmuran bersama.</li>
                      <li>Membentuk santri yang tangguh dan disiplin.</li>
                    </ul>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <div className="pg-section">
                  <h2 className="pg-section-title">Struktur</h2>
                  <Image
                    src={struktur} 
                    fluid
                    style={{
                      maxHeight: "500px",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FootNote />
    </>
  );
}

export default VisiMisi;
