import axios from "axios";

class PostService {
  static async getAll(limit = 10, page = 1) {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return resp;
  }

  static async getPostById(id) {
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return resp;
  }

  static async getCommentsById(id) {
    const resp = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return resp;
  }
}

export default PostService;
