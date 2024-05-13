import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const SeriesSchema = new Schema({
  adult: { type: Boolean },
  series_id: { type: Number, required: true, unique: true },
  poster_path: { type: String },
  overview: { type: String },
  release_date: { type: String },
  name: { type: String },
  genre_ids: [{ type: Number }],
  original_language: { type: String },
  title: { type: String },
  backdrop_path: { type: String },
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

SeriesSchema.statics.findBySeriesDBId = function (series_id) {
  return this.findOne({ id: series_id });
};

export default mongoose.model('Series', SeriesSchema);


