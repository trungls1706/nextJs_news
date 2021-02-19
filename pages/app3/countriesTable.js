
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


      <div className={styles.heading} >
        <div className={styles.heading_flag} />

        <button
          onClick={() => setValueAndDirection('name')}
          className={styles.heading_name} >
          <div>Name</div>
        </button>

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


        <button
          onClick={() => setValueAndDirection('area')}
          className={styles.heading_area} >
          <div >Area (km<sup style={{ fontSize: '0.55rem' }} >2</sup>) </div>

          <div className={styles.arrow} >
            {
              isDirection ?
                <KeyboardArrowDownRounded color="inherit" />
                :
                <KeyboardArrowUpRounded color="inherit" />
            }
          </div>

        </button>

        <button
          onClick={() => setValueAndDirection('gini')}
          className={styles.heading_gini} >
          <div>Gini</div>

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

      <ListCountry
        data={data}
      />

    </div>

  )
}

const ListCountry = ({ data }) => {
  return (
    <div>
      {
        data && data.length > 0 && data.map((val, index) => {
          return (
            <Link key={index} href={`/app3/country/${val.alpha3Code}`}>
              <div className={styles.row} >

                <div className={styles.flag} >
                  <img src={val.flag} alt={val.flag} />
                </div>

                <div className={styles.name}>{val.name}</div>
                <div className={styles.population}>{val.population}</div>
                <div className={styles.area}>{val.area || 0}</div>
                <div className={styles.gini}>{val.gini || 0}%</div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}