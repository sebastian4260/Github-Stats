const getFollower = (followers, data) =>
  followers.find((follower) => follower.id === data.id);



export { getFollower };