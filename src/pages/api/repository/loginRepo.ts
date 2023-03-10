import { LoginForm } from "@/utils/types";
import Roles from "../models/Roles/RolesModel";
import Users from "../models/Users/UserModel";
import sequelize from "../sql/connect";
import { decryptData } from "../utils/encryptFile";



export const loginQuery = async (info: LoginForm) => {
  // FindUser
  const query = { email: info.email};
  const users =await Users.findAll({ where: query });
    console.log(`USERS => ${JSON.stringify(users)}`);
    

  const user =getUser(users,info.password);
  console.log(`user => ${JSON.stringify(user)}`);
  //TODO auth with JWT
  return user;
};

const getUser = (users: any, password: string) => {
  console.log('uSERS =>'+JSON.stringify(users));
  console.log('password =>'+password);
  
 return users.find((user:any) => (
    decryptData(user.password) === password
  ))
}