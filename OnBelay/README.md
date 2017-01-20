# onBelay

[onBelay.io][onBelay] is a full-stack, single-paged web application that provides rock climbers with a forum to connect and climb together. Inspired by OKCupid, it matches users with similar interests and allows them to communicate via an integrated chat system. It uses Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux framework on the frontend.

onBelay is a personal project by Tom Ogasawara.

![onBelay splash][splashPage]


## Features

- User accounts with secure authentication
- User profile pages with image uploading and cloud storage
- Browse other users by similar interest and geolocation
- Message users with integrated chat interface
- Personality questions to determine match compatibility
- View and like other user profiles


![Browse][browseMatches]

## Technology

### Backend

onBelay is hosted on Heroku and runs on Ruby on Rails. The sole purpose of the backend is to provide RESTful APIs and respond with JSON data. Site data is stored via a PostgreSQL database, with BCrypt and Figaro to protect and encrypt sensitive information.   

### Frontend

As a single-page application, onBelay utilizes the React.js framework and follows the Flux architecture to deliver the frontend. Node package manager (npm) is used to install all of the frontend dependencies.

A post-install script is configured so that webpack bundles all of the frontend files after the deployment to Heroku is complete. Webpack conveniently bundles all of the frontend components and Flux parts. The bundled file is located in /app/assets/javascripts and included in the main application.js file.

All of the React components, Flux action creators, API utilities, dispatcher, and stores are located in the frontend directory. jQuery is only used to make AJAX requests with the Rails server.

### File Storage

User images are stored via Cloudinary.

## Future direction

Currently, onBelay can be accurately considered a minimum viable product. To push it into a fully functional (and useful) web application, I would like to implement the following features:
- Push notifications for messaging
- Editing/deleting question responses
- Discussion forums and group messaging
- Additional filters and user parameters

<!-- [conversation]: ./docs/images/conversation.png "Conversation" -->

[onBelay]: http://onbelay.io
[splashPage]: ./docs/images/splash_page.png "Splash Page"
[userProfile]: ./docs/images/user_profile.png "User Profile"
[browseMatches]: ./docs/images/browse_matches.png "Browse Matches"
[questionForm]: ./docs/images/question_form.png "Question Form"
