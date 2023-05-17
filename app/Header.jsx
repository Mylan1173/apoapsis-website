"use client"
import Image from 'next/image'
import Link from 'next/link'
import styles from "./header.module.css"
import { useEffect, useState } from 'react'
import Logo from "./assets/images/ColorfulTire.png"
import localFont from 'next/font/local';

const marioCartFont = localFont({
    src: "./assets/fonts/mario_kart_f2.ttf",
    style: "normal",
    weight: "900"
})

export default function Header({ page }) {

    const [windowSmall, setWindowSmall] = useState(null)

    const [navOpen, setNavOpen] = useState(false)
    const [navOpened, setNavOpened] = useState(false)

    const openNav = (bool) => {
        if (bool) {
            setNavOpen(true)

            setTimeout(() => {
                setNavOpened(true)
            }, 150)
        } else {
            setNavOpened(false)
            setTimeout(() => {
                setNavOpen(false)
            }, 150)
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined" && windowSmall === null) {
            setWindowSmall(window.innerWidth < 1000)
        }
    })

    useEffect(() => {
        window.addEventListener("resize", () => setWindowSmall(window.innerWidth < 1000))
        return () => {
            window.removeEventListener('resize', () => setWindowSmall(window.innerWidth < 1000))
        }
    })

    return (
        <header className={styles.header}>
            {windowSmall ? (
                <>
                    <button className={styles.headerLeft} onClick={() => openNav(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.menu} fill="currentColor" viewBox="0 96 960 960"><path d="M103 844v-94h754v94H103Zm0-221v-94h754v94H103Zm0-221v-95h754v95H103Z" /></svg>
                    </button>
                    <div className={styles.headerRight}>
                        <span className={marioCartFont.className}>Apoapsis</span>
                        <Image src={Logo} alt="Apoapsis Logó" width={1000} height={1000} className={styles.logo} />
                    </div>

                    {navOpen && (
                        <nav className={styles.nav} style={{ transform: [`translateX(${navOpened ? "0%" : "-100%"})`] }}>
                            <button className={styles.close} onClick={() => openNav(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 96 960 960"><path d="m249 873-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z" /></svg>
                            </button>

                            <Link href={"/"} className={page === "home" ? styles.currentPage : undefined}>Főoldal</Link>
                            <Link href={"/foglalas"} className={page === "foglalas" ? styles.currentPage : undefined} >Foglalás</Link>
                            <Link href={"/elerhetoseg"} className={page === "elerhetoseg" ? styles.currentPage : undefined}>Elérhetőség</Link>
                        </nav>
                    )}
                </>
            ) : (
                <>
                    <div className={styles.headerLeft}>
                        <Image src={Logo} alt="Apoapsis Logó" width={1000} height={1000} className={styles.logo} />
                        <span className={marioCartFont.className}>Apoapsis</span>
                    </div>
                    <div className={styles.headerRight}>
                        <Link href={"/"} className={page === "home" ? styles.currentPage : undefined}>Főoldal</Link>
                        <Link href={"/foglalas"} className={page === "foglalas" ? styles.currentPage : undefined}>Foglalás</Link>
                        <Link href={"/elerhetoseg"} className={page === "elerhetoseg" ? styles.currentPage : undefined}>Elérhetőség</Link>
                    </div>
                </>
            )
            }

        </header >
    )
}