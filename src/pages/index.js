import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AdmissionForm from "@/components/AdmissionForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
     <>
     <Hero/>
     <About/>
     <AdmissionForm/>
     </>
    </Layout>
  );
}
