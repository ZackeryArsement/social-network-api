const { CountryCodes } = require('validator/lib/isISO31661Alpha2');
const { Thought, User } = require('../models');
const thoughtController = require('./thoughtController');

module.exports = {
    // GET all users
    getUsers(req,res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },

    // GET single user '_id'
    getSingleUser(req,res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    // POST new user
    // example data
    //  {
    //     "username": "lernantino",
    //     "email": "lernantino@gmail.com"
    //   }
    createUser(req,res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },

    // PUT to update user '_id'
    updateUser(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    // DELETE user '_id'
    deleteUser(req,res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : Thought.deleteMany({ _id: { $in: user.thoughts }})
        )
        .then(() => res.json({ message: 'User and thoughts deleted!' }))
        .catch((err) => res.status(500).json(err));
    },

    ///////////////////////////////

    // /:userId/friends/:friendId


    // POST new friend to user friend list
    addFriend(req,res) {
        console.log('You are adding a friend');
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body }},
            { runValidators: true, new: true }
        )
        .then((user) => 
        !user
            ? res.status(404).json({ message: 'No user found with that ID :(' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },

    // DELETE friend from user list
    removeFriend(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friend: { _id: req.params.friendId}}},
            { runValidators: true, new: true }
        )
        .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user found with that ID :(' })
                : res.json(student)
        )
        .catch((err) => res.status(500).json(err));
    },
}