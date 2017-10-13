import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header");
        this.primaryNav = $(".primary-nav");
        this.siteHeaderButtonContainer = $(".site-header__btn-container");
        this.headerTriggerElement = $(".large-hero__title");

        this.createHeaderWaypoint();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0], // the dom element, in jquery object the first element in array is pointer to the dom element
            handler: function(direction) {
                if(direction == "down") {
                    that.siteHeader.addClass("site-header--dark");
                    that.primaryNav.addClass("primary-nav--sticky-header");
                    that.siteHeaderButtonContainer.addClass("site-header__btn-container--sticky-header");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                    that.primaryNav.removeClass("primary-nav--sticky-header");
                    that.siteHeaderButtonContainer.removeClass("site-header__btn-container--sticky-header")
                }
            }
        });
    }
}

export default StickyHeader;