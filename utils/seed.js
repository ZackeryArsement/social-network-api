const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];

  // Get some random thought objects using a helper function that we imported from ./data
  const thoughts = getRandomThought(10);

  // Loop 20 times -- add users to the user array
  for (let i = 0; i < 10; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const email = `${first}${last}@gmail.com`;

    users.push({
      username: fullName,
      email,
    });
  }

  // Add courses to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Add Users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
