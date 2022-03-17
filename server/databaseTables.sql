 DROP TABLE if exists energisers;

CREATE TABLE energisers (
  id       SERIAL PRIMARY KEY,
  title    VARCHAR(200) NOT NULL,
description     VARCHAR(120) NOT NULL,
 link  URL,
playing_instructions TEXT,
 likes           integer NOT NULL DEFAULT'0',   
 dislikes  integer NOT NULL DEFAULT'0',  
);
 
