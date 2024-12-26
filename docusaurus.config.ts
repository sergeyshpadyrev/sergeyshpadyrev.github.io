import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Сергей Шпадырев",
  tagline: "Программист и философ-эссеист",
  favicon: "img/avatar.jpg",

  // Set the production url of your site here
  url: "https://sergeyshpadyrev.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: { sidebarPath: "./sidebars.ts" },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      title: "Сергей Шпадырев",
      logo: {
        alt: "My Site Logo",
        src: "img/avatar.jpg",
      },
      items: [
        { to: "/docs/channels", label: "Каналы", position: "left" },
        { to: "/docs/publications", label: "Публикации", position: "left" },
        { to: "/docs/projects", label: "Проекты", position: "left" },
        // { to: "/docs/essays", label: "Эссе", position: "left" },
        { to: "/docs/contacts", label: "Контакты", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Ссылки",
          items: [
            { label: "Каналы", to: "/docs/channels" },
            { label: "Публикации", to: "/docs/publications" },
            { label: "Проекты", to: "/docs/projects" },
          ],
        },
        {
          title: "Популярные каналы",
          items: [
            { label: "Телеграм", href: "https://t.me/+aoQm0ISH-3g4MTE0" },
            {
              label: "Хабр",
              href: "https://habr.com/ru/users/SergioShpadi/publications/articles/",
            },
            { label: "Пикабу", href: "https://pikabu.ru/@sergeyshpadyrev" },
          ],
        },
        {
          title: "Ещё",
          items: [
            { label: "GitHub", href: "https://github.com/sergeyshpadyrev" },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
