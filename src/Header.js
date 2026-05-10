import { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaHeart,
  FaUser,
  FaShoppingBag,
} from "react-icons/fa";

export default function Header({ isTop }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["HOME", "SHOP", "LOOKBOOK", "ABOUT", "SERVICE"];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#fff",
        borderBottom: "1px solid #eee",
        zIndex: 9999,
      }}
    >
      {/* TOP HEADER */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "12px 20px",
          position: "relative",
        }}
      >
        {/* LEFT */}
        <FaBars
          style={{ fontSize: 20, cursor: "pointer" }}
          onClick={() => setMenuOpen((v) => !v)}
        />

        {/* CENTER LOGO */}
        <div style={{ fontWeight: "bold", letterSpacing: "6px" }}>
          BLEN
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "18px",
          }}
        >
          <FaSearch />
          <FaHeart />
          <FaUser />
          <FaShoppingBag />
        </div>
      </div>

      {/* =========================
          🔥 SCROLL DOWN 상태
      ========================= */}
      {!isTop && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            padding: "10px 0",
            borderTop: "1px solid #eee",
          }}
        >
          {menuItems.map((item) => (
            <div
              key={item}
              style={{
                fontSize: "14px",
                letterSpacing: "2px",
                cursor: "pointer",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* =========================
          🔥 SCROLL TOP (ZARA FULL SCREEN)
      ========================= */}
      {menuOpen && isTop && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            zIndex: 2000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? "auto" : "none",

           transform: menuOpen ? "scale(1)" : "scale(1.05)",
           transition: "0.25s ease",
          }}
        >
          {/* MENU */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              fontSize: "18px",
              letterSpacing: "3px",
            }}
          >
            {menuItems.map((item) => (
              <div
                key={item}
                onClick={() => setMenuOpen(false)}
                style={{ cursor: "pointer" }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* CLOSE */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "24px",
              fontSize: "26px",
              cursor: "pointer",
            }}
          >
            ✕
          </div>
        </div>
      )}
    </header>
  );
}
