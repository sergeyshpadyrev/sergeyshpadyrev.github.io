import Image from "next/image";

const ebookStores = [
  {
    name: "Литрес",
    url: "https://www.litres.ru/book/sergey-shpadyrev/vglyadyvayas-v-pustotu-sbornik-filosofskih-esse-72505846/",
  },
  {
    name: "Ридеро",
    url: "https://ridero.ru/books/vglyadyvayas_v_pustotu/",
  },
  {
    name: "Amazon",
    url: "https://www.amazon.com/dp/B0FRFZRK7T",
  },
  {
    name: "Wildberries Digital",
    url: "https://digital.wildberries.ru/offer/558598",
  },
];

const paperStores = [
  {
    name: "Wildberries",
    url: "https://www.wildberries.ru/catalog/535326264/detail.aspx",
  },
  {
    name: "Озон",
    url: "https://www.ozon.ru/product/2867585042",
  },
];

export default function Book() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Image
          src="/images/book.png"
          alt="Вглядываясь в пустоту"
          width={300}
          height={450}
          style={{
            borderRadius: "0.5rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          }}
        />

        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Вглядываясь в пустоту
          </h1>
          <p style={{ color: "#666", fontStyle: "italic", marginBottom: "0" }}>
            Сборник философских эссе
          </p>
        </div>
      </div>

      <p
        style={{
          marginTop: "2rem",
          lineHeight: "1.7",
          color: "#333",
          textAlign: "justify",
        }}
      >
        Книга «Вглядываясь в пустоту» — это сборник моих лучших эссе и заметок,
        написанных с 2020 по 2025 годы. Некоторые эссе вошли в него в неизменном
        виде, некоторые в отредактированном специально для этой книги варианте.
        В книге рассматривается множество тем: философские учения Древней Греции,
        Индии и Китая, христианская теология и европейская философия Нового
        Времени, философия математики, физики и науки в целом, эпистемология,
        буддийское учение, вопросы этики и психологии, философия постмодерна.
      </p>

      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Электронная версия
        </h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {ebookStores.map((store) => (
            <a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#0066cc",
                color: "white",
                textDecoration: "none",
                borderRadius: "0.5rem",
                fontSize: "0.95rem",
                transition: "background-color 0.2s",
              }}
            >
              {store.name}
            </a>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
          Бумажная версия
        </h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {paperStores.map((store) => (
            <a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                backgroundColor: "#333",
                color: "white",
                textDecoration: "none",
                borderRadius: "0.5rem",
                fontSize: "0.95rem",
                transition: "background-color 0.2s",
              }}
            >
              {store.name}
            </a>
          ))}
        </div>
      </section>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <a
          href="/"
          style={{
            color: "#0066cc",
            textDecoration: "none",
            fontSize: "1rem",
          }}
        >
          На главную
        </a>
      </div>
    </main>
  );
}
