const { Pool } = require('pg');
const DATABASE_URL = process.env.DATABASE_URL;
const pool = require('./connectDB.js');

// const pool = new Pool({
//     connectionString: DATABASE_URL,
//     ...dbConfig,
// });

pool.query(`DROP TABLE IF EXISTS accounts`, (err, data)=>{
    if (err){
        console.log('Drop Accounts Table failed')
    }
    pool.query(`CREATE TABLE accounts (
        id serial PRIMARY KEY,
        user varchar(50),
        password varchar(100),
        admin boolean NOT NULL,
        email varchar(100))`, (err, data)=>{
        if (err){
            console.log('Create Accounts Table failed');
        } else {
            console.log('Create Accounts Table successful');
        }
    })
})

pool.query(`DROP TABLE IF EXISTS reviews`, (err, data)=>{
    if (err){
        console.log('Drop Reviews Table failed');
    }
    pool.query(`CREATE TABLE reviews (
        id serial PRIMARY KEY,
        review text,
        stars int,
        date date,
        title varchar(100),
        helpful int,
        account_id int,
        product_id int,
        FOREIGN KEY (account_id) REFERENCES account(id) ON UPDATE CASCADE),
        FOREIGN KEY (product_id) REFERENCES product(id) ON UPDATE CASCADE)`, (err, data)=>{
            if (err){
                console.log('Create Reviews Table failed');
            } else {
                console.log('Create Reviews Table successful');
            }
    })
})

pool.query(`DROP TABLE IF EXISTS questions`, (err, data)=>{
    if (err){
        console.log('Drop Question Table failed');
    }
    pool.query(`CREATE TABLE questions (
        id serial PRIMARY KEY,
        question text,
        answer text,
        date_question date,
        date_answer date,
        helpful int,
        report boolean,
        account_id int,
        product_id int,
        FOREIGN KEY (account_id) REFERENCES account(id) ON UPDATE CASCADE),
        FOREIGN KEY (product_id) REFERENCES product(id) ON UPDATE CASCADE)`, (err, data)=>{
            if (err){
                console.log('Create Reviews Table failed');
            } else {
                console.log('Create Reviews Table successful');
            }
    })
})

pool.query(`DROP TABLE IF EXISTS products`, (err, data)=>{
    if (err){
        console.log('Drop Products Table failed');
    }
    pool.query(`CREATE TABLE products (
        id serial PRIMARY KEY,
        name text,
        price numeric(10, 2),
        description text,
        highlights text,
        dimensions text,
        weight numeric(10, 2),
        choking boolean,
        view text,
        lens text,
        data int,
        megapixels numeric(10, 2),
        screen_size numeric(10, 2),
        battery boolean,
        warranty text,
        TCIN int,
        UPC bigint,
        origin text,
        partner boolean,
        shipping text,
        return text)`, (err, data)=>{
            if (err){
                console.log('Create Products Table failed');
            } else {
                console.log('Create Products Table successful');
            }
    })
})


pool.end();