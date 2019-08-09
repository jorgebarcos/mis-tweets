// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListeners();

function eventListeners() {
	// Cuando se envia el formulario
	document.querySelector('#formulario').addEventListener('submit', agregarTweet);

	// Boorar Tweets
	listaTweets.addEventListener('click', borrarTweet);

	// Contenido cargado
	document.addEventListener('DOMContentLoaded', localStorageListo);
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

// Mostrar datos de LocalStorage en la lista
function localStorageListo() {
	let tweets;

	tweets = obtenerTweetsLocalStorage();

	tweets.forEach(function(tweet) {
		// Crear botón de eliminar
		const botonBorrar = document.createElement('a');
		botonBorrar.classList = 'borrar-tweet';
		botonBorrar.innerText = 'X';

		// Crear elemento y añadirle el contenido a la lista
		const li = document.createElement('li');
		li.innerText = tweet;
		// Añade el botón de borrar al tweet
		li.appendChild(botonBorrar);
		// Añade el tweet a la lista
		listaTweets.appendChild(li);
	});
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

// Comprobar que haya elementos en localstorage, retorna un arreglo

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
