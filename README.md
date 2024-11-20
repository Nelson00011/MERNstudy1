<h1 align="center">MERN Study - Vase 1</h1>

`main image`

## Description:
MERN basic application for fun practice and Vase building. The Expression *One Vase A day will teach you more than spending hours trying to perfectly make one vase.* 

## Technology Stack
- **Frontend/Client:** React.js, HTML5, CSS, framework, etc.
- **API:** api calls or external sources used
- **Backend/Server:** node.js/express, MongoDB

<h2 align="center">Video:</h2>

## Screen Shots:
<p align="center">Please reference the screenshot folder for more available images</p>

`selected image 1`

`selected image 2`

`selected image 3`

## Run Code (Environment)

### Front-End Instructions `localhost:3000`:
- confirm that config is appropriate:
```
> node -v
> npm -v
> git --version
> npm init -y
> npm install express mongoose dotenv 
> npm install nodemon -D
```

- Initial package.json & install dependenies(localhost:3000):
    - Must be `cd`'d into frontend/client for install
    - MUI, `react-router-dom`, redux, formik, etc... (see resources)
```
> npx create-react-app <project name>
> cd <project name>
> npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
> npm install --save react-router-dom
> npm install react-redux @reduxjs/toolkit
> npm install formik yup dotenv react-responsive-carousel
> npm install --save @stripe/react-stripe-js @stripe/stripe-js
```
- Test front-end once pages are generated (ctrl-c to exit):
```
> npm run start
```

### Back-End Instructions `localhost:5000`:
- Initial package.json & install dependencies:
    - Must be `cd`'d into backend/server for install
    - 'package.json' will require a "type":"module" to be added
```
> mkdir backend
> cd backend
```
- confirm that the code is running appropriately by testing with `node serve.js`
- once `nodemon` is installed you can continue to run once dev settings are updated
```
npm run dev

```
- you can edit the scripts in package.json to have a new "dev" call if you want
- MongoDB Drivers
    - When getting MongoDB Driver String be aware you may or may not need to insert the passcode.
    - `process.env.MONGO_URI` confirmation via console.log
    - Test using Postman: see resources


```
> npm install mongodb
```
- **Avoid** *npm run start* and use the `npm run develop`. 
- When using .env variables remember to [install prior](https://www.npmjs.com/package/dotenv/v/14.0.0)
```
npm install dotenv --save
```
- Create a .env file in the root directory of your project.
    - Import and configure dotenv.
    - Establish a .gitignore [here](https://git-scm.com/docs/gitignore)

- Chaikra Material
```
>  npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```


- In frontend fetch `item` from backend (*localhost:1337*):
```
const grouping = "items"
const items = await fetch(
`http://localhost:1337/api/${grouping}`
)
```
--------------------------
### Deployment



## Contact:
<!--- You can add in your linkedin, medium, stack overflow, dev.to account, etc. here --->
If you want to contact me you can reach me at <nelson@oakhalo.com>.

Connect with me on <a href="https://www.linkedin.com/in/ayla-nelson/">LinkedIn</a>

Connect with me on <a href="https://github.com/oakHalo">Oakhalo.dev</a>

## Resources:

- `Tech used and links associated`
- `Tech used and links associated`

- **Nodemon** for in development settings [here](https://www.npmjs.com/package/nodemon)
- **PostMan** for API Tests [here](https://www.postman.com/)
    - Make collections
    - New Request to test out the backend capabilities
    
- [Chakra -UI](https://www.chakra-ui.com/)


#### **style:** 
- `frameworks and links associated`

- Filler Text [typographic](https://generator.lorem-ipsum.info/)
    - Lorem Ipsum 
- Google Fonts [here](https://fonts.google.com/)

#### **helpful hint:** 
- kill backend with `Ctr-C`
- console log testing with `ctr-alt-l` 
- API calls too many times will cause an error? 
- confirm in package.json the dependencies exist when installing
- Always Stay Positive & Triple Check Permissions :)






<!-- 
### TODO stx: 
Future Structure (stx):
backend
frontend
images
screenShots [contains video link]

https://www.youtube.com/watch?v=O3BUHwfHf84
around 45 minuts : MODULE NOT WORKING
FIX CODE

-->
