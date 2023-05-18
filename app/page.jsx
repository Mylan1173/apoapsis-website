import Image from 'next/image'
import Header from './Header'
import Logo from "./assets/images/ColorfulTire.png"
import Markusz from "./assets/images/markusz.png"
import Markusz2 from "./assets/images/markusz2.png"
import styles from "./page.module.css"
import localFont from 'next/font/local';

const marioCartFont = localFont({
  src: "./assets/fonts/mario_kart_f2.ttf",
  style: "normal",
  weight: "900"
})

export default function Home() {
  return (
    <main>
      <Header page="home" />
      <section className={styles.coverPage}>
        <div className={styles.coverFlex}>
          <Image src={Logo} alt="Apoapsis Logó" width={1000} height={1000} className={styles.coverTireLogo} />
          <Image src={Markusz} alt="Markusz Kocsi" width={2600} height={2600} className={styles.coverMarkuszLogo} />
        </div>
        <div className={`${marioCartFont.className} ${styles.coverTitle}`}><span>Apoapsis</span> <span>X</span> <span>Markusz Kocsi</span></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={styles.coverDown} viewBox="0 96 960 960"><path d="M481 721 230 470l52-52 199 199 199-199 52 52-251 251Z" /></svg>
      </section>
      <section className={styles.section}>
        <div className={styles.Text} data-color="yellow">

          <h2>Rólunk</h2>
          <p>
            A cég 2023-ban alapult. <br />
            Fő foglalkozásunk az autó versenyek, melyek azok számára is érdekesek, akik az autóversenyzést eddig unalmasnak találták. <br />
            A versenyeket többek között videójáték elemek  integrálása teszi egyedivé. <br />
            „Nincs két ugyanolyan futam”
          </p>
        </div>
        <Image src={Markusz2} alt="Markusz" width={767} height={767} className={styles.Image} />
      </section>
      <section className={styles.section} >
        <Image src={Markusz} alt="Markusz" width={767} height={767} className={styles.Image} data-type="image" />
        <div className={styles.Text} data-color="red" data-type="text">
          <h2>Markusz Kocsi</h2>
          <p>
            A mi versenyeink nem olyanok mint a többi gokart.
            „Versenyzés, máshogy”:
          </p>
          <ul>
            <li>
              Rövid és stratégikus
            </li>
            <li>
              Videójáték elemekkel teli
            </li>
          </ul>
          <p>Különböző pályák elérhetőek nálunk:</p>
          <ul>
            <li>Kakucs Ring</li>
            <li>Hungaroring GoKart Center</li>
            <li>SilverKart GoKart Pálya</li>
            <li>SpeedKart GoKart Pálya</li>
          </ul>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.Text} data-color="green">

          <h2>Jótékonyság</h2>
          <p>
            A vállalatunkban nagy szerepet kapott a környezet tudatosság ezért igyekszünk a lehető legtöbb módon ezt be is tartani. Az autók melyeket használunk elektromos árammal működnek melyet a telep napelem ellátása biztosít. <br />
            A Kft. üzemeltet egy különleges programot is melyen belül hátrányos helyzetű embereknek biztosítunk képzést a versenyzés profi szintű elsajátításához, mindezt számukra teljesen ingyen.
          </p>
        </div>
        <Image src={Logo} alt="Markusz" width={767} height={767} className={styles.Image} />
      </section>
    </main>
  )
}
