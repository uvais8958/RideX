# RideX Frontend

This is the frontend part of the RideX project.
It is built with React and Vite.

The app starts from the home screen and then lets users go to:
- User login
- User signup
- Captain login
- Captain signup

It is a simple front-end flow for a ride-sharing app.

## Tech Used
- React
- Vite
- React Router DOM
- JavaScript

## Screenshots

### Home Screen

![RideX Home Screen](src/assets/HomePage.png)

This is the landing screen of the RideX app. It shows the branded background, logo, and a start card with the call-to-action button.

## Folder Structure

```text
Frontend/
├── public/
├── src/
│   ├── assets/
│   ├── Pages/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## How the App Works (End to End)

1. User opens the app.
2. `main.jsx` loads the app and wraps it with `BrowserRouter`.
3. `App.jsx` decides which page to show based on the URL.
4. Routes are:
   - `/` -> Home page
   - `/user/login` -> User login
   - `/user/signup` -> User signup
   - `/captain/login` -> Captain login
   - `/captain/signup` -> Captain signup
5. Each page contains the UI for that section.
6. Later, this frontend connects with the backend APIs for login, signup, and ride features.

## Start the Project

Open terminal in the `Frontend` folder and run:

```bash
npm install
npm run dev
```

Then open the browser and visit:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

This creates the production files for deployment.

## Simple Flow Example

```text
Open app
-> Home page
-> Click Continue
-> Go to login/signup page
-> Enter details
-> Backend verifies user/captain
-> App proceeds to next screen
```

## Notes

- The login/signup pages are UI pages for now.
- Real backend APIs will be connected later.
- This project is the front-end layer of the RideX application.

## Summary

RideX Frontend is the user interface of the ride-sharing app. It handles the home page and user/captain login and signup screens, and it routes users between pages using React Router.
