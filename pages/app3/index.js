import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from '../../styles/App3.module.css'
import Search from './search'
import CountriesTable from './countriesTable'
import { Brightness6Rounded } from '@material-ui/icons';
export default function Index({ countries }) {

  const [keyword, setKeyword] = useState('')
  const [theme, setTheme] = useState('light')

  const onInputChange = (e) => {
    e.preventDefault()
    setKeyword(e.target.value.toLowerCase())
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem('theme')
    )

    setTheme(localStorage.getItem('theme'))
  }, [])

  const data = countries.filter(
    world =>
      world.name.toLowerCase().includes(keyword) ||
      world.region.toLowerCase().includes(keyword) ||
      world.subregion.toLowerCase().includes(keyword)
  )

  const switchTheme = () => {
    if (theme === 'light') {
      saveTheme('dark')
    } else {
      saveTheme('light')
    }
  }

  const saveTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <div className={styles.container} >
      <Head>
        <title>Create app</title>
        <link rel='icon' href='../../public/favicon.ico' />
      </Head>

      <header className={styles.header} >
        World Rank
        <button onClick={() => switchTheme()} className={styles.switchTheme} >
          <Brightness6Rounded />
        </button>
      </header>

      <div className={styles.main} >
        <div className={styles.title}>
          <div className={styles.counts}>Found {countries.length} countries </div>
          <Search
            onChange={onInputChange}
            placeholder='Filter by Name, Region, or SubRegion'
          />
        </div>

        <CountriesTable countries={data} />
      </div>


      <footer className={styles.footer} >
        Powered by Trung
      </footer>



    </div>
  )
}

export const getStaticProps = async () => {

  const res = await fetch("https://restcountries.eu/rest/v2/all")
  const countries = await res.json()

  return {
    props: {
      countries: countries.slice(0, 20)
    }
  }
} 