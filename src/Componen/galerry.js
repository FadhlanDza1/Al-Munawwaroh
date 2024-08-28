import React from "react";
import NavigationBar from "./navbar";
import "../Style/galeri.css";
import { Container, Row } from "react-bootstrap";
import gambar1 from "../Assets/Gallery/1.jpg";
import gambar2 from "../Assets/Gallery/2.jpg";
import gambar3 from "../Assets/Gallery/3.jpg";
import gambar4 from "../Assets/Gallery/4.jpg";
import gambar5 from "../Assets/Gallery/5.jpg";
import gambar6 from "../Assets/Gallery/6.jpg";
import gambar7 from "../Assets/Gallery/7.jpg";
import gambar8 from "../Assets/Gallery/8.jpg";
import gambar9 from "../Assets/Gallery/9.jpg";
import gambar10 from "../Assets/Gallery/10.jpg";
import FootNote from "./footnote";

const images = [
    { id: 1, src: gambar1, alt: 'Image 1', size: 'large' },
    { id: 2, src: gambar2, alt: 'Image 2', size: 'large' },
    { id: 3, src: gambar3, alt: 'Image 3', size: 'large' },
    { id: 4, src: gambar4, alt: 'Image 4', size: 'large' },
    { id: 5, src: gambar5, alt: 'Image 5', size: 'large' },
    { id: 6, src: gambar6, alt: 'Image 6', size: 'large' },
    { id: 7, src: gambar7, alt: 'Image 7', size: 'large' },
    { id: 8, src: gambar8, alt: 'Image 8', size: 'large' },
    { id: 9, src: gambar9, alt: 'Image 9', size: 'large' },
    { id: 10, src: gambar10, alt: 'Image 10', size: 'large' }
];

const Gallery = () => {
    return (
        <>
            <NavigationBar />
            <div>
                <header className="gallery-header">
                    <h2 className="gallery-title">Galeri</h2>
                </header>
                <Container className="gallery-container mt-5 mb-5">
                    <Row>
                        {images.map((image) => (
                            <div key={image.id} className={`gallery-item ${image.size}`}>
                                <img src={image.src} alt={image.alt} className="img-fluid" />
                            </div>
                        ))}
                    </Row>
                </Container>
            </div>
            <FootNote />
        </>
    );
};

export default Gallery;
