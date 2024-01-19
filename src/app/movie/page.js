import React from 'react'
import styles from '@/app/styles/common.module.css'
import MovieCard from '../components/MovieCard';

const Movie = async () => {

  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '283e3bf5cbmsh9ca3b5f08ef220bp1e93b5jsn0a934907ce10',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  // console.log(data.titles);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
            {
              main_data.map((curEle) => {
                return <MovieCard key={curEle.id} {...curEle} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie