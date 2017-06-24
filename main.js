// Create the 'main' state that will contain the game
var mainState = {
	preload: function(){
		// To be executed at the start
		// Images and sounds etc
	},

	create: function(){
		// Called after preload
		// Setup the game, display sprites etc
	},

	update: function(){
		// Called 60times per second
		// Contains the game logic
	},
};

// Initialise and create the game
var game = new Phaser.Game(600,400);

// Add the 'mainState' and call it 'main'
game.state.add('main', mainState);

// Start up the state to trigger the game
game.state.start('main');