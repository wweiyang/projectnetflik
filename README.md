# Netflik project

Link: https://projectnetflik.netlify.app/

This project was the final project of the Scrimba Frontend Developer course, and also the largest project. The goal was to build a Netflix clone, mainly the homepage, sign in, sign out and mockup browse page. This project introduced application architecture, and organising the code into separate folders, while making the components as modular as possible.

Compound components were used in this project, as a way of making the code more structured and reusable. Styled components were used in place of regular CSS, allowing props to be passed down to be used in styling. Firebase was used for storing data and user authentication.

## Overall process of the project:
- Create React App, set up GitHub repository for version control
- Set up React Router for the pages
- Build Jumbotron, Accordion, Opt-In-Form, Header, Footer components for Home page
- Set up Firebase storage, connect application to Firebase
- Hydrate Firebase with data
- Create custom hook to retrieve data from Firebase
- Build Form component for Sign In and Sign Up pages
- Build Profile component
- Set up Firebase authentication
- Add Firebase authentication to Sign In, Sign Up pages
- Build Card component for Browse page
- Implement live search using Fuse.js
- Build Player component for Browse page
- Create custom authentication listener hook to make routes protected
- Deploy app on Github Pages, and subsequently switched to Netlify

Throughout the course of this project, I met a bunch of obstacles. Using Firebase was confusing to me at times, like implementing the user authentication, and retrieving the stored data. So I took the time to go through some of the documentation to help me with my overall understanding of how it works.

Deploying the application onto Github Pages was another problem. Firstly, images were not showing, and I ended up discovering that the image path was the problem. Adding the environment variable to the path resolved the issue. Secondly, all the pages other than the homepage were showing 404 error on refresh. After doing a search online and asking in the Discord group for the course, I found out that Github Pages didn’t work well with React’s BrowserRouter. The workaround solutions were quite messy too. So I ended up just deploying it onto Netlify instead, and it worked like a charm.

Lastly was understanding how the entire application was structured. I find that application architecture is one of the most important things to learn. As this project was part of the course, I had the benefit of having the instructor's help in providing the high level application architecture. But working on a large project on my own would definitely be much harder. Finishing the project made things slightly clearer for me, and I feel that this is something that only comes with more practise and experience.

## Technologies overview:
- React
- Compound components (design pattern for collating components and making them modular)
- Styled components (CSS in JS)
- Firebase
