# Digital Prejudice

### MVP for an interactive web documentary built with React, audio-visualising racist text messages crowdsourced from other users.


# Project Description


![Project Image](https://res.cloudinary.com/dbawu96z7/image/upload/v1630102039/Digital%20Prejudice%20Images/Digital_Prejudice_Screengrab_tozqiv.png)

Racist comments made on social media platforms are visible and thus widely dissected in the public domain. But despite similar comments made towards online dating app users, they get less attention as the messages are private.

Vocalising such messages using Text-To-Speech technology amplifies how that could sound like from a person, and makes it more real for those who don't know what it's like to receive one. 

The computerised gives an inhuman effect, which reflects the alienating experience - those who recieve such messages don't know what the sender sounds like because they have never met them.

The aim of the project is for those who have had similar experiences to contribute to a piece of web-based documentary art, that continues to grow and "document" as more data is crowdsourced.

To digest the concept,
 [checkout the demo video on YouTube.](https://youtu.be/P-uIyzo2QjM)


# Features

* Landing page plays back text-to-speech audio of racist messages that users have submitted

* Submission form allows users to write out text content of message(s) received

* The submit button generates text-to-speech audio which gets saved onto cloud storage and generates a URL for the file

* This URL is saved onto the database along with the submitted text

* When the user clicks the play button on the front-end, the URL is then retrieved so that users can hear all the messages submitted so far



# Getting Started

These instructions will help you setup a local development instance of the app.

### Get the repo

```
git clone https://github.com/marishibata/Digital-Prejudice.git
```

### Navigate to the folder

```
cd digital-prejudice
```

### Install the dependencies

```
npm install 
```

### Navigate to the project folder

```
cd Digital-Prejudice
```

### Run server

```
cd server
nodemon server.js
```

### Run client to start app

```
cd ..
cd client
npm start
```

# Tech Stack


**Front-end:**
* JavaScript
* React
* Styled Components

**Back-end:**
* Node
* Express
* Mongoose
* MongoDB

**APIs:**
* Google: Text-to-Speech
* Cloudinary


# Contributions

Contributions of any kind are welcome!

Any questions about the project, please feel free to email me on contact@marishibata.com