import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import users from './users';
import movies from './movies'; 
import User from '../api/users/userModel';
import Movie from '../api/movies/movieModel'; 
import Celeb from '../api/celebs/celebsModel'; 
import Series from '../api/series/seriesModel';

async function main() {
    if (process.env.NODE_ENV !== 'development') {
        console.log('This script is only for the development environment.');
        return;
    }
    await mongoose.connect(process.env.MONGO_DB);
    // Drop collections
    await User.collection.drop().catch(err => console.log('User collection not found'));
    await Movie.collection.drop().catch(err => console.log('Movie collection not found')); 
    await Celeb.collection.drop().catch(err => console.log('Celeb collection not found')); 
    await Series.collection.drop().catch(err => console.log('Series collection not found'))
    await User.create(users);
    await Movie.create(movies); 
   // await Celeb.create(people); 
  // await Series.create(shows);
    console.log('Database initialised');
    console.log(`${users.length} users loaded`);
    console.log(`${movies.length} movies loaded`); 
   // console.log(`${people.length} celebrities loaded`); 
    //console.log(`${shows.length} series loaded`);
    await mongoose.disconnect();
}

main();