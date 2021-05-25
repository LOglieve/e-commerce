CREATE TABLE orders(
  id serial unique,
  order_date date,
  total int,
  product_ids integer[],
  user_id int references users(id)
 );

 CREATE TABLE users(
  id serial unique,
  email varchar(64) unique,
  password varchar(32)
);

CREATE TABLE products(
  id serial unique,
  product varchar(124),
  description varchar(255),
  quantity int,
  price int 
);