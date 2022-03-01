const { Thought, Reaction } = require('../models');

module.exports = {
    // GET all thoughts
    getThoughts(req,res) {

    },

    // GET single though '_id'
    getSingleThought(req,res) {
        
    },

    // POST new thought and push to associated user '_id'
    // example data
    // {
    //     "thoughtText": "Here's a cool thought...",
    //     "username": "lernantino",
    //     "userId": "5edff358a0fcb779aa7b118b"
    // }
    createThought(req,res) {
        
    },

    // PUT to update thought '_id'
    updateThought(req,res) {
        
    },

    // DELETE thought by '_id'
    deleteThought(req,res) {
        
    },

    //////////////////////////////////

    // /:thoughtId/reactions

    // POST to create new reaction in a thought's reactions field
    addReaction(req,res) {
        
    },

    // DELETE reaction using 'reactionId'
    removeReaction(req,res) {
        
    },
}