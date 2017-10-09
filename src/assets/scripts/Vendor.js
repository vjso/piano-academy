//for browsers that don't support svg, we send png sprite by convering svg to png using gulp-svg2png plugin
// use modernizr library to inspect browser for features it has and customize modernizr using gulp 
// see modernizr.js gulp task 
import "../../temp/scripts/modernizr"; 

//for browsers that don't support <picture> and srcset attribute use picturefill
import 'picturefill'; 

//for lazyloading images use lazysizes
import 'lazysizes'; 

