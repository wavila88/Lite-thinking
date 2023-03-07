// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { loginQuery } from './repository/loginRepo'
import { INVALID_CREDENTIALS } from './utils/constants';
import { ResponseString, UserToReturn } from './utils/types';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserToReturn | ResponseString>
) {
  console.log(req.body);
  try {
    const user= await loginQuery(req.body)
    console.log(`return user ${JSON.stringify(user)}`);
    
    if(user.email){
     return res.status(200).json({ 
       email: user.email,
       rol: user.rol_id
       });
    } else{
      return res.status(401).json({
        response: INVALID_CREDENTIALS
       });
    }
  } catch (error) {
    return res.status(500).json({
      response: JSON.stringify(error)
     });
  }
 
}
