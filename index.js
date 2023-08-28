const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/practice_db');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const kittySchema = new mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? 'Meow name is ' + this.name
      : 'I don\'t have a name';
    console.log(greeting);
  };

  const Kitten = mongoose.model('Kitten', kittySchema);

  const silence = new Kitten({ name: 'Silence' });
  console.log(silence.name);

  const fluffy = new Kitten({ name: 'fluffy' });
//   fluffy.speak();

  fluffy.save();
  fluffy.speak();

  const kittens = Kitten.find();
console.log(kittens);

Kitten.find({ name: /^fluff/ });