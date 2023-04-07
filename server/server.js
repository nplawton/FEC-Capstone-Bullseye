const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'database',
  password: 'password',
  port: 5432,
});

// Get all accounts
app.get('/accounts', async (req, res) => {
  try {
    const query = 'SELECT * FROM "Accounts"';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get all questions
app.get('/questions', async (req, res) => {
  try {
    const query = 'SELECT * FROM "Questions"';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get all reviews
app.get('/reviews', async (req, res) => {
  try {
    const query = 'SELECT * FROM "Reviews"';
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get all products
app.get('/products', async (req, res) => {
    try {
      const query = 'SELECT * FROM "Products"';
      const result = await pool.query(query);
      res.json(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

// Get one account by ID
app.get('/accounts/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const query = 'SELECT * FROM "Accounts" WHERE id = $1';
      const result = await pool.query(query, [id]);
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'Account not found' });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

// Get one review by ID
app.get('/reviews/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const query = 'SELECT * FROM "Reviews" WHERE id = $1';
      const result = await pool.query(query, [id]);
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'Review not found' });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

// Get one product by ID
app.get('/product/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const query = 'SELECT * FROM "Products" WHERE id = $1';
      const result = await pool.query(query, [id]);
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

  // Get one question by ID
app.get('/question/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const query = 'SELECT * FROM "Questions" WHERE id = $1';
      const result = await pool.query(query, [id]);
      if (result.rows.length === 0) {
        res.status(404).json({ error: 'Question not found' });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  });


// //get all products and reviews
// app.get('/products/:productId/reviews', async (req, res) => {
//     try {
//       const { productId } = req.params;
//       const { rows } = await pool.query(`
//         SELECT * ,
//         FROM "Products" 
//         INNER JOIN "Question" ON "Product".id = "Question"."Product(FK)" 
//         INNER JOIN "Account" ON "Account".id = "Question"."Account(FK)" 
//         INNER JOIN "Reviews" ON "Product".id = "Reviews"."Product(FK)" 
//         WHERE "Products".id = $1
//       `, [productId]);
//       res.json(rows);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   });

// //get one product and reviews
// app.get('/products/:id/reviews', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const query = `
//         SELECT Product.Prod_Name, Product.Price, Reviews.Review, Reviews.Stars, Account.User
//         FROM Reviews
//         INNER JOIN Product
//           ON Reviews.Product_id = Product.id
//         INNER JOIN Account
//           ON Reviews.Account_id = Account.id
//         WHERE Product.id = $1
//       `;
//       const result = await db.query(query, [id]);
//       res.json(result.rows);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
