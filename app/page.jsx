import Image from 'next/image'
import { marioCartFont } from './layout'
import Header from './Header'
import Logo from "./assets/images/ColorfulTire.png"
import Markusz from "./assets/images/markusz.png"
import styles from "./page.module.css"



export default function Home({ params }) {
  return (
    <main>
      <Header />
      <section className={styles.coverPage}>
        <div className={styles.coverFlex}>
          <Image src={Logo} alt="Apoapsis Logó" width={1000} height={1000} priority className={styles.coverTireLogo} />
          <Image src={Markusz} alt="Markusz Kocsi" width={2600} height={2600} priority className={styles.coverMarkuszLogo} />
        </div>
        <div className={`${marioCartFont.className} ${styles.coverTitle}`}><span>Apoapsis</span> <span>X</span> <span>Markusz Kocsi</span></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.coverDown} viewBox="0 96 960 960"><path d="M481 721 230 470l52-52 199 199 199-199 52 52-251 251Z" /></svg>
      </section>
    </main>
  )
}
