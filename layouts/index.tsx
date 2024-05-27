import { useRouter } from "next/router";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const slug = router.query.subject;

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ border: "1px solid blue", width: "20%" }}>
        <p>Sidebar text</p>
      </div>

      <div
        style={{ display: "flex", border: "1px solid green", width: "100%" }}
      >
        {slug ? null : (
          <div
            style={{ height: "100vh", width: "20%", border: "1px solid pink" }}
          >
            <p>classes</p>
          </div>
        )}
        <div style={{ width: "100%" }}>{children}</div>
      </div>
    </div>
  );
};
