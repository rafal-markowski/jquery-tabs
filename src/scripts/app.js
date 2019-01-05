import * as $ from 'jquery';
import changeTabs from './jquery-tabs';
import '../styles/main.scss';

$.fn.changeTabs = changeTabs;

$(() => {
    const classes = {
        js: 'tabs--js',
        noJs: 'tabs--no-js'
    };
    const $tabs = $('.tabs');
    
    $tabs.addClass(classes.js).removeClass(classes.noJs);
    $tabs.changeTabs({
        linkSelector: '.tabs-header__link',
        activeLinkClass: 'tabs-header__link--active',
        itemSelector: '.tabs-content__item',
        activeItemClass: 'tabs-content__item--active'
    });

    $('#js').on('click', e => {
        e.preventDefault();
        $tabs.addClass(classes.js).removeClass(classes.noJs);
    });

    $('#no-js').on('click', e => {
        e.preventDefault();
        $tabs.addClass(classes.noJs).removeClass(classes.js);
    })
});