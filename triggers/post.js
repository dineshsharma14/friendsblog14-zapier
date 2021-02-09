const listPosts = (z, bundle) => {
    z.console.log("Checking new posts!");
    const promise = z.request("https://friendsblogz.herokuapp.com/api/posts/all");
    return promise.then(response => response.json);
}

module.exports = {
    key: 'post',
    noun: 'Post',
    display: {
        label: 'New Post',
        description: 'Trigger when a new post is added.'
    },
    operation: {
        perform: listPosts,
        sample: {
            id: 1,
            content: "body",
            title: "title",
            username: "name"
        }
    }
}