import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

// 이미지
const IMG_MAIN1 = "/blen-main1.jpg";
const IMG_MAIN2 = "/blen-main2.jpg";
const IMG_MAIN3 = "/blen-main3.jpg";
const IMG_MAIN4 = "/blen-main4.jpg";

// 상품
const products = [
  { id: 1, name: "BLEN Black Front", price: 39000, img: IMG_MAIN1 },
  { id: 2, name: "BLEN White Logo", price: 49000, img: IMG_MAIN2 },
  { id: 3, name: "BLEN Back Mood", price: 42000, img: IMG_MAIN3 },
  { id: 4, name: "BLEN Basic", price: 39000, img: IMG_MAIN4 },
];

function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: "80px",
          letterSpacing: "20px",
          fontWeight: "700",
        }}
      >
        BLEN
      </h1>

      <p style={{ marginTop: "20px", fontSize: "14px", color: "#777" }}>
        MINIMAL FASHION BRAND
      </p>
    </section>
  );
}

// 🔥 상품 리스트
function ProductList({setModalImg}) {
  //const navigate = useNavigate();
  
  return (
    <section style={{ maxWidth: "1200px", margin: "20px auto", padding: "0 20px" }}>
      <h2 style={{ fontSize: "24px" }}>BEST SELLER</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {products.map((p) => (
          <div key={p.id} onClick={() => navigate(`/product/${p.id}`)}>
           
            <img src={p.img}  alt=""
            style={{ width: "200px", cursor: "pointer" }} 
            
           />
  
            <div style={{ marginTop: "10px", fontSize: "14px" }}>
              {p.name}
            </div>

            <div style={{ fontSize: "13px", color: "#777" }}>
                 ₩{p.price.toLocaleString()}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

// 🔥 메인 앱
export default function MainApp() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  const [showStory, setShowStory] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const handleClick = () => {
    setShowStory(true);
  };

  useEffect(() => {
  const handleScroll = () => {
    setIsTop(window.scrollY === 0);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <Hero />
    <ProductList />
    {/* 🔥 배경 (메뉴 열렸을 때) */}
    {menuOpen && (
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.3)",
          zIndex: 2000
        }}
      />
    )}
  
    {modalImg && (
    <div
    onClick={() => setModalImg(null)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,  
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 20000
    }}
    >
    <img
      src={modalImg}
      style={{
        maxWidth: "90%",   
        maxHeight: "90vh",
        objectFit: "contain",
        background: "#fff",
        padding: "10px"
      }}
    alt="" />
  </div>
  )}


    {/* 🔥 사이드바 */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: menuOpen ? "0" : "-340px",
          width: "340px",
          height: "100%",
          background: "#fff",
          boxShadow: "2px 0 20px rgba(0,0,0,0.15)",
          zIndex: 2000,
          transition: "left 0.3s ease",
          padding: "40px 30px",
          overflowY: "auto"
        }}
      >
        <div onClick={() => setMenuOpen(false)}
         style={{ fontSize: "20px", marginBottom: "30px", cursor: "pointer" }}
        >
       ✕
      </div>  
      

      {/* 🔥 메뉴 리스트 */}
  <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
    <span style={{ cursor: "pointer" }}>LOGIN</span>
    <span style={{ cursor: "pointer" }}>SHOP</span>
    <span style={{ cursor: "pointer" }}>LOOKBOOK</span>
    <span style={{ cursor: "pointer" }}>OUR STORY</span>
    <span style={{ cursor: "pointer" }}>CUSTOMER SERVICE</span>
    <span style={{ cursor: "pointer" }}>WISH LIST</span>
  </div>

  {/* 검색 */}
  <div style={{ marginTop: "40px" }}>
    <input
      placeholder="SEARCH"
      style={{
        width: "100%",
        padding: "10px",
        border: "1px solid #ddd"
      }}
    />
  </div>
</div>  
  
      {/* 🔹 ABOUT */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "280px auto",
          padding: "0 20px"
        }}
      >   
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "60px"
          }}
        >
          <h2 style={{ marginBottom: "20px", fontSize: "24px", letterSpacing: "6px", fontWeight: "700" }}>
            BLEN(블렌) 브랜드 스토리
          </h2>
          <p style={{ maxWidth: "600px", fontSize: "14px", lineHeight: "1.8", color: "#555", fontStyle: "italic" }}>
            BLEN은 'Blending'에서 유래된 감성 브랜드 입니다.
            물이 자연스럽게 번지듯, 경계 없이 스며드는 흐름과 조화를 담아냅니다.
            서로 다른 색이 섞이며 새로운 분위기를 만들어내듯,
            BLEN은 다양한 감정과 스타일이 어우러지는 순간을 표현합니다.
          </p>
        </div>
      </section>

      
    </>
  );
}


