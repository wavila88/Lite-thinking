import type { NextApiRequest, NextApiResponse } from 'next'
import {createDataBase} from './service/createDBService';

type Data = {
  response: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  createDataBase();
  res.status(200).json({ response: 'successfull initial load' })
}