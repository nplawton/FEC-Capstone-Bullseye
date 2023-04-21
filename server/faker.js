const { Pool } = require('pg');
const faker = require('faker');

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'bullseye',
    password: 'bullseye',
    port: 5432,
  });

const SEED_PRODUCT_ROWS = 1000;

const seedProducts = async () => {
    const products = [];

    for (let i = 0; i < SEED_PRODUCT_ROWS; i++){
        products.push({
            productName: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            image: faker.image.imageURL(),
        });
    }

    try {

        await pool.query('TRUNCATE TABLE products CASCADE');
        await pool.query('ALTER SEQUENCE products_prod_id_seq RESTART WITH 1');
        const queryString = `INSERT INTO products (productName, price, description, image) VALUES ($1, $2, $3, $4) RETURNING *`;

        for (let i = 0; i < SEED_PRODUCT_ROWS; i++){
            console.log(`seeded ${i} products!`);
            const {productName, price, description, image} = products[i];
            await pool.query(queryString, [productName, price, description, image]);
        }
        console.log('Products seeded succesfully!');
    }catch(err){
        console.error('Error seeding products:', err);
    }
};

seedProducts().then(() => pool.end());