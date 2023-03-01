import sql from 'mssql';
import config from '../utils/config';

const poolConnection ={
  user: config.sqlConection.user,
  password: config.sqlConection.password,
  server: config.sqlConection.server,
  database: config.sqlConection.database,
  options: {encrypt: false}
}

const connect = async  (query: string) => {

  try {
    await sql.connect(poolConnection);
    return await sql.query(query);  
  } catch (error) {
    console.log(error);
    
  }
//  const connection = await sql.connect(poolConnection, function (err: any) {
    
//     if (err){
//       console.log(err);
//       throw new Error(err)
//     } 
  
//     // create Request object
//     var request = new sql.Request();
       
//     // query to the database and get the records
//     request.query(query, function (err: any, recordset: any) {
     
        
//         if (err) console.log(err)
  
//         // send records as a response
      
//        return recordset;
        
//     });
//   });
  
  
  
}

export default connect;
