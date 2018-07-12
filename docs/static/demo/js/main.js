
(function() {
  var demo = $('#demo');

  $('a').on('click', function(event) {
    var _this = this;
    var _rel = _this.rel;
    var _rev = _this.rev;

    if (_rel === 'size') {
      event.preventDefault();

      if (demo[0].tagName.toLowerCase() === 'form' || demo.hasClass('pages')) {
        demo.removeClass('small large').addClass(_rev);
      };

      demo.find('input').removeClass('small large').addClass(_rev);
      demo.find('select').removeClass('small large').addClass(_rev);
      demo.find('.button').removeClass('small large').addClass(_rev);
      demo.find('.form').removeClass('small large').addClass(_rev);
      demo.find('.pages').removeClass('small large').addClass(_rev);
    };
  });
})();