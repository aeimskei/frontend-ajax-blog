// =============================================
// POST/Create all Posts
// =============================================

createPost = (title, content) => {
  axios.post(`${baseURL}/posts`, { title, content })
    .then(response => {
      window.location.replace('index.html')
    })
    .catch(error => {
      console.log(error);
    })
}

createPostForm = () => {
  let newPostForm = document.querySelector('#create-post-button')
  $(newPostForm).click(event => {
    // console.log('you clicked me')
    $('#post-form').remove()
    $('#view-post').detach()
    $('#view').append(`
      <form id="post-form" action="/posts/">
        <div class="form-group">
          <label for="title">Title</label>
          <input id="new-post-title" type="text" class="form-control" value="">
        </div>
        <div class="form-group">
          <label for="title">Content</label>
          <textarea id="new-post-content" type="text" rows="6" class="form-control"></textarea>
        </div>
        <button id="submit-button" type="button" class="btn btn-info btn-large">Submit</button>
      </form>
    `)

    $('#submit-button').click(() => {
      let newTitle = document.querySelector('#new-post-title').value
      let newContent = document.querySelector('#new-post-content').value
      createPost(newTitle, newContent)
    })
  })
}