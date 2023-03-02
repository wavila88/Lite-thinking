import type { NextApiRequest, NextApiResponse } from 'next'
import {createRoles,createUsers} from './service/createDBService';

type Data = {
  response: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  createRoles();
  createUsers();
  res.status(200).json({ response: 'successfull initial load' })
}