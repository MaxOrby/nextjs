
import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'

import { useRouter } from 'next/router'

function MoviesPage ({ movies, page }) {

    const router = useRouter()
    

    return (
        <div className="container">


            <main className="main">

            <div className="grid">
                
                {movies.map(movie => (
                   
                    <Card key={movie.id} movie={movie}/>
                    
                ))}

            </div>
                
              <button onClick={ () => router.push(`/movies?page=${page + 1}`)}>Следующая</button> 


            </main>
        </div>
    )
}

    export async function getServerSideProps({query: {page: number = 1} }) {
        const { API_URL } = process.env

        const res = await fetch(`${API_URL}/movies?_limit=4`)
        const data = await res.json()

        return {
            props: {
                movies: data,
              
            }
            
         }

 }



    

export default MoviesPage 