import $ from 'jquery';


export function toolTips() {
    let title;
    let defaultTitle;
    $('[data-toggle="tooltip"]').mouseover(function (event) {
        title = event.currentTarget.title;
        if(title === ""){
            event.currentTarget.classList.add("no-title");
        } else if (event.currentTarget.classList.contains("no-title")) {
            event.currentTarget.classList.remove("no-title");
        }
        event.currentTarget.dataset['originalTitle'] = title;
        defaultTitle = event.currentTarget.dataset['originalTitle'];
        event.currentTarget.title="";
    });
    $('[data-toggle="tooltip"]').mouseout(function (event) {
        event.currentTarget.title = defaultTitle;
    });
}