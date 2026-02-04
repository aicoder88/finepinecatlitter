import { ImageResponse } from "next/og";

export const runtime = "edge";

// Generate once and cache for 1 day (reduces ISR writes)
export const revalidate = 86400;

export const alt = "Fine Pine Cat Litter - Natural Pine-Based Odor Control";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #2D5A3D 0%, #1E3D29 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Pine tree pattern background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 80,
          }}
        >
          {"🌲".repeat(20)}
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              background: "#E8F0E8",
              color: "#2D5A3D",
              padding: "8px 24px",
              borderRadius: "20px",
              fontSize: 18,
              fontWeight: 600,
              marginBottom: 30,
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Natural & Sustainable
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#FDF8F0",
              marginBottom: 20,
              lineHeight: 1.1,
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <span>Fine Pine</span>
            <span style={{ fontSize: 60 }}>🌲</span>
            <span>Cat Litter</span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 28,
              color: "#E8F0E8",
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Natural pine-based odor control with the fresh scent of the forest
          </div>

          {/* Features */}
          <div
            style={{
              display: "flex",
              gap: 40,
              marginTop: 40,
              fontSize: 20,
              color: "#FDF8F0",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>✓</span>
              <span>Eco-Friendly</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>✓</span>
              <span>Superior Odor Control</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>✓</span>
              <span>Biodegradable</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 16,
            color: "#E8F0E8",
            opacity: 0.8,
          }}
        >
          finepinecatlitter.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
