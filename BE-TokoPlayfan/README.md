# Backend TokoPlayfan

Live [https://tokoplay-production.up.railway.app](https://tokoplay-production.up.railway.app)

## **API Structure**

```bash
BE-TokoPlayfan/
├── app/
│   ├── config/
│   │   └── config.js
│   ├── controllers/
│   │   ├── commentController.js
│   │   ├── productController.js
│   │   └── thumbnailController.js
│   ├── models/
│   │   ├── Comment.js
│   │   ├── Product.js
│   │   └── Thumbnail.js
│   └── routes/
│       ├── commentRoute.js
│       ├── productRoute.js
│       └── thumbnailRoute.js
├── app.js

```

| Title                                  | Endpoint                              | Method |
| -------------------------------------- | ------------------------------------- | ------ |
| `Get Thumbnails List`                  | `/thumbnails`                         | GET    |
| `Get Thumbnails by video ID`           | `/thumbnails/video?videoID=id_video`  | GET    |
| `Get Comments List by video ID`        | `/comments?videoID=id_video`          | GET    |
| `Get Products List by video ID`        | `/products?videoID=id_video`          | GET    |
| `Get Specific Title Products by Title` | `/products/title?title=title_product` | GET    |
| `Create New Thumbnails`                | `/thumbnails`                         | POST   |
| `Create New Products`                  | `/products`                           | POST   |
| `Create New Comments`                  | `/comments`                           | POST   |
| `Delete Specific Comment by id`        | `/comments?videoId=id_video`          | DELETE |

## Database Schema

Below is a visual representation of the database structure used in the Tokoplayfan project.

`Collection: Comment`

This collection contains the comments provided by users on videos.

| Field     | Data Type | Description               |
| --------- | --------- | ------------------------- |
| username  | String    | User's name               |
| comment   | String    | User's comment            |
| videoID   | String    | ID of the commented video |
| timestamp | Date      | Time the comment was made |

`Collection: Product`

This collection stores information about products linked to videos.

| Field     | Data Type | Description             |
| --------- | --------- | ----------------------- |
| productID | String    | Product ID              |
| link      | String    | Product link            |
| title     | String    | Product title           |
| price     | Number    | Product price           |
| discount  | Number    | Product discount        |
| videoID   | String    | ID of the related video |

`Collection: Thumbnail`

This collection records thumbnail images and video information.

| Field      | Data Type | Description         |
| ---------- | --------- | ------------------- |
| videoID    | String    | Video ID            |
| title      | String    | Video title         |
| view       | Number    | Video view count    |
| youtubeUrl | String    | YouTube URL         |
| imageUrl   | String    | Thumbnail image URL |

## **API Request and Response**

Base URL: `https://tokoplay-production.up.railway.app/`  
Base URL in LOCAL: `http://localhost:3000/`

### **Comments**

`GET /comments?videoID=id_video` : Get comments or filter comments by videoID

- Query Params : `?videoID=your_videoID`

- Link URL : `https://tokoplay-production.up.railway.app/comments?videoID=123` we use the query parameters videoID with value 123

- Headers : `Content-Type: application/json`

- Response :

  - Success: (201)

  ```json
  {
    "username": "affan",
    "comment": "Congratulation",
    "videoID": "1",
    "timestamp": "2023-08-13T13:41:27.440Z",
    "__v": 0
  }
  ```

  - Errors: (404)

  ```json
  {
    "error": "No comments found for the specified VideoID"
  }
  ```

  - Errors: (500)

  ```json
  {
    "error": "Internal server error"
  }
  ```

##

`POST /comments` : Create a new comment`

- Link URL : `https://tokoplay-production.up.railway.app/comments`

- Data Params Raw JSON :

  ```json
    {
      "username": "fathan",
      "comment": "satusssdfdfgddcom",
      "videoID": "1"
    }
  ```

- Headers : `Content-Type: application/json`

- Response :

  - Success: (201)

    ```json
    {
      "message": "Comment successfully created",
      "Comment": {
        "username": "fathan",
        "comment": "satusssdfdfgddcom",
        "videoID": "321",
        "timestamp": "2023-07-27T14:17:14.783Z",
        "_id": "64c282d49e21733b43a5a853",
        "__v": 0
      }
    }
    ```

  - Errors: (404)

    ```json
    {
      "error": "Comment with the same username and videoID already exists"
    }
    ```

  - Errors: (500)

    ```json
    {
      "error": "Internal server error"
    }
    ```

##

`DELETE /comments/:videoID` : Delete comment`

- Link URL : `https://tokoplay-production.up.railway.app/comments/10`

- Headers : `Content-Type: application/json`

- Response :

  - Success: (201)

    ```json
    {
      "message": "Comment with id 10 deleted successfully",
      "$__": {
        "activePaths": {
          "paths": {
            "videoID": "init",
            "comment": "init",
            "username": "init",
            "timestamp": "init",
            "_id": "init",
            "__v": "init"
          },
          "states": {
            "require": {},
            "default": {},
            "init": {
              "_id": true,
              "username": true,
              "comment": true,
              "videoID": true,
              "timestamp": true,
              "__v": true
            }
          }
        },
        "skipId": true
      },
      "$isNew": false,
      "_doc": {
        "_id": "64d8ea141694f2db88daea6f",
        "username": "test_user",
        "comment": "Keep it up!",
        "videoID": "10",
        "timestamp": "2023-08-13T13:41:27.440Z",
        "__v": 0
      }
    }
    ```

  - Errors: (404)

    ```json
    {
      "error": "Comment with id __ not found"
    }
    ```

  - Errors: (500)

    ```json
    {
      "error": "Internal server error"
    }
    ```

##

### **Products**

`GET /products?videoID=id_video` : Get product data by videoID

- Query Params : `?videoID=your_videoID`

- Link URL : `https://tokoplay-production.up.railway.app/products?videoID=1` we use the query parameters videoID with value 123

- Headers : `Content-Type: application/json`

- Response :

  - Success: (201)

    ```json
    [
      {
        "_id": "64d8af801742322595ce0e44",
        "productID": "1-1",
        "link": "https://iili.io/HD1CAzB.md.jpg",
        "title": "Product 1",
        "price": 10000,
        "discount": 50,
        "videoID": "1",
        "__v": 0
      }
    ]
    ```

  - Errors: (404)

    ```json
    {
      "error": "No products found for the specified VideoID or search term"
    }
    ```

  - Errors: (500)

    ```json
    {
      "error": "Internal server error"
    }
    ```

##

`POST /products`: Create a new product. (Optional)

- Link URL : `https://tokoplay-production.up.railway.app/products`

- Data Params Raw JSON :

  ```json
  {
    "productID": "10-2",
    "link": "https://iili.io/HD1l17p.jpg",
    "title": "Product 2",
    "discount": 30,
    "price": 5999999,
    "videoID": "10"
  }
  ```

- Headers : `Content-Type: application/json`

- Response :

  - Success: (201)

    ```json
    {
      "message": "Product added successfully",
      "product": {
        "productID": "10-2",
        "link": "https://iili.io/HD1l17p.jpg",
        "title": "Product 2",
        "discount": 30,
        "price": 5999999,
        "videoID": "10",
        "_id": "64c288581a0ee9ea3f0dd2bb",
        "__v": 0
      }
    }
    ```

  - Errors: (404)

    ```json
    {
      "error": "ProductID, Link, Title, Price, and VideoID are required"
    }
    ```

  - Errors: (500)

    ```json
    {
      "error": "Internal server error"
    }
    ```

##

### **Thumbnails**

`GET /thumbnails` : Get Thumbnail datas

- Query Params : None

- Link URL : `https://tokoplay-production.up.railway.app/thumbnails`

- Headers : `Content-Type: application/json`

- Response :

  - Success: (201)

    ```json
    [
      {
        "_id": "64d8b8811742322595ce0e80",
        "videoID": "1",
        "title": "Speaker Flashsale",
        "view": 100,
        "youtubeUrl": "https://www.youtube.com/embed/BZ5gCb02H4A",
        "imageUrl": "https://iili.io/HD1dYhu.jpg",
        "__v": 0
      },
      {
        "_id": "64d8b8ce1742322595ce0e82",
        "videoID": "2",
        "title": "Watch IP68, Lets GOO",
        "view": 160,
        "youtubeUrl": "https://www.youtube.com/embed/BZ5gCb02H4A",
        "imageUrl": "https://iili.io/HD1d7Ie.jpg",
        "__v": 0
      },
      {
        "_id": "64d8b8d81742322595ce0e84",
        "videoID": "3",
        "title": "Jual Hydro Flask",
        "view": 200,
        "youtubeUrl": "https://www.youtube.com/embed/gp8JOmHEfos",
        "imageUrl": "https://iili.io/HD1daLb.jpg",
        "__v": 0
      },
      {
        "_id": "64d8b8e11742322595ce0e86",
        "videoID": "4",
        "title": "Toko Kursi Kurnia",
        "view": 190,
        "youtubeUrl": "https://www.youtube.com/embed/rTFXTY4kvjU",
        "imageUrl": "https://iili.io/HD1dWp1.jpg",
        "__v": 0
      },
      {
        "_id": "64d8b8f11742322595ce0e88",
        "videoID": "5",
        "title": "Alat Kecantikan",
        "view": 800,
        "youtubeUrl": "https://www.youtube.com/embed/hLXIik8dmdg",
        "imageUrl": "https://iili.io/HD1dlBj.jpg",
        "__v": 0
      },
      {
        "_id": "64d8b8fb1742322595ce0e8a",
        "videoID": "6",
        "title": "Alas Kaki Murah",
        "view": 400,
        "youtubeUrl": "https://www.youtube.com/embed/A0p_sc4PGPE",
        "imageUrl": "https://iili.io/HD1d0Ex.jpg",
        "__v": 0
      },
      {
        "_id": "64d8b9041742322595ce0e8c",
        "videoID": "7",
        "title": "Kacamata, Beli 1 Gratis 2",
        "view": 700,
        "youtubeUrl": "https://www.youtube.com/embed/DbOulmdGIh8",
        "imageUrl": "https://iili.io/HD1d1rQ.jpg",
        "__v": 0
      },
      {
        "_id": "64d8b90e1742322595ce0e8e",
        "videoID": "8",
        "title": "Kamera Classic",
        "view": 600,
        "youtubeUrl": "https://www.youtube.com/embed/zh1NNWmwQak",
        "imageUrl": "https://iili.io/HD1dMYB.jpg",
        "__v": 0
      },
      {
        "_id": "64d8b9171742322595ce0e90",
        "videoID": "9",
        "title": "Cuci Gudang Headset",
        "view": 900,
        "youtubeUrl": "https://www.youtube.com/embed/V25wX9ZgmKM",
        "imageUrl": "https://iili.io/HD1dVkP.jpg",
        "__v": 0
      },
      {
        "_id": "64d8b9221742322595ce0e92",
        "videoID": "10",
        "title": "Jam Tangan Mahal",
        "view": 300,
        "youtubeUrl": "https://www.youtube.com/embed/IjN3FWoXHjQ",
        "imageUrl": "https://iili.io/HD1dG2V.jpg",
        "__v": 0
      }
    ]
    ```

  - Errors: (404)

    ```json
    {
      "error": "No thumbnails found"
    }
    ```

  - Errors: (500)

    ```json
    {
      "error": "Internal server error"
    }
    ```

##

`GET /thumbnails/video?videoID=id_video` : Get Thumbnail datas by videoID

- Query Params : `/thumbnails/video?videoID=id_video`

- Link URL : `https://tokoplay-production.up.railway.app/thumbnails/video?videoID=1`

- Headers : `Content-Type: application/json`

- Response :

  - Success: (201)

    ```json
    [
      {
        "_id": "64d8b8811742322595ce0e80",
        "videoID": "1",
        "title": "Speaker Flashsale",
        "view": 100,
        "youtubeUrl": "https://www.youtube.com/embed/BZ5gCb02H4A",
        "imageUrl": "https://iili.io/HD1dYhu.jpg",
        "__v": 0
      }
    ]
    ```

  - Errors: (404)

    ```json
    {
      "error": "No thumbnail found for the specified VideoID or search term"
    }
    ```

  - Errors: (500)

    ```json
    {
      "error": "Internal server error"
    }
    ```

##

`POST /thumbnails` : Add a new thumbnail (optional)

- URL Params : None

- Data Params Raw JSON :

  ```json
  {
    "videoID": "136",
    "imageUrl": "FFSFSdsfF"
  }
  ```

- Headers : `Content-Type: application/json`

- Response :

  - Success: (201)

    ```json
    {
      "message": "Thumbnail added successfully",
      "thumbnails": {
        "videoID": "6",
        "title": "Alas Kaki Murah",
        "view": 400,
        "youtubeUrl": "https://www.youtube.com/embed/A0p_sc4PGPE",
        "imageUrl": "https://iili.io/HD1d0Ex.jpg",
        "_id": "64c28b071a0ee9ea3f0dd2c5",
        "__v": 0
      }
    }
    ```

  - Errors: (404)

    ```json
    {
      "error": "VideoID and URL are required"
    }
    ```

  - Errors: (500)

    ```json
    {
      "error": "Internal server error"
    }
    ```

##

### Bonus

`GET /products/title?title=product_title` : Get Thumbnail datas by videoID

- Query Params : `?title=product_title`, query parameter title with the value of the product you want to search for, which will be used to search for products based on that title.

- Link URL : `https://tokoplay-production.up.railway.app/products/title?title=Product 2` we use the query parameters title with value title Product 2

- Data Params : none

- Headers : `Content-Type: application/json`

- Response :

  - Success: (201)

    ```json
    [
      {
        "_id": "64d8af9d1742322595ce0e46",
        "productID": "1-2",
        "link": "https://iili.io/HD1Cz5x.jpg",
        "title": "Product 2",
        "price": 20000,
        "discount": 30,
        "videoID": "1",
        "__v": 0
      },
      {
        "_id": "64d8b0941742322595ce0e4a",
        "productID": "2-2",
        "link": "https://iili.io/HD1IRK7.md.jpg",
        "title": "Product 2",
        "price": 59999,
        "discount": 40,
        "videoID": "2",
        "__v": 0
      }
    ]
    ```

  - Errors: (404)

    ```json
    {
      "error": "No products found for the specified search term"
    }
    ```

  - Errors: (500)

    ```json
    {
      "error": "Internal server error"
    }
    ```

##

## **How to Run in Local**

Before running the application, make sure you have the following installed on your system:

- Node.js
- MongoDB
- NPM: Package manager for Node.js.
- Express.js: Web application framework for Node.js.
- Mongoose

After everything is installed

- Open a terminal or command prompt on your computer.
  Use the git clone command to clone the repository.

  ```bash
  git clone git clone https://github.com/KodingAffanMaulana/TokoPlayfan-FinalProject.git
  ```

- Navigate to the Project Directory: Change into the project directory by running:

  ```bash
  cd BE-TokoPlayfan
  ```

- Install Dependencies : Use `npm install` to install the required dependencies mentioned in the "package.json" file

- Configure MongoDB URI: Rename [.env.example](.env.example) to `(.env)`  
  Replace the `mongodb://127.0.0.1:27017/YOUR_DB` with your actual MongoDB URI if needed and adjust the location of the port.  
  Run the API:

- To start the server, run the following command:
  `npm run dev` The API will be running on `http://localhost:3000/`

- After running `npm run dev` the database and collection will be created automatically but still empty or you can create `mongosh use YOUR_DB`

- [DUMMY DATA](/assets/dummyDatabase.js)
