
hexo.extend.tag.register('currency', function(args, content){
  var foreign_currency_value = args[0];
  var foreign_currency_symbol = args[1];
  var base_currency_value = args[2];
  var base_currency_symbol = args[3];

  var html = `<span class='currency'>
                <span class='currency-foreign'>${foreign_currency_value} ${foreign_currency_symbol}</span>
                <span class='currency-base'>${base_currency_value} ${base_currency_symbol}</span>
              </span>`;
  return html;
});
