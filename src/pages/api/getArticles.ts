// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next'
import { getArticles } from './repository/inventaryRepo';

import { EnterpriseType, ResponseString } from './utils/types';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseString | Array<EnterpriseType>>
) {
  console.log(req.body);

    try {
        res.status(200).json(await getArticles(req.body.NIT)); 
      // }
    } catch (error) {
      res.status(500).json({
        response: JSON.stringify(error)
        });
    }
    

}