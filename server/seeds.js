const { Pool } = require('pg');
const DATABASE_URL = process.env.DATABASE_URL;
const pool = require('./connectDB.js');

// const pool = new Pool({
//     connectionString: DATABASE_URL,
//     ...dbConfig,
// });

pool.query(`INSERT INTO accounts (user, password, admin, email) VALUES 
    ('TargetMom', 'password1', false, 'targetmom@target.com'), 
    ('CameraPhreak', 'password2', false, 'photodragon@yahoo.com'),
    ('GarretAdam', 'password3', false, 'membersonly@rolledsleeves.com'),
    ('WillPhitkin', 'password4', false, 'intheblank@chatgpt.com'),  
    ('JavShuKevDav', 'password5', true, 'prodevelopers@software.com')`, (err, data)=>{
    if (err){
        console.log('Accounts Seed failed');
    } else {
        console.log('Accounts Seed Successful');
        console.log(data);
    }
})


pool.query(`INSERT INTO reviews (review, stars, date, title, helpful, account_id, product_id) VALUES 
    ('I bought this camera a couple of weeks ago and haven't put it down since! The body is lightweight but sturdy and has a good feel in my hands. The price point is a little higher than I initially wanted to spend but I really do think it is worth it in the long run. Wish I could give it 10 stars!', 5 , '12-Dec-2021', 'This camera ROCKS!!!', 3, 1, 1), 
    ('I've been looking for a solid camera without breaking the bank and I think this one fit the bill. Main reason for 4 stars and not 5 is because I wish it had a few more features for the price point, and I really think they could've at least given a cheap starter lens for how much you're paying for it. Other than that, great camera!', 4, '19-Mar-2022', 'Solid, well built camera', 1, 3, 1),
    ('Don't get me wrong, this camera is a really solid camera. I've used many different types and brands throughout the years, and I just think that, for the money, there are some better options out there for you. If you're just a die-hard Nikon fan, this will definitely scratch the itch, but I think you can do better if you're on a budget (or just don't want to spend this kind of money on one). Maybe not for beginners at least, but if you're at an intermediate level, this is still a good choice.', 4, '12-Jan-2023', 'Great camera, better options for price.', 5, 2, 1),  
    ('The camera is okay I guess. Felt kinda clunky to me. Gonna keep testing it and probably update this review later.', 3, '26-Feb-2023', 'Pretty good camera.', 0, 5, 1)`, (err, data)=>{
    if (err){
        console.log('Reviews Seed failed');
    } else {
        console.log('Reviews Seed Successful');
        console.log(data);
    }
})


pool.query(`INSERT INTO questions (question, answer, date_question, date_answer, helpful, report, account_id, product_id) VALUES 
    ('Does this come with any extra battery packs?', 'Unfortunately no, it only comes with one battery and a charger.', '17-Nov-2022', '20-Nov-2022', 16, false, 4, 1), 
    ('How do I connect a lens to this camera?', null, '17-Jan-2023', null, 0, false, 5, 1)`, (err, data)=>{
    if (err){
        console.log('Questions Seed failed');
    } else {
        console.log('Questions Seed Successful');
        console.log(data);
    }
})


pool.query(`INSERT INTO products (name, price, description, highlights, dimensions, weight, choking, view, lens, data, megapixels, screen_size, battery, warranty, TCIN, UPC, origin) VALUES 
    ('Nikon D7500 DX-Format DSLR Camera (Body Only, Black)', 1299.95, '4.1 inches (H) x 5.3 inches (W) x 2.9 inches (D)', ['Class leading image quality, ISO range, image processing and metering equivalent to the award-winning D500', 'Large 3.2 922K dot, tilting LCD screen with touch functionality', '51-point AF system with 15 cross-type sensors and group-area AF paired with up to 8 fps continuous shooting capability', '4K Ultra HD and 1080p Full HD video with stereo sound, power aperture control, auto ISO, 4K UHD Time-Lapse and more'], '4.1 inches (H) x 5.3 inches (W) x 2.9 inches (D)', 2.65, true, 'Optical', 'Nikon F-Mount Lenses', 0, 20.9, 3.2, true, 'No Applicable Warranty. To obtain a copy of the manufacturer's or supplier's warranty for this item prior to purchasing the item, please call Target Guest Services at 1-800-591-3869', 84158520, 018208015818, 'Made in the USA or imported'), 
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
    ('Nikon Z50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
    ('Nikon Z50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
    ('Nikon Z50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
    ('Nikon Z50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
    ('Nikon Z50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
    ('Nikon Z50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
    ('Nikon Z50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
    ('Nikon Z50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
    ('Nikon Z50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
    ('Nikon Z50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
    ('Nikon Z50 DX-Format Mirrorless Camera w/ NIKKOR Z DX 16-50mm lens', 1249.95, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null)`, (err, data)=>{
    if (err){
        console.log('Products Seed failed');
    } else {
        console.log('Products Seed Successful');
        console.log(data);
    }
})


pool.end();