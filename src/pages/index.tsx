import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
      <img
        className={styles.descriptionImage}
        src="/img/avatar.jpg"
        alt="avatar"
      />
      <div></div>
    </header>
  );
};

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Сергей Шпадырев`}
      description="Сайт с моими эссе и проектами"
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
};

export default Home;
