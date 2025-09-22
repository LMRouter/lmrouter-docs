import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const title = searchParams.get("title") || "LMRouter";
  const description = searchParams.get("description") || "Build AI Applications with Intelligent Routing";
  const type = searchParams.get("type") || "docs";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage: "linear-gradient(to bottom right, #0a0a0a, #1a1a1a)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Border decoration */}
          <div
            style={{
              position: "absolute",
              inset: "40px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
            }}
          />

          {/* Corner decorations */}
          <svg
            style={{
              position: "absolute",
              top: "30px",
              left: "30px",
              width: "20px",
              height: "20px",
            }}
            fill="white"
            opacity="0.4"
          >
            <path d="M0,10 L10,10 L10,0" stroke="white" strokeWidth="2" fill="none" />
          </svg>
          <svg
            style={{
              position: "absolute",
              top: "30px",
              right: "30px",
              width: "20px",
              height: "20px",
            }}
            fill="white"
            opacity="0.4"
          >
            <path d="M10,10 L10,0 L20,0" stroke="white" strokeWidth="2" fill="none" />
          </svg>
          <svg
            style={{
              position: "absolute",
              bottom: "30px",
              left: "30px",
              width: "20px",
              height: "20px",
            }}
            fill="white"
            opacity="0.4"
          >
            <path d="M0,10 L10,10 L10,20" stroke="white" strokeWidth="2" fill="none" />
          </svg>
          <svg
            style={{
              position: "absolute",
              bottom: "30px",
              right: "30px",
              width: "20px",
              height: "20px",
            }}
            fill="white"
            opacity="0.4"
          >
            <path d="M10,10 L10,20 L20,20" stroke="white" strokeWidth="2" fill="none" />
          </svg>

          {/* Main content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
              maxWidth: "900px",
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="6" cy="19" r="3"/>
                <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
                <circle cx="18" cy="5" r="3"/>
              </svg>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "white",
                  letterSpacing: "-0.02em",
                }}
              >
                LMRouter
              </div>
            </div>

            {/* Type badge */}
            {type && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "rgba(255, 255, 255, 0.7)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                {type}
              </div>
            )}

            {/* Title */}
            <h1
              style={{
                fontSize: title.length > 30 ? "56px" : "64px",
                fontWeight: "700",
                color: "white",
                textAlign: "center",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
                margin: "0",
              }}
            >
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p
                style={{
                  fontSize: "20px",
                  color: "rgba(255, 255, 255, 0.6)",
                  textAlign: "center",
                  margin: "0",
                  maxWidth: "700px",
                  lineHeight: "1.5",
                }}
              >
                {description}
              </p>
            )}
          </div>

          {/* Footer */}
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            github.com/himself65/lmrouter
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}