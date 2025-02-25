import Header from '.././Header'
import styles from "./elerhetoseg.module.css"

export const metadata = {
    title: "Elérhetőség - Apoapsis"
}

export default function Elerhetoseg() {
    return (
        <main>
            <Header page="elerhetoseg" />
            <section className={styles.title}>
                <h1>Elérhetőség</h1>
            </section>
            <section className={styles.box}>
                <div className={styles.table}>
                    <div className={styles.row}>
                        <div>E-mail cím:</div>
                        <div><a href="mailto:apoapsisrendezvenyek@gmail.com" className={styles.link}>apoapsisrendezvenyek@gmail.com</a></div>
                    </div>
                    <div className={styles.row}>
                        <div>Telefonszám:</div>
                        <div><a href="tel:+36 20 123 456" className={styles.link}>+36 20 123 4567</a></div>
                    </div>
                    <div className={styles.row}>
                        <div>Cím:</div>
                        <div>
                            <div className={styles.map}>
                                <div>Budapest, Kossuth tér 12.</div>
                                <div className="mapouter">
                                    <div className="gmap_canvas">
                                        <iframe width="300" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Budapest, Kossuth tér 12&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                                        </iframe>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.row}>
                        <div>Nyitvatartás:</div>
                        <div>
                            <ul className={styles.openings}>
                                <li>
                                    <span>Hétfő:</span><span>8:00 - 22:00</span>
                                </li>
                                <li>
                                    <span>Kedd:</span><span>8:00 - 22:00</span>
                                </li>
                                <li>
                                    <span>Szerda:</span><span>8:00 - 20:00</span>
                                </li>
                                <li>
                                    <span>Csütörtök:</span><span>8:00 - 22:00</span>
                                </li>
                                <li>
                                    <span>Péntek:</span><span>10:00 - 0:00</span>
                                </li>
                                <li>
                                    <span>Szombat:</span><span>10:00 - 0:00</span>
                                </li>
                                <li>
                                    <span>Vasárnap:</span><span>8:00 - 22:00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>

        </main>
    )
}