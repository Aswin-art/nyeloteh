import React from "react";
import CardArticle from "./CardArticle";
import Link from "next/link";

const ArticleSection = () => {
  return (
    <>
      <div id="articles" className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary">Artikel Terbaru</h1>
        <Link href={"/"} className="text-primary hover:underline text-md">
          Baca semua
        </Link>
      </div>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 mt-10">
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
      </div>
    </>
  );
};

export default ArticleSection;
