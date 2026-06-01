let users = []
let posts = []

async function fetchData() {
    const userData = await fetch("https://jsonplaceholder.typicode.com/users")
    const postsData = await fetch("https://jsonplaceholder.typicode.com/posts")
    users = await userData.json()
    posts = await postsData.json()
}

async function setData(){
    await fetchData();

    const postUser = users.map((usu) => {
        return {"id": usu.id, posts: posts.filter(y => y.userId == usu.id)}
    })
    console.log(postUser)
}

setData();
