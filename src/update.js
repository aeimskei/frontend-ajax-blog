// =============================================
// PUT/Update Post 
// =============================================

updatePost = (title, content, id) => {
  axios.put(`${baseURL}/posts/${id}`, { title, content })
    .then(response => {
      window.location.reload()
    })
    .catch(error => {
      console.log(error);
    })
}