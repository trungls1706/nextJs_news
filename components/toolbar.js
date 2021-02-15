import { useRouter } from 'next/router'
import styles from '../styles/Toolbar.module.css'
export default function Index() {

  const router = useRouter()

  return (
    <div className={styles.main} >
      <div onClick={() => router.push('/')} >Home</div>
      <div onClick={() => router.push('/feed/1')} >Feed</div>
      <div onClick={() => router.push('/eom')} >About Me</div>
      <div onClick={() => window.location.href = 'https://www.linkedin.com/in/trungls1706/'} >Home</div>
    </div>
  )
}