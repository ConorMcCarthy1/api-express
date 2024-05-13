import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const CelebsSchema = new Schema({
  adult: { type: Boolean },
  person_id: { type: Number, required: true, unique: true },
  profile_path: { type: String },
  popularity: { type: Number },
  vote_count: { type: Number },
  video: { type: Boolean },
  vote_average: { type: Number },
  production_countries: [{
    iso_3166_1: { type: String },
    name: { type: String }
  }],
  runtime: { type: Number },
  spoken_languages: [{
    iso_639_1: { type: String },
    name: { type: String }
  }],
  status: { type: String },
  tagline: { type: String }
});

SeriesSchema.statics.findByCelebDBId = function (person_id) {
  return this.findOne({ id: person_id });
};

export default mongoose.model('Celebs', CelebsSchema);