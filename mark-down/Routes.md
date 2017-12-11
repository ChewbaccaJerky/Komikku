# Routes

# Backend/API End Points
## users
- `POST api/users`
    - Create users

## session
- `POST api/session`
    - Create new session(Log In)
- `DELETE api/session`
    - Destroy current session(Log Out)

## search
- `GET api/search/:search_params`

## manga
- `GET api/manga/:manga_id`
    - Retrieve a manga's detail information

## chapter
- `GET api/chapter/:chapter_id`
    - Retrieve manga chapter pages
## review
- `POST api/:manga_id/review/`
    - Create review for certain manga
- `GET api/review`
    - Get all reviews
- `GET api/review/:review_id`
    - Retrieve a review
- `DELETE api/review/:review_id`
    - Destroy a review
- `PATCH api/review/:review_id`
    - Change existing review

# Frontend

- `/` - Home Page / Dashboard / Latest
- `/search` - Search Page
- `/manga/:manga_id` - Manga Detail Page
- `/manga/:manga_name/:chapter_id` - Reader
- `/category` - Category Page

