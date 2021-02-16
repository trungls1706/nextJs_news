import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Toolbar from '../components/toolbar'

export default function Home() {
  return (
    <div className='page-container' >
      <Toolbar />
      <div className={styles.main} >
        <h1>Welcome to my apps</h1>
        <div className={styles.listApp} >
          <ul>
            <li>
              <Link href="/feed/1">
                <a>App1</a>
              </Link>
            </li>
            <li>
              <Link href="/feed/1">
                <a>App2</a>
              </Link>
            </li>
            <li>
              <Link href="/blog/hello-world">
                <a>App3</a>
              </Link>
            </li>
          </ul>


        </div>
      </div>
    </div>
  )
}
