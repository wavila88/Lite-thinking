// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { deleteArticle } from "../repository/inventaryRepo";
import { ARTICLE_REMOVED } from "../utils/constants";
import { ResponseString, UserToReturn } from "../utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseString>
) {
  console.log(req.body);
  try {
    await deleteArticle(req.body.id);
    res.status(200).json({
      response: ARTICLE_REMOVED,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      response: JSON.stringify(error),
    });
  }
}
