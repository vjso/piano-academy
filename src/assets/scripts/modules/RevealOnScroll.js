import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(){
        this.itemsToReveal = $(".feature-item");

        this.hideInitially();
        this.createWayPoints();

    }

    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
    }

    createWayPoints() {
        this.itemsToReveal.each(function(){
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: "85%" // item will be revealed 15% from bottom of the view port
            });
        });
    }
}

export default RevealOnScroll;