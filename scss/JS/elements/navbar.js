import $ from 'jquery';


export function navCollapse() {
    let collapsed = $(".navbar-collapse");
    let divSize = collapsed.height();

    let collapseBtn = $(".navbar-toggler");

    $(window).resize(function() {
        const screenSize = $(window).width();
        if(screenSize > 992){
            collapsed.css("display", "");
            collapsed.css("height", "");
        }

        // if(screenSize <= 992){
        //     collapse();
        // } else {
        //     uncollapse();
        // }
    });

    collapseBtn.click(function () {
        if(collapsed.css('display') === "none") {
            uncollapse();
        } else {
            collapse();
        }

    });

    function collapse() {
        divSize = collapsed.height();
        console.log(divSize);
        collapsed.animate({
           height: 0,
        }, 500, function () {
            collapsed.css("display", "none");
            collapsed.css("height", divSize);
        });
        //collapsed.css("height", 0);
    }

    function uncollapse(){
        divSize = collapsed.height();
        collapsed.css("height", 0);
        collapsed.css("display", "flex");
        collapsed.animate({
            height: divSize,
        }, 500, function () {
            collapsed.css("height", divSize);
        });
        //collapsed.css("height", "inherit");
    }
}
