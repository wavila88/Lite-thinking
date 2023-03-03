import { LoginForm } from "@/utils/types";
import Users from "../models/Users/UserModel";
import { compare, decrypt, encrypt, test } from "../utils/encryptFile";
// import connect from "../sql/connect";
import { createDataBase} from "./createDBService";


export const loginQuery = async (info: LoginForm) => {
  // FindUser
  const query = { email: info.email};
  const users =await Users.findAll({ where: query });
  const user =getUser(users,info.password);
  console.log(`user => ${JSON.stringify(user)}`);
  
};

const getUser = (users: any, password: string) => {
 return users.find((user:any) => 
  compare(user.password,password) 
  )
}