import React from "react";
import "./App.css";
import { FaTwitter, FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      
      {/* HEADER */}
      <header className="header">
        <h1>BLEN</h1>
      </header>
      <div style={{ display: "grid", gridAutoFlow: "column", gap: "16px", overflowX: "auto" }}>

      {/* BODY - IMAGE GRID */}
      <section className="grid">
        <div className="grid-item img1"></div>
        <div className="grid-item img2"></div>
        <div className="grid-item img3"></div>
        <div className="grid-item img4"></div>
      </section>

      {/* BRAND DESCRIPTION */}
      <section className="description">
        <h2>About BLEN</h2>
        <p>
          BLEN은 현대적인 감각과 절제된 디자인을 기반으로 한 패션 브랜드입니다.  
          티셔츠와 데님을 중심으로 20-30대를 위한 세련된 스타일을 제안하며,  
          고급스러운 소재와 디테일로 일상의 품격을 높입니다.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-info">
          <p>jjApr 주소 : 서울시 금천구 가산동 스타벨리 1010호</p>
          <p>연락처 : 010-0000-0000</p>
        </div>

        <div className="social">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTiktok /></a>
        </div>
      </footer>

    </div>
    </div>
  );
}

export default App;
