# Schema Information

## users

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null
photo_url       | string    |
zip_code        | string    | not null
type            | string    | not null
about           | text      |
looking_for     | string    | not null


## questions

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | text      | not null


## question_options

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_id     | integer   | not null, foreign key, indexed
description     | text      | not null


## question_responses

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed,
question_id     | integer   | not null, foreign key, indexed, unique[user_id]
answer          | integer   | not null, foreign key (from question_options), indexed
acceptable      | integer   | not null, foreign key (from question_options), indexed
importance      | integer   | not null


## messages

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
conversation_id      | integer   | not null, foreign key, indexed
sender_id       | integer   | not null, foreign key, indexed
receiver_id     | integer   | not null, foreign key, indexed
content         | text      | not null
timestamp       | date      | not null


## conversations

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed
other_user_id   | integer   | not null, foreign key, indexed


## likes

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
liker_id        | integer   | not null, foreign key, indexed, unique[liked_user_id]
liked_id        | integer   | not null, foreign key, indexed, unique[liker_user_id]
