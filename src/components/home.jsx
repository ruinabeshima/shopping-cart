import styles from "../styles/homepage.module.css"
import NavBar from "./navbar";

function Home(props){
  return (
    <div className={styles.homepage}>
      <NavBar quantity={props.quantity}/>
      <div className={styles.titlediv}>
        <h1>Welcome to the Shopping Cart App!</h1>
        <p>Browse our collection of products and add them to your cart.</p>
      </div>
    </div>
  ); 
}

export default Home

