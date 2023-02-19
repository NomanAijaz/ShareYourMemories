import Post from "../models/posts.js";
import User from "../models/user.js";

export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findOne(userId).select({
      firstName: 1,
      lastName: 1,
      location: 1,
      picturePath: 1,
    });

    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comment: [],
    });

    await newPost.save();

    const post = await Post.find();
    res
      .status(200)
      .send({ message: "Got Post successfully", status: true, data: post });
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res
      .status(200)
      .send({ message: "Got Posts successfully", status: true, data: post });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const {userId}  = req.params;
    const post  = await Post.find({userId})
    res
    .status(200)
    .send({ message: "Got user Posts successfully", status: true, data: post });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const likePost = async (req, res) => {
  try {

    const {id} = req.params;
    const {userId}  = req.body;
    const post  = await Post.find({id})
    const isLiked = post.likes.get(userId);

    if(isLiked){
        post.likes.delete(userId)
    }else{
        post.likes.set(userId, true)
    }
    const updatedPost = await Post.findOneAndUpdate(id, {likes:post.likes},{new: true})
    res
    .status(200)
    .send({ message: "Got Updated Post successfully", status: true, data:updatedPost });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
