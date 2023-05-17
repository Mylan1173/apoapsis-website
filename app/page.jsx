import Image from 'next/image'
import Head from 'next/head';
import Header from './Header'
import Logo from "./assets/images/ColorfulTire.png"
import Markusz from "./assets/images/markusz.png"
import styles from "./page.module.css"
import localFont from 'next/font/local';

const marioCartFont = localFont({
  src: "./assets/fonts/mario_kart_f2.ttf",
  style: "normal",
  weight: "900"
})

export default function Home({ params }) {
  return (
    <main>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Header page="home" />
      <section className={styles.coverPage}>
        <div className={styles.coverFlex}>
          <Image src={Logo} alt="Apoapsis Logó" width={1000} height={1000} className={styles.coverTireLogo} />
          <Image src={Markusz} alt="Markusz Kocsi" width={2600} height={2600} className={styles.coverMarkuszLogo} />
        </div>
        <div className={`${marioCartFont.className} ${styles.coverTitle}`}><span>Apoapsis</span> <span>X</span> <span>Markusz Kocsi</span></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.coverDown} viewBox="0 96 960 960"><path d="M481 721 230 470l52-52 199 199 199-199 52 52-251 251Z" /></svg>
      </section>
      <section>
        <h2>Bemutatkozás</h2>
        <p>A cég 2023-ban alapult. <br />
          Fő foglalkozásunk az autó versenyek, melyek azok számára is érdekesek, akik az autóversenyzést eddig unalmasnak találták. <br />
          A versenyeket többek között videójáték elemek  integrálása teszi egyedivé. <br />
          „Nincs két ugyanolyan futam”
        </p>
      </section>
    </main>
  )
}
