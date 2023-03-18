CREATE DATABASE `ecommerce_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
Create Table User (
  user_id int primary key AUTO_INCREMENT,
  username varchar(16) not null,
  register_date datetime default CURRENT_TIMESTAMP,
  salt int ,
  password_hash char(64) ,  -- SHA256?
  email varchar(45)
);

INSERT INTO user (user_id , username, register_date, salt, password_hash,email) VALUES
(1, 'dom', CURDATE(), 0 ,'a', "dom@email.com"),
(2, 'fuzzyzilla', CURDATE(),0,'a', "fuzzy@email.com"),
(3, 'logan', CURDATE(),0,'a', "logan@email.com"),
(4, 'yaboi', CURDATE(),0,'a', "yaboi@email.com"),
(5, 'ryan', CURDATE(),0,'a', "ryan@email.com"),
(user_id, CURDATE(), null, null, "admin@adminmail.com");

Create Table Administrator (
  user_id int primary key,
  last_accessed datetime,
  foreign key (user_id) references user(user_id)
    on delete cascade
    on update restrict
);
insert into administrator (user_id, last_accessed) values
(6, CURDATE());

Create Table AdministratorPermission (
  user_id int,
  permission varchar(16) not null, -- Text representation of some permission in the backend
  primary key(user_id, permission),
  foreign key (user_id) references administrator(user_id)
    on delete cascade
    on update restrict
);


Create Table CustomerPayment (
  user_id int,
  card_number char(16) not null,
  full_name varchar(64), -- nullable
  security_code char(3) not null,
  primary key(user_id, card_number), -- One card/many user and one user/many card relationships allowed
  foreign key (user_id) references User (user_id)
    on delete cascade
    on update cascade
);
Create Table CustomerShipping (
  user_id int,
  state char(2) not null,
  addr_line_1 varchar(64) not null,
  addr_line_2 varchar(64), -- nullable
  zip char(5) not null,
  primary key (user_id, state, addr_line_1, addr_line_2, zip),
  foreign key (user_id) references User(user_id)
    on delete cascade
    on update cascade
);
Create Table Item (
  item_id int primary key AUTO_INCREMENT,
  item_name varchar(50),
  item_description text,
  price decimal(6,2), -- 2 decimal points, 6 digits ($9999.99 coffee anyone?)
  in_stock int UNSIGNED,
  CHECK(price >= 0.0)
);
INSERT INTO Item (item_id , item_name, item_description, price, in_stock) VALUES
(1, 'Aztec Bean', 'Cool beans', 10.99 , 10),
(2, 'Brazil Bean', 'reallyt cool bean', 10.99, 10),
(3, 'Mocha Bag','Chocolate beans', 10.99, 10),
(4, 'Colombia Bean','Beans from Colombia', 10.99, 10),
(5, 'Eagle Bean','Caramel Beans' , 10.99, 10),
(6, 'Decaf Beans', 'No Buzz Beans', 10.99, 10);



Create Table UserOrder (
  order_id int primary key AUTO_INCREMENT,
  user_id int,
  foreign key (user_id) references user(user_id)
    on delete set null -- We want to remember previous orders even if the user deletes their account.
    on update cascade
);
Create Table RecurringOrder (
  order_id int,
  recur_period_days int not null,
  first_date date not null,
  final_date date, -- nullable - perpetual subscription
  foreign key (order_id) references UserOrder(order_id)
    on delete restrict -- Orders should not be deleted while ongoing! Cancel subscription first.
    on update cascade
);