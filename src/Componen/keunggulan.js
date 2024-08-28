import React from "react";
import NavigationBar from "./navbar";
import FootNote from "./footnote";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../Style/keunggulan.css";
import keunggulanImg1 from "../Assets/icon-picture.jpg"; 
import keunggulanImg2 from "../Assets/open-book.png"; 
import keunggulanImg3 from "../Assets/open-book.png"; 

const keunggulanData = [
    {
        id: 1,
        title: "Kitab Kuning",
        description: "Para santri akan belajar kitab kuning seperti jurummiah, akhlaq lil banin, safina hingga tijan",
        imgSrc: keunggulanImg1
    },
    {
        id: 2,
        title: "Tahfidz",
        description: "Tentu juga para santri diharapkan menjadi lulusan yang hafal Al-qur'an",
        imgSrc: keunggulanImg2
    },
    {
        id: 3,
        title: "Bahasa",
        description: "Bahasa merupakan gerbang keilmuan. dan tentu santri yang akan lulus diharapkan menguasai bahasa, terutama bahasa arab.",
        imgSrc: keunggulanImg3
    }
];

const Keunggulan = () => {
    return (
        <>
            <NavigationBar />
            <div>
                <header className="keunggulan-header">
                    <h2 className="keunggulan-title">Keunggulan Pondok Pesantren</h2>
                </header>
                <Container>
                    {keunggulanData.map((item) => (
                        <div key={item.id} className="keunggulan-section">
                            <Row>
                                <Col md={6}>
                                    <div className="keunggulan-item">
                                        <Image src={item.imgSrc} fluid />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="keunggulan-item">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </Container>
            </div>
            <FootNote />
        </>
    );
};

export default Keunggulan;
