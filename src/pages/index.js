import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

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
            className="button button--secondary button--lg"
            to="/writing-portfolio">
            See My Writing Portfolio
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
        <div className='col margin-bottom--lg'>
          <div className='card'>
            <div className='card__header'>
              <h3> Content writing</h3>
            </div>
            <div className='card__body'>
              <p>I have written articles for Vancouver's cultural newspaper <a href="https://thelasource.com/en/author/vinhnguyen/"> The Source </a> and <Link to="https://whatsonqueerbc.com/woq-bc-stories?author=5f8f55db41ba6247cbc23cf6"> What's on Queer in BC </Link>, an online LGBT press for local queers.</p>
              <p>I have also been a ghostwriter (article author without attribution and copyright) for various clients and products.</p>
              <p>
                I also enjoy sharing my thoughts on various topics on <Link to='/blog'>my blog</Link> .
              </p>
            </div>
            <div className='card__footer'></div>
          </div>
        </div>
        <div className='col margin-bottom--lg'>
          <div className='card'>
            <div className='card__header'>
              <h3>Web application development</h3>
            </div>
            <div className='card__body'>
              <p>I can speak in <pre>Javascript</pre> and <pre>Python</pre> to developers. I have also built responsive web apps for using both front-end and back-end technologies.</p>
              <p>My current tech stack includes:</p>
              <ul>
                <li>Front-end: HTML, CSS, Javascript, React, Next.js, Bootstrap, Highcharts.js</li>
                <li>Back-end: Node.js, Express.js, Next.js</li>
                <li>Deployment: Heroku, CPanel using Phusion Passenger, Github Pages</li>
              </ul>
            </div>
            <div className='card__footer'></div>
          </div>
        </div>
        <div className='col margin-bottom--lg'>
          <div className='card'>
            <div className='card__header'>
              <h3>Document builder and static site generator deployment</h3>
            </div>
            <div className='card__body'>
              <p>I am currently using <a href='https://docusaurus.io'>Docusaurus</a> as my main document builder. Docusaurus is a React-based static site generator that is geared towards documenters and technical writers. It allows HTML, CSS and Javascript customization for diverse looks and appearance while still allowing writers to focus on writing contents. It is easily deployed on Github Pages.</p>
              <p>Currently looking into</p>
              <ul>
                <li>Python document builder Sphinx</li>
                <li>XML framework DITA</li>
              </ul>
            </div>
            <div className='card__footer'></div>
          </div>
        </div>
      </div>



      <h2>I Previously Worked At</h2>
      <div className='row margin-bottom--xl'>
        <div className='col margin-bottom--lg'>
          <div className='card'>
            <div className='card__header'>
              <h3>PayByPhone</h3>
            </div>
            <div className='card__body'>
              <p>I have executed marketing campaigns for PayByPhone social media networks across North America including managing advertisement spending budget, writing various copies for social media posts and coordinating with third-party vendors for merchandise and supplies.</p>
              <p>My duties included</p>
              <ul>
                <li>Conducted market research, customer behaviours and developed a marketing content calendar.</li>
                <li>Coordinated marketing campaigns such as prize sponsorships and contest winner giveaway.</li>
                <li>Updated web content and scheduled press releases using internal CMS.</li>
              </ul>
            </div>
            <div className='card__footer'></div>
          </div>
        </div>
        <div className='col margin-bottom--lg'>
          <div className='card'>
            <div className='card__header'>
              <h3>General Internet</h3>
            </div>
            <div className='card__body'>
              <p>I have performed various duties at General Internet as a Marketing Coordinator. </p>
              <p>My duties included</p>
              <ul>
                <li>Writing various web copies for corporate websites.</li>
                <li>Writing Standard Operating Procedures (SOP) that onboard new clients on how to use new technologies.</li>
                <li>Documenting company's Enterprise Resource Planning Tool (ERP) features and special behavious.</li>
              </ul>
            </div>
            <div className='card__footer'></div>
          </div>
        </div>
        <div className='col margin-bottom--lg'>
          <div className='card'>
            <div className='card__header'>
              <h3>Cerebral Palsy Association of British Columbia</h3>
            </div>
            <div className='card__body'>
              <p>My duties included</p>
              <ul>
                <li>
                  Developed and implemented company website content, and email marketing strategies.
                  </li>
                <li>
                  Published news articles and featured stories on organization's WordPress CMS site. Maintain company website.
                  </li>
                <li>
                  Communicated to an audience of over 1000 people using Mailchimp to manage The Insider monthly newsletter, with an open rate of 30%.
                </li>
              </ul>
            </div>
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
