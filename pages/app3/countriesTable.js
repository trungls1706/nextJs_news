
import React, { useEffect, useState } from 'react';
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@material-ui/icons'
import Link from 'next/link'
import styles from '../../styles/App3.module.css'

export default function Index({ countries }) {
  const [isDirection, setIsDirection] = useState(true);
  const [data, setData] = useState(countries ? countries : null);

  const setValueAndDirection = (value) => {
    setIsDirection(!isDirection)
    sortData(value)
  }

  const sortData = (value) => {
    let data = null
    if (isDirection) {
      data = [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1))
    } else {
      data = [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1))
    }

    if (data && data.length > 0) {
      setData(data)
    }

  }


  useEffect(() => {
    if (countries) {
      setData(countries)
    }
  }, [countries])

  return (
    <div className={styles.table} >
      <div className={styles.button} >
        <div className={styles.heading} >
          <button
            onClick={() => setValueAndDirection('name')}
            className={styles.heading_name} >
            <div>Name</div>
          </button>
        </div>

        <div className={styles.heading} >
          <button
            onClick={() => setValueAndDirection('population')}
            className={styles.heading_population} >
            <div>Population</div>

            <div className={styles.arrow} >
              {
                isDirection ?
                  <KeyboardArrowDownRounded color="inherit" />
                  :
                  <KeyboardArrowUpRounded color="inherit" />
              }
            </div>

          </button>
        </div>
      </div>

      <div>
        {
          data && data.length > 0 && data.map((val, index) => {
            return (
              <Link key={index} href={`/app3/country/${val.alpha3Code}`}>
                <div className={styles.row} >
                  <div className={styles.name} >
                    {val.name}
                  </div>
                  <div className={styles.population} >
                    {val.population}
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>

    </div>

  )
}