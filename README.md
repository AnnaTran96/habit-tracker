# Habitory
- A habit tracking web app built using React, Express JS and PostgreSQL.
- **Contributors**: Anna, Bhuma and Hannah

![Screenshot of Habitory](https://i.imgur.com/Fqy4Vsp.png)


## Installation & usage
### Installation
- Clone or download the repo.
- In your command line, run `npm install` in both the Client and Server folders.
- In the Client folder, run `npm start`.
- In the Server folder, load the database with `psql` and `/i datatabases/seeds.sql`.
- Then run `npm start`.
### Usage
- Click **Register** to create an account using your email address and password.
- Click **Login** to login using the above email address and password.
- To create a new habit to be tracked, click **Add new** and fill in the details.
- On your dashboard, to log each occurence of completing your habit for the day, click the **+** button.

## Technologies
- React
- Express
- PostgreSQL
- Webpack
- JavaScript
- HTML, CSS

## Process
- Started by wireframing the pages in Figma
- Wrote pseudo code to break down the logic of collecting user input, collecting information from the API, sending it to the database, linking the three and assigning functionality to buttons.
- Created a database with a user table and a habits table.
- Used Webpack to configure our server and development setup.
- Compartmentalised habit tracker functionality into separate components for clarity and ease of teamwork.

## Challenges
- Implementing login authentication
- Predicting length of time certain tasks will take

## Future features
- Ability to delete habits
- Adding a calendar to track all and set a habit in advance
- Reminders (with options to choose time of day and method - email, text, push notification)
- Gamification (scores, a leaderboard with friends)
- Implementing Redux

## License
- [MIT License](https://opensource.org/licenses/mit-license.php)
