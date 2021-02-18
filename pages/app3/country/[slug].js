import { RepeatOutlined } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import styles from '../../../styles/App3.module.css'


export default function index({ country }) {

  const [neightBorCountry, setNeightBorCountry] = useState(null)

  useEffect(() => {
    getNeightBorCountry()
  }, [])


  const getNeightBorCountry = async () => {
    const data = await Promise.all(
      country.borders.map((val) => getCountry(val))
    )
    if (data) {
      setNeightBorCountry(data)
    }
  }

  return (
    <div className={styles.container_country}>

      <div className={styles.container_country_left}>
        <Overview
          country={country}
        />
      </div>

      <div className={styles.container_country_right}>
        <Detail
          country={country}
        />

        <NeightBorCountry
          neightBorCountry={neightBorCountry}
        />
      </div>



    </div>
  )
}

const Overview = ({ country }) => {
  return (
    <div className={styles.overview_panel}>
      <div className={styles.img_country} >
        <img src={country.flag} alt={country.name}></img>
      </div>

      <h1 className={styles.overview_name}>{country.name}</h1>
      <div className={styles.overview_region}>{country.region}</div>

      <div className={styles.overview_numbers}>
        <div className={styles.overview_population}>
          <div className={styles.overview_value}>
            {country.population}
          </div>
          <div className={styles.overview_label}>Population</div>
        </div>

        <div className={styles.overview_area}>
          <div className={styles.overview_value}>{country.area}</div>
          <div className={styles.overview_label}>Area</div>
        </div>
      </div>
    </div>
  )
}

const Detail = ({ country }) => {
  return (
    <div className={styles.details_panel}>
      <h4 className={styles.details_panel_heading}>Details</h4>

      <div className={styles.details_panel_row}>
        <div className={styles.details_panel_label}>Capital</div>
        <div className={styles.details_panel_value}>
          {country.capital}
        </div>
      </div>

      <div className={styles.details_panel_row}>
        <div className={styles.details_panel_label}>Languages</div>
        <div className={styles.details_panel_value}>
          {country.languages.map(({ name }) => name).join(", ")}
        </div>
      </div>

      <div className={styles.details_panel_row}>
        <div className={styles.details_panel_label}>Currencies</div>
        <div className={styles.details_panel_value}>
          {country.currencies.map(({ name }) => name).join(", ")}
        </div>
      </div>

      <div className={styles.details_panel_row}>
        <div className={styles.details_panel_label}>Native name</div>
        <div className={styles.details_panel_value}>
          {country.nativeName}
        </div>
      </div>

      <div className={styles.details_panel_row}>
        <div className={styles.details_panel_label}>Gini</div>
        <div className={styles.details_panel_value}>{country.gini} %</div>
      </div>
    </div>
  )
}

const NeightBorCountry = ({ neightBorCountry }) => {
  return (
    <div className={styles.details_panel_borders}>
      <div className={styles.details_panel_borders_label}>
        Neighbouring Countries
              </div>

      <div className={styles.details_panel_borders_container}>
        {neightBorCountry && neightBorCountry.length > 0 && neightBorCountry.map((val, index) => (
          <div className={styles.details_panel_borders_country}>
            <img src={val.flag} alt={val.name}></img>

            <div className={styles.details_panel_borders_name}>
              {val.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const getCountry = async (id) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
  const country = await res.json()

  return country
}

export const getServerSideProps = async ({ params }) => {

  let country = await getCountry(params.slug)

  return {
    props: {
      country,
    },
  }
}
