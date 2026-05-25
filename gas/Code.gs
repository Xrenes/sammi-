function doGet(e) {
  var valid = ['index', 'about', 'work', 'timeline', 'story'];
  var page  = (e.parameter.page || 'index').toLowerCase();
  var target = valid.indexOf(page) !== -1 ? page : 'index';

  return HtmlService.createTemplateFromFile(target)
    .evaluate()
    .setTitle('Sayed Ifti Ahmed | Engineer & Developer')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
