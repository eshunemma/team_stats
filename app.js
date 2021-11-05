const team = {
  _players: [
    {
      firstName: 'Kevin',
      lastName: 'Eshun',
      age: 17
    },
    {
      firstName: 'Derek',
      lastName: 'Eshun',
      age: 25
    },
    {
      firstName: 'Emmanuel',
      lastName: 'Obeng',
      age: 30
    }
  ],
  _games: [
    {
      opponent: 'ManU',
      teamPoints: 19,
      opponentPoints: 20,
    },
    {
      opponent: 'lakers',
      teamPoints: 90,
      opponentPoints: 80,
    },
    {
      opponent: 'Hawks',
      teamPoints: 25,
      opponentPoints: 15,
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) { 
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
   this.players.push(player);  
  },

  addGame(opponent, teamPoints, opponentPoints){
     const game = {
       opponent: opponent,
       teamPoints: teamPoints,
       opponentPoints: opponentPoints,
     }
     this.games.push(game);
  }
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Steph', 'Curry', 28);

team.addGame('Ampe', 5, 12);
team.addGame('racing', 1, 19);
team.addGame('jumping', 12, 100);

//console.log(team.players);
console.log(team.games);