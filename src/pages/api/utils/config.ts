const config = {
  sqlConection: {
    user: process.env.NEXT_PUBLIC_SQL_USER || 'sa',
    password:process.env.NEXT_PUBLIC_SQL_PASSWORD || '1234',
    server: process.env.NEXT_PUBLIC_SQL_SERVER || "localhost",
    database: process.env.NEXT_PUBLIC_SQL_DATABASE || 'LITE_THINKING',
  }

}

export default config;