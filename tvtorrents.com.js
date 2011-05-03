// javascript run on every tvtorrents.com page

$(function(){
  $("tr:contains('720p') input[type='checkbox']").each(function(idx, el){$(el).attr('checked','checked')});
});
