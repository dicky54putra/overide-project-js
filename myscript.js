(function ($) {
  $(
    ".archive.post-type-archive-product .woocommerce-loop-product__title a"
  ).each(function () {
    var obj = $(this);
    var text = obj.html();
    var parts = text.split(" ");
    var replace = '<span class="firstWord">' + parts[0] + "</span><br />";
    parts.shift();
    $.each(parts, function (key, value) {
      replace += " " + value;
    });
    obj.html(replace);
  });
})(jQuery);
