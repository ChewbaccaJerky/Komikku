# Database Schema

# `users`
| column name | data type | details |
|---|---|---|
|id|integer|not null, primary key, unique|
|username|string|not null, unique, indexed|
|password_digest|string|not null|
|session_token|string|not null, indexed|
|email|string|not null, unique|
|first_name|string|not null|
|last_name|string|not null|

# `reviews`
| column name| data type | details |
|---|---|---|
|id|integer|primary key, not null, unique|
|manga_id|integer|not null|
|chapter_id|integer|not null|
|body|text|not null|

# `favorites`
|column name|data type|details|
|---|---|---|
|id||integer|not null, primary key, unique|
|manga_id|integer|not null|
|user_id|integer|not null|