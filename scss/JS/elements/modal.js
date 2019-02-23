import $ from 'jquery';

export function modals() {
    let check ;
    $.fn.modal = function(value) {
        if (value === "show") {
            $(this).css("display","block");
            check = true
        }
        else if (value === "hide"){
            $(this).css("display","none");
            check = false
        }
    };

    $(".btn-modal").click(function (e) {
        console.log("oui");
        const target = $(this).data("target");
        if (target){
            $(target).modal("show")
        }
    });

    $(".modal-sandbox").click(function () {
        console.log("ui");

        const target = $(this).data("target");
        $(target).modal("hide")
    });

    $(".popin-dismiss").click(function () {
        console.log("oi");

        const target = $(this).data("target");
        $(target).modal("hide")
    });

    $(document).keydown(function (e) {
        console.log("ou");

        if (e.keyCode === 27){
            if (check === true){
                $(".modal").modal("hide")
            }
        }
    });
}