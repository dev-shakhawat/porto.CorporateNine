import React from "react";
import ArticleCard from "./ArticleCard";


import blog1 from "../../assets/blog-1.jpg"
import blog2 from "../../assets/blog-2.jpg"
import blog3 from "../../assets/blog-3.jpg"

function BlogGrid() {
  const articles = [
    {
      id: 1,
      imageUrl: blog1,
      category: "LOREM IPSUM DOLOR SIT",
      title: "Lorem ipsum dolor sit amet, consectetur",
      description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
    },
    {
      id: 2,
      imageUrl: blog2,
      category: "LOREM IPSUM DOLOR SIT",
      title: "Lorem ipsum dolor si, consectetur",
      description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
    },
    {
      id: 3,
      imageUrl: blog3,
      category: "LOREM IPSUM DOLOR SIT",
      title: "Lorem ipsum dolor sit amet, consectetur",
      description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
    },
  ];

  return (
    <section className="py-25">
      <div className="flex gap-6 justify-center items-start px-3 py-0 mx-auto my-0 w-full max-w-[1140px] max-md:flex-wrap max-md:justify-center max-sm:flex-col max-sm:items-center">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            imageUrl={article.imageUrl}
            category={article.category}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </section>
  );
}

export default BlogGrid;
