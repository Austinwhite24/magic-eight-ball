const express = require('express')
const cors = require('cors')
// const eightBallAnswers = require ('./db.json')
// const axios = require('axios')

const app = express()

app.use(cors())
app.use(express.json())

const ctrl = require('./controller.js')


////////Endpoints//////

app.get("/api/fortune", ctrl.getFortune)
app.post("/api/data", ctrl.saveFortune)
app.get("/api/profile", ctrl.sendHistory)
app.delete('/api/delete', ctrl.deleteResponse)







// app.get("http://localhost:4004/api/compliment/", ctrl.compliments)

// app.get('api/eightBallAnswers', (req, res) => {
//     res.status(200).send(eightBallAnswers)
// })

// app.get("/api/compliment", (req, res) => {
  // app.get("/api/compliment", (req, res) => {
  //   const compliments = ["It is certain",

  //   "It is decidedly so",
  //   "Without a doubt",
  //   "Yes, definitely",
  //   'You may rely on it',
  //   'As I see it, yes',
  //   'Most likely',
  //   'Outlook good',
  //   'Yes',
  //   "Totally Man",
  //   'No',
  //   'You Bet Lol',
  //   'Maybe sometime bro',
  //   'Signs point to yes',
  //   'I cant think right now try again',
  //   'Ask again later',
  //   'Better not tell you now',
  //   'Cannot predict now',
  //   'Concentrate and ask again',
  //   `Don't count on it`,
  //   'My reply is no',
  //   'My sources say no',
  //   'Outlook not so good',
  //   'Very doubtful'
  //   ];
  
  //   // choose random compliment
  //   let randomIndex = Math.floor(Math.random() * compliments.length);
  //   let randomCompliment = compliments[randomIndex];
  
  //   res.status(200).send(randomCompliment);
    
  // });
  
//     // choose random compliment
//     let randomIndex = Math.floor(Math.random() * compliments.length);
//     let randomCompliment = compliments[randomIndex];
  
//     res.status(200).send(randomCompliment);
    
//   });



app.listen(4004, console.log('Server is running on 4004'))