///<reference path="../js/site.js"/>

$(document).ready(() => {
    var general: General = new General();
});

class General {
    private btn1: JQuery = $("#button1")
    private startP1: JQuery = $("#spoint1")
    private startP2: JQuery = $("#spoint2")
    private startP3: JQuery = $("#spoint3")
    private startP4: JQuery = $("#spoint4")
    private end1: JQuery = $("#epoint1")
    private end2: JQuery = $("#epoint2")
    private end3: JQuery = $("#epoint3")
    private end4: JQuery = $("#epoint4")
    constructor() {
        this.btn1.click(e => {
            var obj = {
                subida1: this.startP1.val(),
                subida2: this.startP2.val(),
                subida3: this.startP3.val(),
                subida4: this.startP4.val(),
                bajada1: this.end1.val(),
                bajada2: this.end2.val(),
                bajada3: this.end3.val(),
                bajada4: this.end4.val()
            }
            $.getJSON('getBill', obj).done(bill => {
                alert('total = ' + bill.total + ', punto 2 = ' + bill.factura2 + ', punto 3 = ' + bill.factura3 + ', punto 4 = ' + bill.factura4)
            })
        })
    }
}