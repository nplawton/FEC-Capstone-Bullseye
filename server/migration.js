const { Pool } = require('pg');

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     user: process.env.POSTGRES_USER,
//     host: process.env.POSTGRES_HOST,
//     database: process.env.POSTGRES_DB,
//     password: process.env.POSTGRES_PASSWORD,
//     port: process.env.PORT,
// });

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bullseye',
    password: 'bullseye',
    port: 5432,
  });

async function migration() {
    await pool.query(`DROP TABLE IF EXISTS accounts CASCADE`, (err, data)=>{
        if (err){
            console.log('Drop Accounts Table failed')
        }
        pool.query(`CREATE TABLE accounts (
            id serial PRIMARY KEY,
            user_name varchar(50),
            password varchar(100),
            admin boolean NOT NULL,
            email varchar(100))`, (err, data)=>{
            if (err){
                console.log('Create Accounts Table failed');
                console.log(err);
            } else {
                console.log('Create Accounts Table successful');
            }
        })
    });

    await pool.query(`DROP TABLE IF EXISTS products CASCADE`, (err, data)=>{
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
                account_id int REFERENCES accounts (id) ON DELETE CASCADE,
                product_id int REFERENCES products (id) ON DELETE CASCADE)`, (err, data)=>{
                if (err){
                    console.log('Create Reviews Table failed');
                } else {
                    console.log('Create Reviews Table successful');
                }
            })
        });
        
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
                account_id int REFERENCES accounts (id) ON DELETE CASCADE,
                product_id int REFERENCES products (id) ON DELETE CASCADE)`, (err, data)=>{
                if (err){
                    console.log('Create Questions Table failed');
                } else {
                    console.log('Create Questions Table successful');
                }
            })
        });
    });   
}

migration();









// pool.end();