import React, { useEffect, useState } from "react";

const TITLE_FONT = '"Cormorant Garamond", Georgia, serif';

function Sidebar({ onNavigate, isMobile }) {
  return (
    <aside style={sidebarStyle(isMobile)}>
      <button
        style={sidebarLinkStyle}
        onClick={() => onNavigate("old-summer-palace-info")}
      >
        Info
      </button>
      <button
        style={sidebarLinkStyle}
        onClick={() => onNavigate("old-summer-palace-why")}
      >
        Why included
      </button>
      <button
        style={sidebarLinkStyle}
        onClick={() => onNavigate("old-summer-palace-remains")}
      >
        What remains
      </button>
      <button
        style={sidebarLinkStyle}
        onClick={() => onNavigate("old-summer-palace-participatory")}
      >
        Participatory archive
      </button>
    </aside>
  );
}

function OldSummerPalaceParticipatoryArchive({ onBackHome, onNavigate }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div style={pageStyle}>
      <div style={topBarStyle(isMobile)}>
        <button style={backButtonStyle} onClick={onBackHome}>
          ← Back
        </button>
      </div>

      <div style={heroStyle(isMobile)}>
        <p style={eyebrowStyle}>AFTER RUINS / CASE STUDY</p>
        <h1 style={titleStyle(isMobile)}>Old Summer Palace</h1>
        <p style={locationStyle(isMobile)}>Participatory archive</p>
      </div>

      <div style={contentWrapStyle(isMobile)}>
        <Sidebar onNavigate={onNavigate} isMobile={isMobile} />

        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle(isMobile)}>Participatory archive</h2>

            <p style={bodyParagraphStyle(isMobile)}>
              If Yuanmingyuan survives today through fragments, then any archive
              built around it must also accept fragmentation as method rather
              than failure. This participatory archive is designed as a space
              where viewers can upload memories, research files, photographs,
              videos, audio, and reflections that do not claim to replace the
              destroyed site, but instead extend the record of how it is seen,
              argued over, mourned, reconstructed, and politically remembered.
              That is especially important for Yuanmingyuan because its afterlife
              has always depended on mediation: imperial paintings, copperplate
              engravings, plans, auction records, photographs of ruins,
              nationalist narratives, and contemporary digital reconstructions.
              A public-facing archive allows these heterogeneous materials to be
              understood not as noise around the site, but as part of its
              ongoing historical production.
            </p>

            <p style={bodyParagraphStyle(isMobile)}>
              In the memory interface, each upload restores one fragment of a
              larger image world. This logic is especially appropriate for the
              Old Summer Palace, whose architectural totality can no longer be
              accessed directly and is instead approached through partial
              documents and surviving remains. The archive therefore does not
              promise full recovery. It offers something more honest: a living
              record built from many contributors, where scholarship, visual
              evidence, dispersed objects, and personal acts of remembrance can
              accumulate around a site that was both materially destroyed and
              symbolically enlarged by that destruction. In a later stage, this
              archive can also open into a dedicated Yuanmingyuan memory
              environment, just as the Golestan section develops from uploaded
              fragments into spatial reconstruction.
            </p>

            <div style={ctaRowStyle(isMobile)}>
              <button
                style={primaryButtonStyle(isMobile)}
                onClick={() => onNavigate("old-summer-palace-memory")}
              >
                Enter Memory Archive
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f7f3ec",
  color: "#222",
  fontFamily: "Georgia, serif",
};

const topBarStyle = (isMobile) => ({
  maxWidth: "1320px",
  margin: "0 auto",
  padding: isMobile ? "16px 16px 0" : "22px 24px 0",
});

const backButtonStyle = {
  border: "1px solid #3a3328",
  background: "transparent",
  color: "#3a3328",
  padding: "8px 14px",
  cursor: "pointer",
  fontSize: "14px",
  fontFamily: "Georgia, serif",
};

const heroStyle = (isMobile) => ({
  maxWidth: "1320px",
  margin: "0 auto",
  padding: isMobile ? "14px 16px 24px" : "18px 24px 34px",
  textAlign: "center",
  borderBottom: "1px solid rgba(0,0,0,0.08)",
});

const eyebrowStyle = {
  fontSize: "14px",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#8c93a3",
  marginBottom: "8px",
  fontFamily: TITLE_FONT,
};

const titleStyle = (isMobile) => ({
  fontSize: isMobile ? "44px" : "60px",
  lineHeight: 1.02,
  margin: "0 0 6px",
  color: "#1e1e1e",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
});

const locationStyle = (isMobile) => ({
  fontSize: isMobile ? "18px" : "26px",
  margin: 0,
  color: "#5f5f5f",
  fontFamily: TITLE_FONT,
});

const contentWrapStyle = (isMobile) => ({
  maxWidth: "1320px",
  margin: "0 auto",
  padding: isMobile ? "24px 16px 48px" : "38px 24px 70px",
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "220px minmax(0, 1fr)",
  gap: isMobile ? "24px" : "44px",
  alignItems: "start",
});

const sidebarStyle = (isMobile) => ({
  position: isMobile ? "static" : "sticky",
  top: isMobile ? "auto" : "24px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  paddingTop: isMobile ? "0" : "10px",
  paddingBottom: isMobile ? "8px" : "0",
});

const sidebarLinkStyle = {
  color: "#3a3328",
  textDecoration: "none",
  fontSize: "15px",
  lineHeight: 1.4,
  background: "transparent",
  border: "none",
  textAlign: "left",
  padding: 0,
  cursor: "pointer",
  fontFamily: "Georgia, serif",
};

const mainStyle = {
  minWidth: 0,
};

const sectionStyle = {
  marginBottom: "54px",
};

const sectionTitleStyle = (isMobile) => ({
  fontSize: isMobile ? "32px" : "42px",
  marginBottom: "20px",
  color: "#1f1f1f",
  textAlign: "left",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
});

const bodyParagraphStyle = (isMobile) => ({
  fontSize: isMobile ? "18px" : "22px",
  lineHeight: isMobile ? 1.75 : 1.9,
  color: "#333",
  margin: "0 0 24px",
  textAlign: "left",
});

const ctaRowStyle = (isMobile) => ({
  marginTop: "26px",
  textAlign: "left",
});

const primaryButtonStyle = (isMobile) => ({
  border: "1px solid #3a3328",
  background: "#3a3328",
  color: "white",
  padding: isMobile ? "12px 18px" : "14px 22px",
  cursor: "pointer",
  fontSize: isMobile ? "16px" : "18px",
  fontFamily: "Georgia, serif",
  width: isMobile ? "100%" : "auto",
  maxWidth: isMobile ? "320px" : "none",
});

export default OldSummerPalaceParticipatoryArchive;