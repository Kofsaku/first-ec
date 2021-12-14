import { dividerClasses } from '@mui/material'
import { spacing } from '@mui/system';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>


        <ul>
          <li>Product1</li>
          <li>Product1</li>
          <li>Product1</li>
        </ul>
      </div>
    </Layout>

  )
}
