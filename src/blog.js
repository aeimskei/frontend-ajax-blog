blogContent = (view, id) => {
  axios.get(`${baseURL}/posts/${id}`)
    .then(response => {
      let posts = response.data.data

      $(view).append(`
        <section id="view-post">
          <header>
            <h2 id="post-title">${posts.title}</h2>
          </header>
          <article>
            <p id="post-body">${posts.content}</p>
          </article>
          <aside class="my-4">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="btn btn-primary mr-1" id="edit-post" href="#">Edit</a>
              </li>
              <li class="nav-item">
                <a class="btn btn-danger" id="delete-post" href="#">Delete</a>
              </li>
            </ul>
          </aside>
        </section>
      `)

      $('#delete-post').click(() => {
        deletePost(id)
      })

      $('#edit-post').click(() => {
        $('#post-form').remove()
        $('#view-post').detach()
        $(view).append(`
          <form id="post-form" action="/posts/">
            <div class="form-group">
              <label for="title">Title</label>
              <input id="edit-post-title" type="text" class="form-control" value="${posts.title}">
            </div>
            <div class="form-group">
              <label for="title">Content</label>
              <textarea id="edit-post-content" type="text" rows="6" class="form-control">${posts.content}</textarea>
            </div>
            <button data-id="${id}" id="update-button" type="button" class="btn btn-info btn-large">Update Post</button>
          </form>
        `)

        $('#update-button').click(() => {
          let updateTitle = document.querySelector('#edit-post-title').value
          let updateContent = document.querySelector('#edit-post-content').value

          // cannot be left blank when udpate, so leave previous content
          if (!updateTitle || !updateContent) {
            updateTitle = `${posts.title}`
            updateContent = `${posts.content}`
            alert('Error! Cannot leave Updates blank.')
          }

          updatePost(updateTitle, updateContent, id)
        })
      })
    })
}