/* 

This is the main javascript file.
Organize javascript files into modules (in modules folder) and import them here 

Example: 
    import Person from './modules/Person';
    var jane = new Person('Jane', 'Blue');
    jane.greet();


module/Person.js:
    class Person {
        constructor(fullName, favColor) {
            this.name = fullName;
            this.favoriteColor = favColor;
        }

        greet() {
            console.log("Hello from Person");
        }
    }

    export default Person;
*/;

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%"); // feature items
new RevealOnScroll($(".testimonial"), "70%"); //testimonials
