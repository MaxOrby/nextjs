import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

function Card({ movie }) {
  const { API_URL } = process.env
  
  if (!movie.Poster) {
    movie.Poster = {
     url: '/uploads/noimage_90017e6611.gif'
    }
  }
 
 

    return (
          
        <div className={styles.card}>
        
        {/* Проверяем заполненено ли поле изображение (Poster).  Но в данном случае это не имее значения, 
        так как в вверху идет проверка на наличие данного поля и в случае отсутвия картинки, 
        подставляется дефолтная, поэтому картинка какая-либо тут всегда присутсует.  */}
        { movie.Poster && (
          <img src={API_URL + movie.Poster.url} alt={movie.Title} />
        )
          
                  
        }
          
        
           <h3>{movie.Title}</h3>
           <span className="data">{movie.Realise_date}</span><br/><br/>
            <Link href="/movies/[slug]" as={`/movies/${movie.slug}`}>
               <a>More</a>
            </Link>
        </div>


      )
}

export default Card