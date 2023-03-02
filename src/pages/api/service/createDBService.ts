// import Rol from '../models/RolModel';
import Roles from '../models/Roles/RolesModel';
import Users from '../models/Users/UserModel';
import { RolType, UserType } from "../utils/types"

const arrayRol: Array<RolType> = [
  {name: 'Admin'},
  {name: 'External'}
];

const arrayUsers: Array<UserType> = [
  {email:'Josep@gmail.com', password: '1234567',},
  {email: 'external@gmail.oom', password:'4321',}
]


export const createDataBase = async () =>{
  //Roles
  const rolesArray = await Roles.findAll();
  console.log('ARRAY =>'+JSON.stringify(rolesArray));
  console.log('ARRAY lenght =>'+ rolesArray.length);
  if(rolesArray && rolesArray.length === 0){
  arrayRol.forEach((rol:RolType) => {
    Roles.create({
      name: rol.name
    })
  });
  }
  //Users
  const usersArray = await Users.findAll();
  console.log('ARRAY =>'+JSON.stringify(usersArray));
  console.log('ARRAY lenght =>'+ usersArray.length);
  if(usersArray && usersArray.length === 0){
    arrayUsers.forEach((user:UserType) => {
     Users.create(
       { 
         email: user.email,
         password: user.password,
         //rol_id: user.rol_id
       }
     )
  })
  }
}

