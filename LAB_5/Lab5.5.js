class APICaller {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
    async get(endpoint) {
      try {
        const response = await fetch(`${this.baseUrl}/${endpoint}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
  class Comment {
    constructor(apiCaller) {
      this.apiCaller = apiCaller;
    }
    async getAll() {
      return this.apiCaller.get('comment');
    }
  
    async getOne(commentId) {
      return this.apiCaller.get(`comment/${commentId}`);
    }
  }
  
  class Post {
    constructor(apiCaller) {
      this.apiCaller = apiCaller;
    }
  
    async getAll() {
      return this.apiCaller.get('post');
    }
  
    async getOne(postId) {
      return this.apiCaller.get(`post/${postId}`);
    }
  }
  
  const apiCaller = new APICaller(' http://localhost:3000');
  const commentAPI = new Comment(apiCaller);
  const postAPI = new Post(apiCaller);
  
  commentAPI.getAll().then(comments => console.log('All Comment:', comments));
  commentAPI.getOne(1).then(comment => console.log('Comment with ID 1:', comment));
  postAPI.getAll().then(post => console.log('All Posts:', post));
  postAPI.getOne(1).then(post => console.log('Post with ID 1:', post));