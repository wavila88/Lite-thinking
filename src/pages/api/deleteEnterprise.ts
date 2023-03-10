// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { deleteEnterprise } from "./repository/enterpriseRepo";
import { ENTERPRISE_REMOVED } from "./utils/constants";
import { ResponseString, UserToReturn } from "./utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseString>
) {
  console.log(req.body);
  try {
    await deleteEnterprise(req.body.NIT);
    res.status(200).json({
      response: ENTERPRISE_REMOVED,
    });
  } catch (error) {

    res.status(500).json({
      response: error.message,
    });
  }
}
