import Image from "next/image";
import Header from "./components/Header";
import Layout from "./components/layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>Welcome to the home page!</p>
    </Layout>
  );
}
