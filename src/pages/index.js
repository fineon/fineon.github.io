import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  console.log(siteConfig)
  return (
    <header className={clsx('hero hero--primary padding-vert--xl', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--info button--lg"
            to="/docs/intro">
            See My Notes and Guides
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomeBody(params) {
  return (
    <main className='container padding--xl'>
      <h2>Skills</h2>
      <div className='row margin-bottom--xl'>
        <div className='col'>
          <div className='card'>
            <div className='card__header'>
              <h3> Content Writing</h3>
            </div>
            <div className='card__body'>
              <p>I have contributed to Vancouver's cultural newspaper The Source and What's Queer in BC, an online LGBT press for local queers</p>
            </div>
            <div className='card__footer'></div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <div className='card__header'>
              <h3>Single Page Application (SPA) Development</h3>
            </div>
            <div className='card__body'>
              <p>I am currently exploring the world of ultra-fast and responsive SPA webpages. Currently, I am using React and Next.js (a framework derived from React) to create web pages that are SEO-friendly, responsive and fast.</p>
            </div>
            <div className='card__footer'></div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <div className='card__header'>
              <h3>Document Builder and Static Site Generator</h3>
            </div>
            <div className='card__body'>
              <p>I am currently using Docusaurus as my main document builder. Docusaurus is a React-based static site generator that is geared towards documenters and technical writers. It allows HTML, CSS and Javascript customization for diverse looks and appearance while still allowing writers to focus on writing contents. It is easily deployed on Github Pages.</p>
            </div>
            <div className='card__footer'></div>
          </div>
        </div>
      </div>

      <h2>Interests</h2>
      <div className='row margin-bottom--xl'>
        <div className='col'>
          <div className='card'>
            <div className='card__header'>
              <h3>Open Source Software</h3>
            </div>
            <div className='card__body'></div>
            <div className='card__footer'></div>
          </div>
        </div>
        <div className='col'>
          <div className='card col'>
            <div className='card__header'>
              <h3>User Experience</h3>
            </div>
            <div className='card__body'></div>
            <div className='card__footer'></div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <div className='card__header'>
              <h3>Web Development</h3>
            </div>
            <div className='card__body'></div>
            <div className='card__footer'></div>
          </div>
        </div>
      </div>

      <h2>I Previously Worked At</h2>
      <div className='row margin-bottom--xl'>
        <div className='col'>
          <div className='card'>
            <div className='card__header'>
              <h3>PayByPhone</h3>
            </div>
            <div className='card__body'></div>
            <div className='card__footer'></div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <div className='card__header'>
              <h3>General Internet</h3>
            </div>
            <div className='card__body'></div>
            <div className='card__footer'></div>
          </div>
        </div>
        <div className='col'>
          <div className='card'>
            <div className='card__header'>
              <h3>MOSAIC</h3>
            </div>
            <div className='card__body'></div>
            <div className='card__footer'></div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Layout
        // title={siteConfig.title}
        description="Ian Nguyen's personal website"
      >
        <HomepageHeader />
        <HomeBody />
      </Layout>
    </>
  );
}
