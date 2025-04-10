import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const database = new pg.Client({
    user:process.env.DB_USER,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT||5433
    connectionString:process.env.DATABASE_URL,ssl:{
    rejectUnauthorized:false}
});

database.connect((err)=>{
    if(err){
        console.log(`Database connection failed:`,err);
    }else{
        console.log(`Connected to the database`);
    }
});

export default database;
