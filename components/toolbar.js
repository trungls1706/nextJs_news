import { useRouter } from 'next/router'
import styles from '../styles/Toolbar.module.css'
export default function Index() {

  const router = useRouter()

  return (
    <div className={styles.main} >
      <div onClick={() => router.push('/')} >Home</div>
      <div onClick={() => window.location.href = 'https://www.linkedin.com/in/trungls1706/'} >About me</div>
    </div>
  )
}