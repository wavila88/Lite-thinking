// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createEnterprise } from './service/enterpriseService';
import { ENTERPRISE_CREATED } from './utils/constants';
import { ResponseString, UserToReturn } from './utils/types';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserToReturn | ResponseString>
) {
  console.log(req.body);
  try {
   await createEnterprise(req.body);
  
      res.status(200).json({ 
       response: ENTERPRISE_CREATED
       });
  

  } catch (error) {
    res.status(500).json({
      response: JSON.stringify(error)
     });
  }
 
}