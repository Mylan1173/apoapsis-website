import Image from 'next/image'
import Link from 'next/link'
import Logo from "./assets/logo_color.png"
import Markusz from "./assets/markusz.png"
import styles from "./page.module.css"

export default function Home({ params }) {
  return (
    <main>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Image src={Logo} alt="Apoapsis Logó" width={1000} height={1000} className={styles.logo} priority />
          <span>Apoapsis</span>
        </div>
        <div className={styles.headerRight}>
          <Link href={"/"} className={styles.currentPage}>Főoldal</Link>
          <Link href={"/foglalas"} >Foglalás</Link>
          <Link href={"/elerhetoseg"}>Elérhetőség</Link>
        </div>
      </header>
      <section className={styles.coverPage}>
        <div className={styles.coverFlex}>
          <Image src={Logo} alt="Apoapsis Logó" width={3000} height={3000} priority className={styles.coverTireLogo} />
          <span className={styles.coverX}>X</span>
          <Image src={Markusz} alt="Markusz Kocsi" width={2600} height={2600} priority className={styles.coverMarkuszLogo} />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.coverDown} viewBox="0 96 960 960"><path d="M481 721 230 470l52-52 199 199 199-199 52 52-251 251Z" /></svg>
      </section>
    </main>
  )
}
