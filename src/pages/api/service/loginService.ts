import { LoginForm } from "@/utils/types";
import Users from "../models/Users/UserModel";
import { compare } from "../utils/encryptFile";



export const loginQuery = async (info: LoginForm) => {
  // FindUser
  const query = { email: info.email};
  const users =await Users.findAll({ where: query });
  const user =getUser(users,info.password);
  console.log(`user => ${JSON.stringify(user)}`);
  //TODO auth with JWT
  return user;
};

const getUser = (users: any, password: string) => {
 return users.find((user:any) => 
  compare(user.password,password) 
  )
}