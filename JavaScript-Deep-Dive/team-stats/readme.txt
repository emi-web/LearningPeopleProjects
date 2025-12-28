

We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.


1.
Let’s make a data structure to store the information about our team. Declare a const variable called team and set it to an empty object.

2.
Our team has players and the games that they have played. Let’s represent both of these by adding two properties to your team object. Add a _players property and a _games property and initialize both to empty arrays.

3.
Next, populate the empty _players array with three players. Each player should be an object containing three properties: firstName, lastName, and age. Put each player on a new line to prevent the line from getting too long.

4.
Let’s do the same for our _games array. Populate the empty array with three games. Each game should be an object containing three properties: opponent, teamPoints, and opponentPoints.

Getting Data
5.
Create a getter method called players to retrieve the _players property. Inside the getter method, return the _players property.

For the scope of this project, we won’t need to create setter methods, because we don’t want anyone to change the data saved to the properties.

6.
Create another getter method called games to retrieve the _games property. Inside the getter method, return the _games property.

Adding Data
7.
We want to add a new player to our team. Add an .addPlayer() method to the team object. This method should take in three parameters: newFirstName, newLastName, and newAge.

Inside the method, create a player object by setting the three parameters to be the values for the object’s three properties: firstName, lastName, and age. Finally, add the player object to the team object’s _players array.

8.
Below the team object, let’s try out our new .addPlayer() method to add a new player: name Bugs Bunny, age 76.

Log the team object’s _players property to check that our new player was added.

9.
The scorekeeper has some new information for us! Create a method for adding game results called addGame that takes three parameters: newOpponent, newTeamPoints, and newOpponentPoints.

Inside the .addGame() method, create a game object by setting the three parameters to be the values for the object’s three properties: opponent, teamPoints, and opponentPoints. Add the game object to the team object’s _games array.

10.
Finally, below our team object, use the .addGame() method to add a record of a new game. Our team played against the 'Titans' where we scored 100 points and the opponent scored 98 points.

Log the team object’s _games property to check that our new game record was properly added.