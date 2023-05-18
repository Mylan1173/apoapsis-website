import Header from '.././Header'
import styles from "./fogalalas.module.css"

export const metadata = {
    title: "Foglalás - Apoapsis"
}

export default function Fogalalas() {
    return (
        <main>
            <Header page="foglalas" />

            <section className={styles.title}>
                <h1>Foglalás</h1>
            </section>
            <form className={styles.form}>

                <div className={styles.left}>
                    <div className={styles.col1}>
                        <div>
                            <label htmlFor="name">Foglaló neve</label><br />
                            <input type="text" name="name" placeholder="Példa Pisti" />
                        </div>

                        <div>
                            <label htmlFor="email">E-mail cím</label><br />
                            <input type="email" name="email" placeholder="pelda@email.com" />
                        </div>
                        <div>
                            <label htmlFor="pg">Pálya</label><br />
                            <select name="pg">
                                <option>Kakucs Ring</option>
                                <option>Hungaroring GoKart Center</option>
                                <option>SilverKart GoKart Pálya</option>
                                <option>SpeedKart GoKart Pálya</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="date">Dátum (éééé.hh.nn)</label><br />
                            <input type="date" name="date" placeholder="2023.05.05 18:00" min="2023-01-01" />
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <div>
                            <label htmlFor="tel">Telefonszám</label><br />
                            <input type="tel" name="tel" placeholder="+36 30 123 4567" />
                        </div>
                        <div>
                            <label htmlFor="adults">Felnőttek száma</label>
                            <input type="number" name="adults" placeholder="0-5" min={0} max={5} />
                        </div>
                        <div>
                            <label htmlFor="children">Gyereket száma</label>
                            <input type="number" name="children" placeholder="0-5" min={0} max={5} />
                        </div>
                        <div>
                            <label htmlFor="time">Időpont</label><br />
                            <input type="time" name="time" min="08:00" max="0:00" />
                        </div>
                    </div>

                </div>
                <div className={styles.right}>
                    <h3 style={{ color: "var(--wario)" }}>Nyitvatartás</h3>
                    <ul style={{ color: "var(--wario)" }}>
                        <li>
                            Hétfő:     8:00 - 22:00
                        </li>
                        <li>
                            Kedd:      8:00 - 22:00
                        </li>
                        <li>
                            Szerda:    8:00 - 20:00
                        </li>
                        <li>
                            Csütörtök: 8:00 - 22:00
                        </li>
                        <li>
                            Péntek:    10:00 - 0:00
                        </li>
                        <li>
                            Szombat:   10:00 - 0:00
                        </li>
                        <li>
                            Vasárnap:  8:00 - 22:00
                        </li>
                    </ul>
                    <h3 style={{ color: "var(--luigi)" }}>Általános információk</h3>
                    <p style={{ color: "var(--luigi)" }}>
                        A helyszínen nincs étkezési lehetőség de biztosítunk helyet a hozott ételek és italok elfogyasztására. <br />
                        Egy versenyen csak limitált számú versenyző lehet így lehetséges hogy a kiválasztott időpont már megtelt ha ez történne azonnal küldünk egy e-mailt. <br />
                        Ha kérdése van a gokartal kapcsolatban keressen fel minket!
                    </p>
                    <div className={styles.buttonbox}>
                        <button type="reset">Lefoglal</button>
                    </div>
                </div>

            </form >

        </main >
    )
}