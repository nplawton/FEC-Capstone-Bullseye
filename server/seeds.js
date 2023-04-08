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
    host: '127.0.0.1',
    database: 'bullseye',
    password: 'bullseye',
    port: 5432,
  });


async function seeds() {
    await pool.query(`INSERT INTO accounts (user_name, password, admin, email) VALUES 
        ('TargetMom', 'password1', false, 'targetmom@target.com'), 
        ('CameraPhreak', 'password2', false, 'photodragon@yahoo.com'),
        ('GarretAdam', 'password3', false, 'membersonly@rolledsleeves.com'),
        ('WillPhitkin', 'password4', false, 'intheblank@chatgpt.com'),  
        ('JavShuKevDav', 'password5', true, 'prodevelopers@software.com')`, (err, data)=>{
        if (err){
            console.log('Accounts Seed failed');
        } else {
            console.log('Accounts Seed Successful');
            // console.log(data);
        }
    });

    await pool.query(`INSERT INTO products (name, price, description, highlights, dimensions, weight, choking, view, lens, data, megapixels, screen_size, battery, warranty, TCIN, UPC, origin) VALUES 
        ('Nikon D7500 DX-Format DSLR Camera (Body Only, Black)', 1299.95, '4.1 inches (H) x 5.3 inches (W) x 2.9 inches (D)', null, '4.1 inches (H) x 5.3 inches (W) x 2.9 inches (D)', 2.65, true, 'Optical', 'Nikon F-Mount Lenses', 0, 20.9, 3.2, true, null, 84158520, 018208015818, 'Made in the USA or imported'), 
        ('Nikon Z 50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z50 DX-Format Mirrorless Camera Body w/ NIKKOR Z DX 16-50mm lens', 996.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z fc DX-Format Mirrorless Digital Camera (Body Only)', 956.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 30 DX-Format Mirrorless Camera Body', 656.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z fc DX-Format Mirrorless Digital Camera Body w/ NIKKOR Z 28mm lens', 1196.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 5 Mirrorless Digital Camera Body Only Bundle', 1449.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 7II Mirrorless Digital Camera (Body Only)', 2996.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 5 FX-Format Mirrorless Camera Body', 1296.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 6II FX-Format Mirrorless Camera Body w/ NIKKOR Z 24-70mm lens', 2596.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 30 Mirrorless with Z DX 16-50mm VR and NIKKOR Z 50-250mm lenses', 1193.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 30 Mirrorless with Z DX 16-50mm VR and NIKKOR Z 50-250mm lenses', 1149.00, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 30 Mirrorless Camera Body w/ NIKKOR Z DX 16-50mm lens', 806.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 30 Mirrorless with Z DX 16-50mm VR and NIKKOR Z DX 50-250mm lenses', 1046.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z5 Mirrorless Camera w/ 64GB and Accessory Bundle', 1309.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 9 Mirrorless Digital Camera (Body Only)', 5496.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Canon EOS Rebel SL3 DSLR Camera with EF-S 18-55mm f/4-5.6 lens', 749.00, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Canon EOS Rebel T8i DSLR Camera with 18-55mm lens', 949.00, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Canon EOS 90D DSLR Camera with EF-S18-135mm f/3.5-5.6 lens', 1599.00, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Canon EOS 5D Mark IV DSLR Camera with EF 24-105mm f/4L IS II lens', 1249.00, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Pentax K-70 DSLR Camera with 18-135mm Lens (Black)', 766.00, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Pentax K-70 DSLR with SMC DA 18-55mm f/3.5-5.6 AL WR Lens (Black)', 646.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Canon EOS 6D Mark II DSLR Camera (Body Only)', 1399.00, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Panasonic LUMIX ZS200 20MP 4K Digital Camera (Black) with 32GB SD Card', 599.99, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Canon EOS RP Mirrorless Digital Camera with 24-105mm f/4-7.1 STM lens', 1299.00, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Canon EOS Rebel SL3 DSLR Camera with EF-S 18-55mm f/4-5.6 IS ST lens', 749.00, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Canon EOS M50 Mark II Mirrorless Camera with EF-M 15-45mm f/3.5-6.3 lens', 699.99, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 6II FX-Format Mirrorless Camera Body w/ NIKKOR Z 24-70mm lens', 2596.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Sony Alpha a7II Mirrorless Digital Camera with 28-70mm Lens and 64GB SD Card', 1598.00, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z5 Mirrorless Camera with 64GB and Accessory Bundle', 1309.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Sony Cybershot RX10 IV Digital Camera', 1698.00, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 30 Mirrorless with Z DX 16-50mm VR and NIKKOR Z DX 50-250mm lenses', 1046.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Olympus Tough TG-6 Digital Camera (Black)', 499.99, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Nikon Z 5 FX-Format Mirrorless Camera Body', 1296.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
        ('Canon EOS M200 Content Creator Kit, Mirrorless 4k Vlogging Camera with EF-M 15-45mm Lens', 649.99, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null)`, (err, data)=>{
        if (err){
            console.log('Products Seed failed');
            console.log(err);
        } else {
            console.log('Products Seed Successful');
            // console.log(data);
        }

        pool.query(`INSERT INTO reviews (review, stars, date, title, helpful, account_id, product_id) VALUES 
            ('I bought this camera a couple of weeks ago and haven''t put it down since! The body is lightweight but sturdy and has a good feel in my hands. The price point is a little higher than I initially wanted to spend but I really do think it is worth it in the long run. Wish I could give it 10 stars!', 5, '12-Dec-2021', 'This camera ROCKS!!!', 3, 1, 1), 
            ('I''ve been looking for a solid camera without breaking the bank and I think this one fit the bill. Main reason for 4 stars and not 5 is because I wish it had a few more features for the price point, and I really think they could''ve at least given a cheap starter lens for how much you''re paying for it. Other than that, great camera!', 4, '19-Mar-2022', 'Solid, well built camera', 1, 3, 1),
            ('Don''t get me wrong, this camera is a really solid camera. I''ve used many different types and brands throughout the years, and I just think that, for the money, there are some better options out there for you. If you''re just a die-hard Nikon fan, this will definitely scratch the itch, but I think you can do better if you''re on a budget (or just don''t want to spend this kind of money on one). Maybe not for beginners at least, but if you''re at an intermediate level, this is still a good choice.', 4, '12-Jan-2023', 'Great camera, better options for price.', 5, 2, 1),  
            ('The camera is okay I guess. Felt kinda clunky to me. Gonna keep testing it and probably update this review later.', 3, '26-Feb-2023', 'Pretty good camera.', 0, 5, 1)`, (err, data)=>{
            if (err){
                console.log('Reviews Seed failed');
                console.log(err);
            } else {
                console.log('Reviews Seed Successful');
                // console.log(data);
            }
        });

        pool.query(`INSERT INTO questions (question, answer, date_question, date_answer, helpful, report, account_id, product_id) VALUES 
            ('Does this come with any extra battery packs?', 'Unfortunately no, it only comes with one battery and a charger.', '17-Nov-2022', '20-Nov-2022', 16, false, 4, 1), 
            ('How do I connect a lens to this camera?', null, '17-Jan-2023', null, 0, false, 5, 1)`, (err, data)=>{
            if (err){
                console.log('Questions Seed failed');
            } else {
                console.log('Questions Seed Successful');
                // console.log(data);
            }
        });
    });
}

seeds();




// pool.end();