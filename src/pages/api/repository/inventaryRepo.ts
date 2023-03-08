import Inventary from "../models/Inventary/InventaryModel"
import { ArticleCreateType } from "../utils/types";


export const getArticles = async (NIT: number) => await Inventary.findAll({attributes:['id', 'name', 'numberProducts'],  where: { enterpriseNIT: NIT }});



export const createArticles = async (article: ArticleCreateType) => {
  await Inventary.create({
        name: article.name,
        numberProducts: article.numberProducts,
        enterpriseNIT: article.enterpriseNIT
      })
};

export const deleteArticle = async (id: number) => {
  await Inventary.destroy({ where: { id } });
}