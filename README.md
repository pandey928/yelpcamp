Here’s an all-in-one README.md file with detailed instructions on how to run the CampIndia project, including the setup, installation, and security details:

# CampIndia

CampIndia is a secure platform designed for users to discover and share campgrounds. It allows users to post details about campgrounds, including location, description, images, and pricing. Users can also leave reviews and ratings for campgrounds, while maintaining strict control over the content they’ve posted. The project includes secure login, password hashing with salt, and role-based access control (RBAC).

## Features
- **Post Campgrounds**: Users can post campgrounds with details like location, description, images, and pricing.
- **Add Reviews**: Users can add reviews and ratings for campgrounds, which can be edited or deleted by the author.
- **Role-Based Access Control (RBAC)**: Only the author of a post or review can edit or delete it.
- **Secure Authentication**: User passwords are hashed and salted for secure storage, and users are authenticated via Passport.js.

## Security Highlights
- **Password Security**: Passwords are hashed using bcrypt and salted, preventing unauthorized access even if the database is compromised.
- **RBAC**: Only authorized users (e.g., the post or review creator) can edit or delete their content.
- **Session Management**: Secure session management using Passport.js to ensure safe and authorized user sessions.

## Tech Stack
- **Backend**: Node.js, Express.js, MongoDB (with Mongoose)
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: Passport.js for user login and registration
- **Deployment**: Render (for cloud hosting)

## Installation and Running Locally

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas)
- [Git](https://git-scm.com/)

### Steps to Set Up and Run the Project

1. Clone the Repository  
   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/pandey928/yelpcamp/tree/main.git
   cd yelpcamp
	2.	Install Dependencies
Install the necessary dependencies by running the following command:

npm install


	3.	Configure Environment Variables
Create a .env file in the root directory of the project and add the following variables:
	•	MONGO_URI: MongoDB connection string. If using MongoDB Atlas, get your connection string from the Atlas dashboard.
	•	SESSION_SECRET: A random string used to secure user sessions.
	•	Example .env file:

MONGO_URI=mongodb://localhost:27017/campindia
SESSION_SECRET=your_random_session_secret


	4.	Start the Application
After setting up the environment variables, start the app by running:

node app.js

The application should now be running at http://localhost:3000.

How to Use the Application

	•	User Registration: Users can create an account by registering with their email and password.
	•	Post a Campground: Authenticated users can post new campgrounds, which includes uploading images, descriptions, and prices.
	•	Add Reviews: Users can leave reviews and ratings for campgrounds.
	•	Edit/Remove Posts and Reviews: Only the author of a post or review can edit or remove it.

Folder Structure

/campindia
  /models           # Mongoose models for user, campground, and review
  /routes           # Route handlers for authentication, campground, and review endpoints
  /views            # EJS templates for rendering HTML pages
  /public           # Static assets (CSS, JavaScript, Images)
  app.js            # Main application file to start the server
  .env              # Environment variables for MongoDB URI and session secret
  package.json      # Project dependencies and scripts

Testing the Application

You can test the basic functionality by:
	1.	Registering a new user.
	2.	Logging in using the registered credentials.
	3.	Posting a new campground.
	4.	Adding a review to an existing campground.
	5.	Editing or deleting your own campground/review.

Security Considerations

	•	Password Hashing: User passwords are hashed using bcrypt with a salt value to ensure that passwords are never stored in plain text.
	•	Session Management: User sessions are securely handled with a session secret stored in the environment variables.

Deployment

This app is deployed on Render. If you wish to deploy it yourself, follow the instructions from your chosen cloud provider. Ensure that the environment variables (e.g. MAPBOX_TOKEN, MONGO_URI, SESSION_SECRET) are properly configured in your deployment settings.

Contribution

Contributions are welcome! Feel free to fork the repository and submit a pull request.


### Key Points in This README:

- **Installation and Running Locally**: Provides clear instructions on setting up the environment, installing dependencies, and running the project locally.
- **Features**: Highlights the core functionality, including campground posting, review management, and user authentication.
- **Security**: Focuses on the password hashing and session management used to secure user data.
- **Tech Stack**: Lists the technologies used to build the project.
- **Deployment**: Mentions deployment on Render and how to deploy the app yourself.
- **Testing**: A brief section to guide users on how to test the app's functionality.

Feel free to modify any paths, configurations, or details as needed.
