import SearchRounded from '@material-ui/icons/SearchRounded'
import styles from '../../styles/App3.module.css'

export default function Index({ ...rest }) {
    return (
        <div className={styles.wrapper} >
            <SearchRounded />
            <input className={styles.input} {...rest} />
        </div>

    )
}