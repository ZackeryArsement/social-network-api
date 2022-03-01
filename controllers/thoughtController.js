const { Thought, User } = require('../models');

module.exports = {
    // GET all thoughts
    getThoughts(req,res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    // GET single thought '_id'
    getSingleThought(req,res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .select(`-__v`)
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: `No thought with that ID `})
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // POST new thought and push to associated user '_id'
    // example data
    // {
    //     "thoughtText": "Here's a cool thought...",
    //     "username": "lernantino",
    //     "userId": "5edff358a0fcb779aa7b118b"
    // }
    createThought(req,res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    // PUT to update thought '_id'
    updateThought(req,res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: `No thought with this id!` })
            : res.json(thought)    
        )
        .catch((err) => res.status(500).json(err));
    },

    // DELETE thought by '_id' and remove it from User
    deleteThought(req,res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: `No such student exists` })
                : User.findOneAndUpdate(
                    { thoughts: req.params.thoughtId },
                    { $pull: { thoughts: req.paramts.thoughtId }},
                    { new: true }
                )
        )
        .then((user) => 
            !user
                ? res.status(404).json({
                    message: 'Thought deleted, but no user found',
                })
                : res.json({ message: 'Thought successfully deleted' })
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    //////////////////////////////////

    // /:thoughtId/reactions

    // POST to create new reaction in a thought's reactions field
    addReaction(req,res) {
        console.log('You are adding a reaction');
        console.log(req.body);
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
                ? res.status(404).json({ message: 'No thought found with this ID :(' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },

    // DELETE reaction using 'reactionId'
    removeReaction(req,res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reaction: { reactionId: req.params.reactionId }}},
            { runValidators: true, new: true }
        )
        .then((thought) => 
            !thought
                ? res.status(404).json({ message: 'No thought found with this ID :(' })
                : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
}