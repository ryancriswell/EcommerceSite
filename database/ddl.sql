Create Table Administrator (
  user_id int primary key,
  last_accessed datetime,
  foreign key (user_id) references user(user_id)
    on delete cascade
    on update restrict
);

Create Table AdministratorPermission (
  user_id int,
  permission varchar(16) not null, -- Text representation of some permission in the backend
  primary key(user_id, permission),
  foreign key (user_id) references administrator(user_id)
    on delete cascade
    on update restrict
);

Create Table User (
  user_id int primary key AUTO_INCREMENT,
  username varchar(16) not null,
  register_date datetime default CURRENT_TIMESTAMP,
  salt int not null,
  password_hash char(64) not null -- SHA256?
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
Create Table UserOrder (
  order_id int primary key AUTO_INCREMENT,
  user_id int,
  foreign key (user_id) references user(user_id)
    on delete set null -- We want to remember previous orders even if the user deletes their account.
    on update cascade
);
Create Table OrderItem (
  order_id int,
  item_id int,
  quantity int UNSIGNED not null,
  total_price decimal(7, 2) not null,
  primary key (order_id, item_id),
  foreign key (order_id) references UserOrder(order_id)
    on delete cascade
    on update cascade,
  foreign key (item_id) references item(item_id)
    on delete set null -- Remember deleted items on orders
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

Create Table LogEntry (
  description text not null,
  username varchar(16), 
  order_id int, 
  item_id int, 
  log_date datetime default CURRENT_TIMESTAMP,
  foreign key (username) references User(username)
	on delete set null
	on update cascade,
  foreign key (order_id) references UserOrder (order_id)
	on delete set null
	on update cascade,
  foreign key (item_id) references Item (item_id)
	on delete set null
	on update cascade
)
Create Table SessionCookie (
  username varchar(16), [ref: > User.username]
  cookie char(64),
  expires datetime,

  primary key (username, cookie),
  foreign key (username) references User (username)
	on delete cascade
	on update cascade
)