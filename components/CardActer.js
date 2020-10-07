import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'
function CardActer({ actor }) {
    const { API_URL } = process.env

   
    console.log(actor)
    



 

    return (
          
        <div className={styles.card}>
        <img src={API_URL + actor.photo.url} alt={actor.First_name} />
               
                    
                
        
           <h3>{actor.First_name}</h3>
           <span className="data">{actor.Last_name}</span> 
        </div>


      )
}

export default CardActer