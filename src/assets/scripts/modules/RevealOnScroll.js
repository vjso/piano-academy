import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(itemsToReveal, offsetPercentage){
        this.itemsToReveal = itemsToReveal;
        this.offsetPercentage = offsetPercentage;

        this.hideInitially();
        this.createWayPoints();

    }

    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
    }

    createWayPoints() {
        var that = this; //store reference of RevealOnScroll instance
        this.itemsToReveal.each(function(){
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: that.offsetPercentage // item will be revealed 15% from bottom of the view port
            });
        });
    }
}

export default RevealOnScroll;