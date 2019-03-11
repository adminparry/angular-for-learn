var ghpages = require('gh-pages');
 
ghpages.publish('_book', function(err) {
	if(err)console.info(err)
		else console.log('发布成功')
});