# Sample State

```
{
    entities: {
        /******** Manga ************/
        manga: {
            123432: {
                id: "123432"
                title: "Black Clover",
                alias: "black-clover",
                category: [
                    "Action", 
                    "Adventure", 
                    "Drama", 
                    "Sci-fi", 
                    "Supernatural"
                ],
                latest: 1416420134.0,
                status: "On Going",
                img: "ad/ad8dbe2c909de99899f1015a360f75e3ced31023672d6ff0d2b7547c.jpg",
                hits: 1124543
            },
            ...
        }, 
        /******** Manga End ************/
        chapters: {
            1: {
                pg: 1,
                img: 'https:cloudnary/img124.jpg'
            },
            2...
        }
        /******** Review ************/
        review: {
            123432: {
                id: 123432,
                manga_id: 21342,
                body: "I love that manga!"
            },
            ...
        },
        /******** Review End ************/

        /******** UI ************/
        ui: {
            loading: false
        },
        /******** UI End ************/

        /******** Session ************/
        session: {
            current_user: {
                id: 1244,
                username: 'demo',
                img_url: '...img.jpg'
            },
            current_manga: {
                id: 12343
            }
        }
        /******** Session End ************/
    }
}
```