import styles from '../styles/Home.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router'


function Navigation({navigation}) {
    const { API_URL } = process.env
    const router = useRouter()

    return (
          
        <nav className={styles.nav}>
            <Link href="/"><a > <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /></a></Link>
            
            <ul>
                
          
                
                {navigation.map(item => (
                   
                    <li key={item.id}>
                        <Link href={item.slug}>
                           <a className={router.pathname === item.slug ? 'current_nav' : ''}>{item.title}</a>
                        </Link>
                    </li>
                   
               ))}



           </ul>
            
            
        </nav>


      )
}

export default Navigation