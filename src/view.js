const baseURL = 'https://thawing-plateau-67692.herokuapp.com'

document.addEventListener('DOMContentLoaded', () => {
  init();
  createPostForm();
});

const init = (event) => {
  // console.log('Initialize!')
  getAllPosts()
}

// =============================================
// GET/Read all Posts
// =============================================

const getAllPosts = () => {
  axios.get(`${baseURL}/posts`)
    .then(response => {
      let posts = response.data.data
      // console.log('get all the darn posts!', posts)
      blogRoll(posts)
    })
    .catch(error => {
      console.log(error);
    })
};

const blogRoll = posts => {
  let blogs = document.querySelector('#list-group')
  posts.forEach(post => {
    $('#list-group-item').detach()
    $(blogs).append(`
      <a href="#/posts/${post.id}"
      class="list-group-item list-group-item-action">
      ${post.title}
      </a>
    `)
  })
  let sideBar = document.querySelectorAll('.list-group-item')
  sideBar.forEach((post, index) => {
    post.addEventListener('click', event => {
      sideBar.forEach(post => {
        post.classList.remove('active')
      })
      post.classList.add('active')
      let postId = event.target.href.split('/posts/')
      let id = postId[1]
      blogContent(view, id)
      $('#view-post').detach()
      $('#post-form').remove()
    })
  })
}