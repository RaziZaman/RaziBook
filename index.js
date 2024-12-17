const usersUrl = 'https://jsonplaceholder.typicode.com/users/';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    fetch(usersUrl)
            .then(response => response.json())
            .then(users => {
                fetch(postsUrl)
                    .then(response => response.json())
                    .then(posts => {
                        const webpage = document.getElementById('user-posts');
                        const list = {};
                        posts.forEach(x => {
                            list[x.userId] = x.body;
                        });
                        users.forEach(x => {
                            const address = x.address;
                            const userPost = list[x.id];
                            webpage.innerHTML += `
                                <div class="user-post">
                                <div class="user-info">
                                    <h2>${x.name}</h2>
                                    <h3>@${x.username}</h3>
                                    <p><span class="highlight">Email:</span> ${x.email}</p>
                                    <p><span class="highlight">City:</span> ${address.city}</p>
                                </div>
                                <div>
                                    <p><span class="highlight">Phone:</span> ${x.phone}</p>
                                    <p><span class="highlight">Zipcode:</span> ${address.zipcode}</p>
                                </div>
                                <p class="post-body"><strong>Latest Post:</strong> ${userPost}</p>
                                </div>
                            `;
                        });
                });
    })