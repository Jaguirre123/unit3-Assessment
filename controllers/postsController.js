var request = require('request');
// var api = 'https://jsonplaceholder.typicode.com/posts';
function allPosts(req, res) {
    request(
        'https://jsonplaceholder.typicode.com/posts',
        function(err, response, posts) {
            res.render('posts', {posts: JSON.parse(posts)})
        }
    )
}


module.exports = {
    allPosts
};