
hexo.extend.tag.register('currency', function(args, content){
  var foreign_currency = args[0];
  var base_currency = args[1];

  var html = `<span class='currency'>
                <span class='currency-foreign'>${foreign_currency}</span>
                <span class='currency-base'>${base_currency}</span>
              </span>`;
  return html;
});
