import { Layout } from "@/layouts";
import Router from "next/router";

export default function Subject() {
  return (
    <Layout>
      <p
        onClick={() => Router.back()}
        style={{ cursor: "pointer", fontSize: "18px" }}
      >
        Go back
      </p>
      <h1>Hello unique subject</h1>
    </Layout>
  );
}
