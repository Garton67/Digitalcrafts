const postsUL = document.getElementById("postsUL")


for(let index = 0; index < posts.length; index++) {

    const post = posts[index]

    // console.log(posts[index].hobby) SAME AS BELOW

    const postItem = `
        <li>
            <p>${post.title}, ${post.body}</p>
        </li>
    `


    postsUL.insertAdjacentHTML('beforeend', postItem)
    
        
        
        