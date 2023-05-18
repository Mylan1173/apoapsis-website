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
            <div className={styles.form}>

                <div className={styles.left}>
                    <div>
                        <label htmlFor="name">Foglaló neve</label>
                        <input type="text" name="name" placeholder="Példa Pisti" />
                    </div>
                    <div>
                        <label htmlFor="tel">Telefonszám</label>
                        <input type="tel" name="tel" placeholder="+36 30 123 4567" />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail cím</label>
                        <input type="email" name="email" placeholder="pelda@email.com" />
                    </div>
                    <div>
                        <label htmlFor="date">Kívánt időpont (éééé.hh.nn óó:pp)</label>
                        <input type="datetime" name="date" placeholder="2023.05.05 18:00" />
                    </div>
                    <div>
                        <label htmlFor="pg">Pálya</label>
                        <select name="pg">
                            <option>Kakucs Ring</option>
                            <option>Hungaroring GoKart Center</option>
                            <option>SilverKart GoKart Pálya</option>
                            <option>SpeedKart GoKart Pálya</option>
                        </select>
                    </div>

                    <button>Lefoglal</button>
                </div>
                <div className={styles.right}>
                    <h3>Nyitvatartás</h3>
                </div>
            </div >

        </main >
    )
}