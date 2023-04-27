const { Pool } = require('pg');
const faker = require('faker');
const Faker = require('faker/lib');

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'bullseye',
    password: 'bullseye',
    port: 5432,
});
  

const SEED_PRODUCT_ROWS = 10000;
const SEED_REVIEW_ROWS = 500;
const SEED_QUESTION_ROWS = 500;
const SEED_USERS_COUNT = 45;

const seedProducts = async () => {
    const newProducts = [];

    for (let i = 0; i < SEED_PRODUCT_ROWS; i++){
        newProducts.push({
            productname: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: faker.image.imageUrl(),
        });
    }

    try {
        await pool.query('DROP TABLE IF EXISTS products CASCADE');
        await pool.query(`CREATE TABLE products ( 
                      prod_id SERIAL PRIMARY KEY,
                      productname TEXT NOT NULL,
                      price DECIMAL(10,2) NOT NULL,
                      description TEXT NOT NULL,
                      image TEXT NOT NULL)`);
        // await pool.query('CREATE SEQUENCE IF NOT EXISTS products_prod_id_seq');
        // await pool.query('ALTER SEQUENCE products_prod_id_seq RESTART WITH 1');
        const queryString = `INSERT INTO products (productname, price, description, image) VALUES ($1, $2, $3, $4) RETURNING *`;

        for (let i = 0; i < SEED_PRODUCT_ROWS; i++){
            console.log(`seeded ${i} products!`);
            const {productname, price, description, image} = newProducts[i];
            await pool.query(queryString, [productname, price, description, image]);
        }
        console.log('Products seeded succesfully!');
    }catch(err){
        console.error('Error seeding products:', err);
    }
};

const seedReviews = async () => {
    const userReviews = [];
    const startDate = new Date(2010, 0, 1); // January 1st, 2012
    const endDate = new Date(2023, 3, 30); // April 30th, 2023
    for (let i = 0; i < SEED_REVIEW_ROWS; i++) {
        userReviews.push({
            user_name: faker.name.findName(),
            exp: faker.lorem.paragraph(),
            stars: faker.datatype.number({min: 1, max: 5}),
            date: faker.date.between(startDate, endDate),
            title: faker.lorem.sentence(5),
            helpful: faker.datatype.boolean(),

        });
    }
    try {
        await pool.query('DROP TABLE IF EXISTS reviews CASCADE');
        await pool.query(`CREATE TABLE reviews ( 
                user_id serial PRIMARY KEY,
                user_name text,
                exp text,
                stars int,
                date date,
                title varchar(100),
                helpful boolean)`);
        const queryString =
            'INSERT INTO reviews (user_name, exp, stars, date, title, helpful) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';

            for (let i = 0; i < SEED_REVIEW_ROWS; i++){
                console.log(`seeded ${i} reviews!`);
                const {user_name, exp, stars, date, title, helpful} = userReviews[i];
                await pool.query(queryString, [user_name, exp, stars, date, title, helpful]);
            }
            console.log('Reviews seeded succesfully!');
        }catch(err){
            console.error('Error seeding reviews:', err);
        }
};

const seedAccounts = async () => {
    const userAccounts = [];
    const startDate = new Date(2010, 0, 1); // January 1st, 2012
    const endDate = new Date(2023, 3, 30); // April 30th, 2023
    for (let i = 0; i < SEED_USERS_COUNT; i++) {
        userAccounts.push({
            user_name: faker.name.findName(),
            password: faker.internet.password(),
            admin: faker.datatype.boolean(),
            email: faker.internet.email(),
        });
    }
    try {
        await pool.query('DROP TABLE IF EXISTS accounts CASCADE');
        await pool.query(`CREATE TABLE accounts ( 
                user_id serial PRIMARY KEY,
                user_name text,
                password text,
                admin boolean,
                email text)`);
        const queryString =
            'INSERT INTO accounts (user_name, password, admin, email) VALUES ($1, $2, $3, $4) RETURNING *';

            for (let i = 0; i < SEED_USERS_COUNT; i++){
                console.log(`seeded ${i} accounts!`);
                const {user_name, password, admin, email} = userAccounts[i];
                await pool.query(queryString, [user_name, password, admin, email]);
            }
            console.log('Accounts seeded succesfully!');
        }catch(err){
            console.error('Error seeding reviews:', err);
        }
};

const seedQuestions = async () => {
    const newQuestions = [];
    const startDate = new Date(2010, 0, 1); // January 1st, 2012
    const endDate = new Date(2023, 3, 30); // April 30th, 2023
    for (let i = 0; i < SEED_QUESTION_ROWS; i++) {
        newQuestions.push({
            askQuestion: faker.lorem.paragraph(),
            answer: faker.lorem.paragraph(),
            qDate: faker.date.between(startDate, endDate),
            aDate: faker.date.between(startDate, endDate),
            qHelpful: faker.datatype.boolean(),
            report: faker.datatype.boolean(),
        });
    }
    try {
        await pool.query('DROP TABLE IF EXISTS questions CASCADE');
        await pool.query(`CREATE TABLE questions ( 
                question_id serial PRIMARY KEY,
                askQuestion text,
                answer text,
                qDate date,
                aDate date,
                report boolean)`);
        const queryString =
            'INSERT INTO questions (askQuestion, answer, qDate, aDate, report) VALUES ($1, $2, $3, $4, $5) RETURNING *';

            for (let i = 0; i < SEED_QUESTION_ROWS; i++){
                console.log(`seeded ${i} questions!`);
                const {askQuestion, answer, qDate, aDate, report} = newQuestions[i];
                await pool.query(queryString, [askQuestion, answer, qDate, aDate, report]);
            }
            console.log('Questions seeded succesfully!');
        }catch(err){
            console.error('Error seeding reviews:', err);
        }
};

seedProducts().then(() => seedReviews().then(() => seedAccounts().then(() => seedQuestions().then(() => pool.end()))));
