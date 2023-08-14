# Final Project Generasi Gigih

Live Production
[https://tokoplay-affan.netlify.app](https://tokoplay-affan.netlify.app)

## TokoPlayfan

The Tokoplayfan application is the final project built using the React library, designed to provide a dummy live platform from Tokopedia Play. This application can display live lists, products sold live and can write comments on live. The app leverages a variety of technologies and libraries, including react-router-dom, tailwind css, chakra-ui, react-icons, and more.

## Features

- User can open, two page ( Home and Video Detail Page )
- User can see video list with thumbnail from YouTube in home page
- User can click each video and go to video detail page
- User can see list products, embed YouTube, list comment, and form submit comment
- User just need input name and comment when submit comment in form
- User can see their comment in list comment section after success submit comment
- Attractive Appearance: This application displays an attractive and responsive user interface
- Bonus Video Content Search: Users can easily search for their favorite video content using the integrated search feature. This helps users quickly find the videos they want.
- Smooth Navigation: Thanks to the use of react-router-dom, the app provides smooth navigation between different pages, including video details and search pages.

## Technical Requirements

- API NodeJS: deploy with `Railway.app`
- Database MongoDB: DB to support list API needed(with MongoDB)
- React Hooks
- Use React Router as router navigation between page

## How to Install and Run

Clone this repository with HTTPS in your terminal

```bash
git clone https://github.com/KodingAffanMaulana/TokoPlayfan-FinalProject.git
```

Navigate to the app's directory:

```bash
cd FE-TokoPlayfan
```

Install dependencies with npm, yarn, etc

```bash
npm install
```

Set `.env_example` to `.env`\
Change REACT_APP_BASE_URL with

```bash
https://tokoplay-production.up.railway.app
```

or

```bash
http://localhost:3000/
```

This API is built from a mid term backend assignment with added responsiveness and features

Start the development server

```javascript
npm start
```
