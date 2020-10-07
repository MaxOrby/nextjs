import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch'
import CardActer from 'components/CardActer'

const Actors = ({ actors }) => {
    return (
        <div className={styles.container}>


            <main className={styles.main}>

            <div className={styles.grid}>
                
                {actors.map(actor => (
                   
                    <CardActer key={actor.id} actor={actor}/>
                    
                ))}

</div>
            </main>
        </div>
    )
}

    export async function getServerSideProps() {
        const { API_URL } = process.env

        const res = await fetch(`${API_URL}/actors`)
        const data = await res.json()

        return {
            props: {
                actors: data
            }

           
         }

 }



    

export default Actors