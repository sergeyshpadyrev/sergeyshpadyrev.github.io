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
      <div className={styles.descriptionText}>
        Меня зовут Сергей.
        <br /> Я работаю инженером-программистом и пишу философские эссе.
        <br /> На этом сайте собраны все мои эссе, проекты, каналы и публикации
        в них.
      </div>
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
