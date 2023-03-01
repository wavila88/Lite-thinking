import { LoginForm } from "@/utils/types";
import connect from "../sql/connect";


export const loginQuery = async (info: LoginForm) => {
 const data = await connect(`
  SELECT 
	u.user_id, 
	u.full_name, 
	u.email,
	r.name as rolName 
FROM USERS u
	inner join ROLES r on u.rol_id = r.rol_id 
where u.email = '${info.email}'
	and u.password = '${info.password}';
  `);
  console.log(`Query result from login ${JSON.stringify(data)}`);
};