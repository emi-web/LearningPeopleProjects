const team = {
  _players: [
    { firstName: "Alice", lastName: "Johnson", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 30 },
    { firstName: "Charlie", lastName: "Brown", age: 22 },
  ],
  _games: [
    { opponent: "Tigers", teamPoints: 42, opponentPoints: 38 },
    { opponent: "Lions", teamPoints: 35, opponentPoints: 40 },
    { opponent: "Bears", teamPoints: 50, opponentPoints: 45 },
  ],

  // Getter para jugadores
  get players() {
    return this._players;
  },

  // Getter para juegos
  get games() {
    return this._games;
  },

  // Método para agregar jugadores
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(player);
  },

  // 👇 Nuevo método para agregar juegos
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

// 👇 Agregamos un nuevo jugador (solo para ejemplo)
team.addPlayer("Bugs", "Bunny", 76);

// 👇 Agregamos un nuevo juego
team.addGame("Titans", 100, 98);

// 👇 Verificamos los resultados
console.log(team._games);
