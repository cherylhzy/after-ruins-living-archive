import React from "react";

const TITLE_FONT = '"Cormorant Garamond", Georgia, serif';

function Sidebar({ onNavigate }) {
  return (
    <aside style={sidebarStyle}>
      <button style={sidebarLinkStyle} onClick={() => onNavigate("golestan-info")}>
        Info
      </button>
      <button style={sidebarLinkStyle} onClick={() => onNavigate("golestan-why")}>
        Why included
      </button>
      <button style={sidebarLinkStyle} onClick={() => onNavigate("golestan-remains")}>
        What remains
      </button>
      <button
        style={sidebarLinkStyle}
        onClick={() => onNavigate("golestan-participatory")}
      >
        Participatory archive
      </button>
    </aside>
  );
}

function GolestanWhatRemains({ onBackHome, onNavigate }) {
  return (
    <div style={pageStyle}>
      <div style={topBarStyle}>
        <button style={backButtonStyle} onClick={onBackHome}>
          ← Back
        </button>
      </div>

      <div style={heroStyle}>
        <p style={eyebrowStyle}>AFTER RUINS / CASE STUDY</p>
        <h1 style={titleStyle}>Golestan Palace</h1>
        <p style={locationStyle}>What remains</p>
      </div>

      <div style={contentWrapStyle}>
        <Sidebar onNavigate={onNavigate} />

        <main style={mainStyle}>
          <section style={sectionStyle}>
            <h2 style={sectionTitleStyle}>What remains</h2>

            <p style={bodyParagraphStyle}>
              What remains at Golestan Palace is not only a standing architectural
              ensemble, but a layered system of material, visual, and archival
              survival. UNESCO describes the palace as a walled complex built
              around gardens, pools, and planted areas, with 19th-century
              ornament among its most characteristic features. Travel and
              heritage guides also consistently identify the Mirror Hall,
              Brilliant Hall, Salam Hall, Marble Throne Veranda, Diamond Hall,
              Badgir Building, and other named spaces as among the surviving
              parts of the complex. <sup>[1][2][3]</sup>
            </p>

            <div style={singleImageWrapStyle}>
              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-damage-exterior-01.jpg"
                  alt="Golestan Palace damage exterior"
                  style={wideImageStyle}
                />
                <p style={detailCaptionStyle}>Damage, exterior.</p>
              </div>
            </div>

            <p style={bodyParagraphStyle}>
              At the same time, what remains after damage is different from what
              remained before it. Hyperallergic and Al Jazeera both describe
              shattered windows, broken mirrored surfaces, damaged ceilings, and
              debris inside historic halls after the 2026 strikes. These reports
              do not erase the palace’s architectural presence; instead, they
              make its vulnerability newly visible. What remains is therefore
              both the monument and its scarred material condition. <sup>[4][5]</sup>
            </p>

            <div style={detailGridStyle}>
              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-damage-interior-01.jpg"
                  alt="Golestan Palace damage interior"
                  style={detailImageStyle}
                />
                <p style={detailCaptionStyle}>Damage, interior.</p>
              </div>

              <div style={detailCardStyle}>
                <img
                  src="/images/golestan/golestan-damage-detail-remains.jpg"
                  alt="Golestan Palace damage detail"
                  style={detailImageStyle}
                />
                <p style={detailCaptionStyle}>Damage detail / remains.</p>
              </div>
            </div>
          </section>

          <section style={referencesSectionStyle}>
            <h3 style={referencesTitleStyle}>References</h3>
            <ol style={referencesListStyle}>
              <li>UNESCO World Heritage Centre, “Golestan Palace.”</li>
              <li>SurfIran, “Golestan Palace Guide.”</li>
              <li>Iran Safar, “Golestan Palace in Tehran.”</li>
              <li>
                Hyperallergic, “Israel-US Strikes Damage Tehran’s Historic
                Golestan Palace.”
              </li>
              <li>
                Al Jazeera, “‘Permanent scar’: Iran minister on US-Israeli
                attacks on monuments.”
              </li>
            </ol>
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

const topBarStyle = {
  maxWidth: "1320px",
  margin: "0 auto",
  padding: "22px 24px 0",
};

const backButtonStyle = {
  border: "1px solid #3a3328",
  background: "transparent",
  color: "#3a3328",
  padding: "8px 14px",
  cursor: "pointer",
  fontSize: "14px",
  fontFamily: "Georgia, serif",
};

const heroStyle = {
  maxWidth: "1320px",
  margin: "0 auto",
  padding: "18px 24px 34px",
  textAlign: "center",
  borderBottom: "1px solid rgba(0,0,0,0.08)",
};

const eyebrowStyle = {
  fontSize: "14px",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "#8c93a3",
  marginBottom: "8px",
  fontFamily: TITLE_FONT,
};

const titleStyle = {
  fontSize: "60px",
  lineHeight: 1.02,
  margin: "0 0 6px",
  color: "#1e1e1e",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
};

const locationStyle = {
  fontSize: "26px",
  margin: 0,
  color: "#5f5f5f",
  fontFamily: TITLE_FONT,
};

const contentWrapStyle = {
  maxWidth: "1320px",
  margin: "0 auto",
  padding: "38px 24px 70px",
  display: "grid",
  gridTemplateColumns: "220px minmax(0, 1fr)",
  gap: "44px",
  alignItems: "start",
};

const sidebarStyle = {
  position: "sticky",
  top: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  paddingTop: "10px",
};

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

const sectionTitleStyle = {
  fontSize: "42px",
  marginBottom: "20px",
  color: "#1f1f1f",
  textAlign: "left",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
};

const bodyParagraphStyle = {
  fontSize: "22px",
  lineHeight: 1.9,
  color: "#333",
  margin: "0 0 24px",
  textAlign: "left",
};

const singleImageWrapStyle = {
  marginBottom: "24px",
};

const detailGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "20px",
};

const detailCardStyle = {
  background: "rgba(255,255,255,0.64)",
  border: "1px solid rgba(0,0,0,0.08)",
  padding: "12px",
};

const wideImageStyle = {
  width: "100%",
  height: "380px",
  objectFit: "cover",
  display: "block",
};

const detailImageStyle = {
  width: "100%",
  height: "320px",
  objectFit: "cover",
  display: "block",
};

const detailCaptionStyle = {
  fontSize: "14px",
  lineHeight: 1.5,
  color: "#6e6e6e",
  marginTop: "10px",
  textAlign: "left",
};

const referencesSectionStyle = {
  borderTop: "1px solid rgba(0,0,0,0.08)",
  paddingTop: "24px",
};

const referencesTitleStyle = {
  fontSize: "24px",
  marginBottom: "14px",
  textAlign: "left",
  fontFamily: TITLE_FONT,
  fontWeight: 600,
};

const referencesListStyle = {
  paddingLeft: "24px",
  fontSize: "16px",
  lineHeight: 1.8,
  color: "#444",
  textAlign: "left",
};

export default GolestanWhatRemains;