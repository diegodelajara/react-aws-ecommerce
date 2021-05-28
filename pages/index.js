import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import BasicLayout from '../layouts/BasicLayout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>E-commerce NextJS</h1>
        <BasicLayout>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </BasicLayout>
      </main>
    </div>
  )
}
