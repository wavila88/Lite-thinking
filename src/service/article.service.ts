import { ArticleTypeForm } from "@/utils/types";
import { getNit } from "@/utils/utils";
import  Router  from "next/router";
import { makeRequest } from "./https";



export const getArticles = async () => {
  return await makeRequest({
    url: "/api/getArticles",
    method: 'POST',
    body:{
      NIT: getNit()
    }
  });
};

export const createArticle = async (article: ArticleTypeForm, NIT: number| false) => {
  await makeRequest({
    method: "POST",
    body: {
      name: article.name.element,
      numberProducts: article.numberProducts.element,
      enterpriseNIT: NIT
    },
    url: "/api/createArticle",
  });
  Router.push("/articles");
};

export const removeArticle = async (id:number) => {
  return await makeRequest({
    method:'POST',
    body:{
      id
    },
    url:'/api/articles/deleteArticle'
  })
} 