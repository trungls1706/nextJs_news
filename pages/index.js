import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Toolbar from '../components/toolbar'

export default function Home() {
  return (
    <div className='page-container' >
      <Toolbar />
      <div className={styles.main} >
        <h1>Wellcome to my app1231231</h1>
      </div>
    </div>
  )
}
