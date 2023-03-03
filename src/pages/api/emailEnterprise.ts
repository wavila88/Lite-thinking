import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmailWithEnterprises } from './service/enterpriseService';
import { EMAIL_REPORT_SENT } from './utils/constants';
import { ResponseString } from './utils/types';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseString>
) {
  console.log(req.body);
  try {
    await sendEmailWithEnterprises();

      res.status(200).json({ 
       response: EMAIL_REPORT_SENT
       });
  

  } catch (error) {

    console.log(error);
    
    res.status(500).json({
      response: JSON.stringify(error)
     });
  }
 
}