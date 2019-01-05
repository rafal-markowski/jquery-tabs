import * as $ from 'jquery';
import '../styles/main.scss';

$(() => {
    const classes = {
        js: 'tabs--js',
        noJs: 'tabs--no-js'
    };
    const $tabs = $('.tabs');
    
    $tabs.addClass(classes.js).removeClass(classes.noJs);
    
    $('#js').on('click', e => {
        e.preventDefault();
        $tabs.addClass(classes.js).removeClass(classes.noJs);
    });

    $('#no-js').on('click', e => {
        e.preventDefault();
        $tabs.addClass(classes.noJs).removeClass(classes.js);
    })
});