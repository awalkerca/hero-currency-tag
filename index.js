
hexo.extend.tag.register('currency', function(args, content){
  var foreign_currency;
  var base_currency;

  var html = `<span class='currency'>
                <span class='currency-foreign'>${foreign_currency}</span>
                <span class='currency-base'>${base_currency}</span>
              </span>`;
  return html;
});
