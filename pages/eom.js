import styles from '../styles/emo.module.css'
import Toolbar from '../components/toolbar'

export default function Index({ data }) {
  console.log('data', data)
  return (
    <div className='page-container' >
      <Toolbar />
      <div className={styles.main} >
        <h1>About me</h1>

        <div className={styles.emp} >
          <h3>{data.name}</h3>
          <h6>{data.description}</h6>
          {/* <img src={myImg} /> */}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
  );
  // const employee = await apiResponse.json();


  const data = {
    description: "IT guy",
    name: "Ly Son Trung",
    position: "Software Engineer",
  }

  return {
    props: {
      data,
    },
  };
};