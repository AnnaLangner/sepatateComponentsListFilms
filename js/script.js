var Movie = React.createClass ({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},
	render: function () {
		return (
			React.createElement('li', {},
				React.createElement(MovieImage, {src: movie.src, alt: movie.title}),
				React.createElement(MovieTitle, {title: movie.title}),
		    	React.createElement(MovieDesc {desc: movie.desc})
			);
		)
	},
});


ReactDOM.render(element, document.getElementById('app'));