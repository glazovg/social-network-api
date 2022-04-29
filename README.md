# The Social Network API
## Description
This is a back-end project about a Social Network APIe, this project can be complemented by adding more functionality like adding routes and models for users, thoughts or even reactions.
    
## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

<a name="installation"></a>
## Installation
1. Run `npm install`to install all the necessary packages.

<a name="usage"></a>
## Usage
To start using the application we need to use Insomnia to make calls to the created routes. 
1. Start the application with `npm start`
2. Use Insomnia to make any call either by sending GET, POST, PUT or DEL.

Routes that can be reached with Insomnia:

GET `api/users`

GET `api/users/:userId`

GET `api/thoughts`

GET `api/thoughts/:thoughtId`

POST/PUT `api/users`
- Body example:

`{
	"username": "UserDelete",
	"email": "delete@test.com"
}`

POST/PUT `api/thoughts`
- Body example:

`{
	"thoughtText": "my third thought",
	"userId": "626b3ce04aaf3ca0ad9536b4",
	"username": "Guillermo"
}`

POST `api/thoughts/:thoughtId/reactions`
- Body example:

`{
	"reactionBody": "my reaction",
	"username": "Guillemro"
}`

POST `api/users/:userId/friends/:friendId`

DELETE `api/users/:userId`

DELETE `api/thoughts/:thoughtId`

DELETE `api/users/:userId/friends/:friendId`

[Walkthrough Video](https://watch.screencastify.com/v/yA50OowUfiJ2xGLanyov)

<a name="license"></a>
## License
Licensed under the ISC License (ISC).
    
---    
<a name="how-to-contribute"></a>
## How to Contribute
Please follow the steps:
1. Clone the repository in https://github.com/glazovg/social-network-api
2. Go to the project's folder and run `npm install`
3. Create a local branch and you will be all set.

<a name="tests"></a>
## Tests
This repository does not have tests yet, but once added it will be `npm run test`

<a name="questions"></a>
## Questions
If you have any questions or concerns, please contact me:

- By github profile https://github.com/glazovg
- By email glazovg@gmail.com, please with a brief description in the Subject (Bug, Suggestions, Question, Doubts).
