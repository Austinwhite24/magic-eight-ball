const database = []


module.exports = {
    getFortune: (req, res) => {
       const fortunes = ["It is certain",

       "It is decidedly so",
       "Without a doubt",
       "Yes, definitely",
       'You may rely on it',
       'As I see it, yes',
       'Most likely',
       'Outlook good',
       'Yes',
       "Totally Man",
       'No',
       'You Bet Lol',
       'Maybe sometime bro',
       'Signs point to yes',
       'I cant think right now try again',
       'Ask again later',
       'Better not tell you now',
       'Cannot predict now',
       'Concentrate and ask again',
       `Don't count on it`,
       'My reply is no',
       'My sources say no',
       'Outlook not so good',
       'Very doubtful'
       ];
     
       
       let randomIndex = Math.floor(Math.random() * fortunes.length);
       let randomFortune = fortunes[randomIndex];
     
       res.status(200).send(randomFortune);
       
     },
     deleteResponse: (req, res) => {
      let index = database.findIndex(elem => data.id === +req.params.id)
      database.splice(index, 1)
      res.status(200).send(database)
       res.status(200).send(console.log('hi'))

     },
     saveFortune: (req, res) => {
       const {data} = req.body
       database.push(data)
       res.status(200).send(database)
         
     },
     sendHistory: (req, res) => {
      res.status(200).send(database)

     },


    }



