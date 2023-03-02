import { LoginForm } from "@/utils/types";
import Users from "../models/Users/UserModel";
// import connect from "../sql/connect";
import { createDataBase} from "./createDBService";


export const loginQuery = async (info: LoginForm) => {

  // await createDB();
  createDataBase();
 
  // console.log(`Query result from login ${JSON.stringify(data)}`);
};