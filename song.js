/*
 *
 * This is Homework #1: Data Types
 *
 */


// this is an object constructor for songs
function SongConstructor (name,artist,isBand=false,members=null, genre, year, durationInSeconds, structure) {
	// assigning attributes of the constructor to the relevant keys
	this.name = name;
	this.artist = artist;
	this.isBand = isBand;
	this.members = members;
	this.genre = genre;
	this.year = year;
	this.durationInSeconds = durationInSeconds;
	this.structure = structure;

	// creating function to log the song attributes
	this.sayName = () => {
		console.log("Name: " + this.name);
	};
	this.sayArtist = () => {
		console.log("Artist: " + this.artist);
	};
	this.sayIsBand = () => {
		console.log("Is Band: " + this.isBand);
	};
	this.sayMembers = () => {
		console.log("Members: ", this.members);
	};
	this.sayGenre = () => {
		console.log("Genre: " + this.genre);
	};
	this.sayYear = () => {
		console.log("Created in year: " + this.year);
	};
	this.sayStructure = () => {
		console.log("The song has structure: " + this.structure);
	};
};
var membersObject = {
	1: 'Chester Bennington',
	2: 'Mike Shinoda',
	3: 'Others'
};
var favouriteSong = new SongConstructor('In The End', 'Linkin Park',true,membersObject,'Rock', '2001', 216, ['Verse 1','Chorus','Verse 2','Chorus','Hook','Chorus']);
favouriteSong.sayName();
favouriteSong.sayArtist();
favouriteSong.sayIsBand();
favouriteSong.sayMembers();
favouriteSong.sayGenre();
favouriteSong.sayYear();
favouriteSong.sayStructure();
