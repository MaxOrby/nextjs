import styles from '../styles/Home.module.css'

import Navigation from 'components/Navigation'

function Header({ navigation }) {
    return(
        <header>
           
                                    
                 <Navigation navigation={navigation}/>
          
            
        </header>
    )
}

export default Header