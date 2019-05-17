var Movie = React.createClass ({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function () {
		return (
			React.createElement('li', {},
				React.createElement(MovieImage, {src: movie.src, alt: movie.title}),
				React.createElement(MovieTitle, {title: movie.title}),
		    	React.createElement(MovieDesc, {desc: movie.desc})
			)
		)
	},
});

var MovieImage = React.createClass ({
	propTypes: {
		src: React.PropTypes.string,
		alt: React.PropTypes.string,
	},
	render: function() {
		return (React.createElement('img', {src: this.props.movie.src, alt: this.props.movie.title}))
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string,
	},
	render: function() {
		return (React.createElement('h2', {}, this.props.movie.title))
	},
});

var MovieDesc = React.createClass({
	propTypes: {
		desc: React.PropTypes,string,
	},
	render: function() {
		return (React.createElement('p', {}, this.props.movie.desc))
	},
});

var MovieList = React.createClass({
	render: function() {
		var moviesElements = movies.map(function (movie) {
			return React.createElement(Movie, {key: movie.id, movie: movie});
		}),
		return (React.createElement('div', {},
			React.createElement('h1', {}, 'List of films'),
			React.createElement('ul', {}, moviesElements))
		);
	}
});

var movies = [
	{
		id: 1,
		src: './images/LordOfTheRings.jpg',
		title: 'The Lord of the Rings',
		desc: 'Set in the fictional world of Middle-earth, the hobbit Frodo Baggins (Elijah Wood) he and the Fellowship embark on a quest to destroy the One Ring.'
	},
	{
		id: 2,
		src: './images/GreenMile.jpg',
		title: 'The Green Mile',
		desc: 'A retired prison guard tells her friend about an extraordinary man who was sentenced to death for the murder of two 9-year-old girls.'
	},
	{
		id: 3,
		src: './images/Deadpool.jpg',
		title: 'Deadpool',
		desc: 'A former soldier of special forces is subjected to a dangerous experiment. He soon releases his alter ego and starts hunting for a man who almost destroyed his life.'
	}

];

var element = React.createElement(MoviesList);
ReactDOM.render(element, document.getElementById('app'));