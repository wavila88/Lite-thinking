import bcrypt from 'bcryptjs';

export const encrypt = async (text:string)=> {
  const hash = await bcrypt.hash(text, 10)
  return hash;

};

export const compare = async (text: string, hashPasword:string ) => {
  return await bcrypt.compare(text,hashPasword);
};