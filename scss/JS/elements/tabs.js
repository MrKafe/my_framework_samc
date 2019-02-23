import $ from 'jquery';

export function tabsGest() {
    const navTabs = $(".nav-tabs");

    navTabs.each(function (index, navTab) {
        const tabs = $(navTab).children("li:not(.dropdown)");

        tabs.each(function (index, tab) {
            //console.log($(tab).data('target'));
            const target = $($(tab).data('target'));

            if (!$(tab).hasClass('active')) {
                $(target).hide();
            }

            $(tab).click(function() {
                tabs.each(function(index, tab) {
                    const target = $($(tab).data('target'));

                    $(target).hide();
                    $(tab).removeClass('active');
                });

                $(tab).addClass('active');
                $(target).show();
            });
        });
    });
}
