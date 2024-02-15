const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    like: 9122,
    repost: 10,
  },
  // ... autres posts
];

const postUserControl = {
  getAllPosts: (req, res) => {
    res.json(posts);
  },
  getPostById: (req, res) => {
    const postId = req.params.id;
    const post = posts.find((p) => p.id === parseInt(postId));
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "Post non trouvé" });
    }
  },
  createPost: (req, res) => {
    const newPost = {
      userId: req.body.userId,
      id: posts.length + 1,
      title: req.body.title,
      body: req.body.body,
      url: req.body.image,
      thumbnailUrl:req.body.image,
    };

    posts.push(newPost);
    // res.status(201).json(newPost);
    res.json(posts);
  },
  updatePost: (req, res) => {
    // Logique pour mettre à jour un post existant
    const postId = req.params.id;
    const postIndex = posts.findIndex((p) => p.id === parseInt(postId));
  
    if (postIndex !== -1) {
      posts[postIndex] = {
        ...posts[postIndex],
        title: req.body.title || posts[postIndex].title,
        body: req.body.body || posts[postIndex].body,
        url: req.body.url || posts[postIndex].url,
        thumbnailUrl: req.body.thumbnailUrl || posts[postIndex].thumbnailUrl,
      };
      res.json(posts[postIndex]);
    } else {
      res.status(404).json({ message: "Post non trouvé" });
    }
  },
  deletePost: (req, res) => {
    // Logique pour supprimer un post
    const postId = req.params.id;
    const postIndex = posts.findIndex((p) => p.id === parseInt(postId));
  
    if (postIndex !== -1) {
      posts.splice(postIndex, 1);
      res.json({ message: "Post supprimé avec succès" });
    } else {
      res.status(404).json({ message: "Post non trouvé" });
    }
  },
};

module.exports = postUserControl;
