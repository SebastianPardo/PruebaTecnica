$(document).ready(function () {
    var general = new General();
});
var General = (function () {
    function General() {
        this.btn1 = $("#button1");
        this.btn1.click();
    }
    return General;
}());
