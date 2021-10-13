/* const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Mongoose DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
/* const PhotoSchema = new Schema({
  title: String,
  description: String
}); */

//model metotu ile modelimizin değişkenini oluşturuyoruz.
const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
/* Photo.create({
  title: 'Photo 2',
  description: 'Photo description lorem ipsum 2',
}); */

//read a photo
/* Photo.find({}, (err, data) => {
  console.log(data);
}); */

//update a photo
/* const id = '6163135041e427ef79ff9ba7';
Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo 111 title updated',
    description: 'Photo 11 description updated',
  },
  {
    new: true,
  },
  (err, data) => {
    console.log(data);
  }
); */

//delete a photo
/* const id = '6163233d4530f0ccb4097d70';
Photo.findByIdAndDelete(id, (err,data) => {
  console.log(`${data}  veri tabanından başarılı bir şekilde silindi`);
});
 */
 */