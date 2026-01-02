import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import styles from './index.module.css'

export default function About() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title="关于" description="关于我">
      <div className={styles.aboutContent}>
        <div>
          <p>{siteConfig.title}</p>
          <p><a href="https://github.com/ewigl" target="_blank"> EwigLicht </a>的个人主页</p>
          <p>Copyright © {new Date().getFullYear()}</p>
        </div>
      </div>
    </Layout>
  )
}
