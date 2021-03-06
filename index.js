var fs = require('fs');
var path = require('path');
var util = require('hexo-util');
var publicDir = hexo.public_dir;
var sourceDir = hexo.source_dir;
var route = hexo.route;

var parseTag = function(args,content){
  var imageName = args[0]; //images name
  var classes = args[1] || "";
  var imgAttr = args[2] || "{}";
  classes = classes.split(',');
  imgAttr = JSON.parse(imgAttr);

  imgAttr.src   = hexo.config.images_root + 'images/' + imageName;
  imgAttr.class = classes.join(' ');

  return util.htmlTag('img', imgAttr);
};

hexo.extend.tag.register('qnimg', parseTag);