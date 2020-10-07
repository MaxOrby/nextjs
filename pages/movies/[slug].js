import styles from '../../styles/Home.module.css'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'

function Movie({ movie }) {
    const { API_URL } = process.env
    console.log(movie)

    if (!movie.Poster) {
        movie.Poster = {
         url: '/uploads/noimage_90017e6611.gif'
        }
      }
    
    return (

        <div className={styles.container}>
            <main className={styles.main}>

                <div className="movie_poster">
                   <img src={API_URL + movie.Poster.url} alt={movie.Title}/> 
                </div>   

                <div className="movie_description">
                    <h1>{movie.Title}</h1>
                   <div dangerouslySetInnerHTML={{ __html: movie.MovieDescription }}></div>
                
                </div> 

              
                
            </main>
        </div>
        
    )

}

    const { publicRuntimeConfig } = getConfig()
    export async function getServerSideProps(context) {
      
        const { slug } = context.query
        
        const res = await fetch(`${publicRuntimeConfig.API_URL}/movies?slug=${slug}`)
        const data = await res.json()

        return {
            props: {
                movie: data[0]
            }
            
         }

 }


export default Movie