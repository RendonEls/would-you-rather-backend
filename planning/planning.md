
-This app is game of questions built with MERN 

###Models:

````javascript
 const QuestionSchema = new mongoose.Schema ({
    question1: String,
    question2: String,
    count1: Number,
    count2: Number
})
```
// ![planning Chart]
// (Planning-chart.png)


###Planning


  Day 1: 
  
  1. User Story
  -- user will see the homepage on first visit, homepage will clearly display selection buttons to Play, see stats, or options to edit game play.  The game will allow users to add additional questions, remove, or edit other questions.  User will also be able to play the game
  2. Wire Frame
  3. Create Repos for Github and clone down
  4. Setup directory/file structure
  5. plan/install dependencies
  6. build backend with node, server with express
  7. build frontend with react
  8. connect frontend and backend
  9. set goals for Day 2

  Day 2: 

  1. build model: Play
  2. create DB with seed.js file 
  3. fill seed file with test dataand logic for filling mongoDB
  4. Develop Create question form
  5. Develop edit question form
  6. Add logic on backend for POST of additional questions
  7. Plan goals for Day 3

  day 3:
  1. Add Delete and Edit buttons to frontend
  2. Add PUT logic for frontend
  3. Add PUT logic for backend
  4. add Edit logic for frontend -- not accomplished
  5. add Edit logic for backend -- not accomplished
  6. Play day 4 goals
  

  day 4:
  1. finish update/delete logic
  2. Plan day 5 goals

  day 5:
  1. Deploy app
  2. user documentation
  3. with available time add styling/refactor
