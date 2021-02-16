import Toolbar from '../../components/toolbar'
import styles from '../../styles/App2.module.css'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from "next/link";


export default function Index() {

  const router = useRouter()
  const product = router.query.slug

  return (
    <div className='page-container' >
      <Toolbar />
      <div className={styles.main, styles.products} >
        <motion.h1 layoutId="header">{product}</motion.h1>

        <Link href="/">
          <a>
            <motion.img
              layoutId={product}
              className={styles["big-image"]}
              src={product + ".jpg"}
            />
          </a>
        </Link>
      </div>
    </div>
  )
}