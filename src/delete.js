// =============================================
// DELETE/Destroy Post
// =============================================

deletePost = id => {
  axios.delete(`${baseURL}/posts/${id}`)
    .then(response => {
      window.location.reload()
    })
    .catch(error => {
      console.log(error);
    })
}