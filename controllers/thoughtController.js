const { Thought, User } = require('../models/index');

module.exports = {
  //Get all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => {
        return res.json(thoughts);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //Get single thought
  getSingleThought({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thougth with that ID' })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  //Create a thought
  createThought({ body }, res) {
    Thought.create(body)
      .then((thought) =>
        User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res
                .status(404)
                .json({ message: 'Thought created but no user found' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err)));
  },
  //Update a thought
  updateThought({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $set: body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //Delete a thought
  deleteThought({ params }, res) {
    Thought.findOneAndRemove({ _id: params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : User.findOneAndUpdate(
            { username: thought.username },
            { $pull: { thoughts: thought._id } },
            { runValidators: true, new: true }
          )
            .then(() => res.json('Thought succesfully deleted!'))
      )
      .catch((err) => res.status(500).json(err));
  },
  //Add a reaction
  addReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $push: { reactions: body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
            .status(404)
            .json({ message: 'No thought found with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //Remove a reaction
  removeReaction({ params, body }, res) {
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: body.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
            .status(404)
            .json({ message: 'No thought with that ID :(' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  }
}