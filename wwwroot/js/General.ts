///<reference path="../js/site.js"/>

$(document).ready(() => {
    var general: General = new General();
});

class General {
    private btn1: JQuery = $("#button1")
    constructor() {
        this.btn1.click()
    }
}