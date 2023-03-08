// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createArticles } from './repository/inventaryRepo';
import { ARTICLE_CREATED } from './utils/constants';
import { ResponseString, UserToReturn } from './utils/types';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse< ResponseString>
) {
  console.log(req.body);
  try {
  await createArticles(req.body);
      res.status(200).json({ 
       response: ARTICLE_CREATED
       });
  

  } catch (error) {

    console.log(error);
    
    res.status(500).json({
      response: JSON.stringify(error)
     });
  }
 
}