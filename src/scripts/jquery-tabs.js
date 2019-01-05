import * as $ from 'jquery';

export default function({ linkSelector, activeLinkClass, itemSelector, activeItemClass }) {
    return this.each(function() {
        const $tabs  = $(this);
        const $links = $tabs.find(linkSelector);
        const $items = $tabs.find(itemSelector);

        $links.on('click', e => {
            e.preventDefault();

            $tabs.find(`.${activeLinkClass}`).removeClass(activeLinkClass);

            const $activeLink = $tabs.find(e.target).addClass(activeLinkClass);
            const target = $activeLink.attr('data-target');

            $items.each(function() {
                const $el = $(this);
                
                if($el.attr('data-id') === target) {
                    $el.addClass(activeItemClass);
                } else {
                    $el.removeClass(activeItemClass);
                }
            });
        });
    });
}