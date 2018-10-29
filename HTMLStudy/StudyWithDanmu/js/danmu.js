$(document).ready(function () {
    var text = '';
    $(".send").click(function () { 
        text = $("<span style='position:absolute;'>" + $('.input-text').val() + "</span>");
        $('.danmu-text').append(text);
        moveobj(text);
        $(".input-text").val('');       
    });
    $(".del").click(function () { 
        $('.danmu-text').empty();       
    });

    var moveobj = function(obj){
        var _left = $('.screen').width() - obj.width();
        var _top = Math.floor(Math.random() * $('.screen').height()) + 60;
        obj.css({
            left: _left,
            top: _top,
            color: getRandomColor()
        });
        var time = 10000 + 10000 * Math.random();

        obj.animate({
            left: "-" + _left + "px"
        },time,function(){
            obj.remove();
        })
    } 

    var getRandomColor = function() {
	    return '#' + (function(h) {
	      return new Array(7 - h.length).join("0") + h
	    })((Math.random() * 0x1000000 << 0).toString(16))
	}
});