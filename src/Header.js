
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
      {/* HEADER */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          padding: "12px 20px",
        }}
      >
        {/* LEFT */}
        <FaBars
          style={{ fontSize: 20, cursor: "pointer" }}
          onClick={() => setMenuOpen(true)}
        />

        {/* LOGO */}
        <div
          style={{
            fontWeight: "bold",
            letterSpacing: "6px",
            textAlign: "center",
          }}
        >
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

      {/* SCROLL MENU */}
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

      {/* SIDE MENU */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: menuOpen ? 0 : "-260px",
          width: "260px",
          height: "100vh",
          background: "#fff",
          zIndex: 3000,
          transition: "0.3s ease",
          boxShadow: "2px 0 10px rgba(0,0,0,0.08)",
          padding: "80px 30px",
        }}
      >
        {/* CLOSE */}
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          ✕
        </div>

        {/* MENU LIST */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {menuItems.map((item) => (
            <div
              key={item}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "15px",
                letterSpacing: "2px",
                cursor: "pointer",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 2000,
          }}
        />
      )}
    </header>
  );
}

