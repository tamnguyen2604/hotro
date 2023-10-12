import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tinbao"
          >
            Giới thiệu
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="contact_container">
          <div className="contact_text">Hỗ trợ khách hàng</div>
          <div className="contact_items">
            <div className="contact_items_inner">
              <Contact type="phone" color="#fff">
                <a href="tel:0342086955">0342086955</a>
              </Contact>
              <Contact type="mail" color="#fff">
                <a href="mailto:nt.tam1995@gmail.com">nt.tam1995@gmail.com</a>
              </Contact>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const Contact = ({ children, color, type }) => (
  <span
    className="contact_item"
    style={{
      backgroundColor: color,
      color: "rgba(0,0,0,.87)",
      cursor: "pointer",
    }}
  >
    {children}
  </span>
);
