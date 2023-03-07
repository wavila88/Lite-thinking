import type { NextApiRequest, NextApiResponse } from 'next'
import { sendEmailWithEnterprises } from './repository/enterpriseRepo';
import { EMAIL_REPORT_SENT } from './utils/constants';
import { ResponseString } from './utils/types';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseString>
) {
  try {
    await sendEmailWithEnterprises(req.body);

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