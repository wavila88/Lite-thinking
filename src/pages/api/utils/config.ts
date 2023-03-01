const config = {
  // sqlConection: {
  //   user: process.env.SQL_USER || 'admin',
  //   password:process.env.SQL_PASSWORD || '12345678',
  //   server: process.env.SQL_SERVER || "litethinking1.c3xymb4w4f8t.us-east-1.rds.amazonaws.com",
  //   database: process.env.SQL_DATABASE || 'LITE_THINKING',
  // },
  sqlConection: {
    user: process.env.SQL_USER || 'sa',
    password:process.env.SQL_PASSWORD || '1234',
    server: process.env.SQL_SERVER || "localhost",
    database: process.env.SQL_DATABASE || 'LITE_THINKING',
  }

}

export default config;