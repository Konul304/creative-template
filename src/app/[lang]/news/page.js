"use client";
import React from "react";
//= Page components
import Loading from "../../../components/Common/Loader";
import Navbar from "../../../components/Common/Navbar";
import PageHeader from "../../../components/Headers/PageHeader";
import BlogGrid from "../../../components/Blogs/BlogGrid";
import Footer from "../../../components/Common/Footer";
import { usePathname } from "next/navigation";

const NewsPage = () => {
  const pathname = usePathname();
  const language = pathname?.split("/")[1];
  return (
    <>
      <Loading />
      <Navbar />
      <PageHeader
        title={
          language === "en"
            ? "NEWS & INSIGHTS"
            : language === "az"
            ? "XƏBƏRLƏR VƏ DƏRİNLİKLƏR"
            : "НОВОСТИ И ИНСАЙТЫ"
        }
      />
      <BlogGrid />
      <Footer />
    </>
  );
};

export default NewsPage;
