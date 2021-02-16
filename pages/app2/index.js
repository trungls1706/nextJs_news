import Toolbar from '../../components/toolbar'
import styles from '../../styles/App2.module.css'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export default function Index() {
  const router = useRouter()

  return (
    <div className='page-container' >
      <Toolbar />
      <div className={[styles.main]} >
        {
          ['bags', 'jeans', 'shoes'].map((val, index) => {
            return (
              <span key={index} onClick={() => router.push(`app2/${val}`)} >
                <motion.img
                  layoutId={index}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className={styles.imgs} src={val + '.jpg'} />
              </span>
            )
          })
        }
      </div>
    </div>
  )
}