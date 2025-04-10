import pg from "pg";
import dotenv from "dotenv";
import {client} from "pg";
dotenv.config();
const database = new pg.Client({

    connectionString:process.env.DATABASE_URL,ssl:{
    rejectUnauthorized:false,},
});

database.connect((err)=>{
    if(err){
        console.log(`Database connection failed:`,err);
    }else{
        console.log(`Connected to the database`);
    }
});

export default database;
