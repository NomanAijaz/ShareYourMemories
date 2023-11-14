const reducer = {
  setMode: (state) => {
    state.mode = state.mode === "light" ? "dark" : "light";
  },
  setLogin: (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
  },
  setLogout: (state) => {
    state.user = null;
    state.token = null;
  },
  setFriends: (state, action) => {
    console.log("action.payload.friends ", action.payload.friends);
    if (state.user) {
      state.user.friends = action.payload.friends;
    } else {
      console.log("User friends does not exists");
    }
  },
  setPosts: (state, action) => {
    state.posts = action.payload.posts;
  },
  setPost: (state, action) => {
    console.log("state.posts ", state.posts);
    const updatedPost = state?.posts?.map((post) => {
      if (post._id === action.payload.post._id) {
        return action.payload.post;
      }
      return post;
    });
    state.posts = updatedPost;
  },
};

export default reducer;
