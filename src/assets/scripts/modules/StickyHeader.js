import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.siteHeader = $(".site-header");
        this.primaryNav = $(".primary-nav");
        this.siteHeaderButtonContainer = $(".site-header__btn-container");
        this.headerTriggerElement = $(".large-hero__title");
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");

        this.createHeaderWaypoint();
        this.cratePageSectionWaypoints(); // for highlighting menu item when page is scrolled to that section
        this.addSmoothScrolling();

    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
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

    cratePageSectionWaypoints(){
        var that = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }                    
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if(direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }                    
                },
                offset: "-20%"
            });
        });
    }
}

export default StickyHeader;