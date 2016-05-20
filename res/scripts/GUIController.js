function GUIController(o) {
    this.o = o;
    this.rgb = ['red', 'green', 'blue'];
}

GUIController.prototype.clear = function() {
    this.o.html('');
};

GUIController.prototype.appendRes = function(res) {
    var name = res.name,
        rating = res.rating,
        imagePath = res.image_path,
        x = Math.floor((Math.random() * window.innerWidth)),
        y = Math.floor((Math.random() * window.innerHeight - 20)),
        r = Math.floor((Math.random() * 360)),
        c = Math.floor((Math.random() * 3)),
        $resHtml = $('<h3/>',{
            class: 'title ' + this.rgb[c],
            html: name
        }).css({
            top: y, 
            left: x
        }).rotate(r).appendTo(this.o);
};

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};