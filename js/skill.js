(function($) {
    "use strict";
    
      $.fn.andSelf = function() {
        return this.addBack.apply(this, arguments);
      }
    
      $(".determinate").each(function(){
        var width = $(this).text();
        $(this).css("width", width)
          .empty()
          .append('<i class="fa fa-circle"></i>');                
      });
}(jQuery));