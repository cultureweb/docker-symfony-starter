// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import getTestMessage from './js/getTestMessage';
import 'jquery-slim';
import 'bootstrap';
import './js/bootstrap.bundle.js';


// start the Stimulus application


// console.log('Hello Webpack Encore! Edit me in assets/app.js!');
console.log(getTestMessage(5));


