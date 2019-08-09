// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners() {
	// Cuando se envia el formulario
	document.querySelector('#formulario').addEventListener('submit', agregarTweet);

	// Boorar Tweets
	listaTweets.addEventListener('click', borrarTweet);
}

// Funciones

// Añadir Tweet del formulario
function agregarTweet(e) {
	e.preventDefault();
	// Leer el valor del textarea
	const tweet = document.getElementById('tweet').value;
	// Crear botón de eliminar
	const botonBorrar = document.createElement('a');
	botonBorrar.classList = 'borrar-tweet';
	botonBorrar.innerText = 'X';

	// Crear elemento y añadirle el contenido a la lista
	const li = document.createElement('li');
	li.innerText = tweet;
	// Añade el botón de boorar al tweet
	li.appendChild(botonBorrar);
	// Añade el tweet a la lista
	listaTweets.appendChild(li);

	// Añadir a Local Storage
	agregarTweetLocalStorage(tweet);
}
// Elimina el Tweet del Dom
function borrarTweet(e) {
	e.preventDefault();
	if (e.target.className === 'borrar-tweet') {
		console.log(e.target.parentElement.remove());
		alert('Tweet Eliminado');
	}
}
// Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
	let tweets;
	tweets = obtenerTweetsLocalStorage();
	// Añadir el nuevo tweet
	tweets.push(tweet);
	// Convertir de string a arreglo para local storage
	localStorage.setItem('tweets', JSON.stringify(tweets));
}

function obtenerTweetsLocalStorage() {
	let tweets;
	// Revisamos los valores de local storage
	if (localStorage.getItem('tweets') === null) {
		tweets = [];
	} else {
		tweets = JSON.parse(localStorage.getItem('tweets'));
	}
	return tweets;
}
