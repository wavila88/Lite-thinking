// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ResponseString } from './utils/types';


export default async function healtcheck(
  req: NextApiRequest,
  res: NextApiResponse<ResponseString >
) {
    res.status(200).json({response:'healt check success aws'}); 
    
  }