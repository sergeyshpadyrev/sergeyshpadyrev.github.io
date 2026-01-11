type Platform = {
  name: string;
  description: string;
  url: string;
  icon: string;
  color: string;
};

const platforms: Platform[] = [
  {
    name: "Телеграм",
    description: "Канал с новыми публикациями и мыслями",
    url: "https://t.me/+aoQm0ISH-3g4MTE0",
    icon: "✈️",
    color: "#0088cc",
  },
  {
    name: "Хабр",
    description: "Статьи о философии, математике и программировании",
    url: "https://habr.com/ru/users/SergioShpadi/publications/articles/",
    icon: "📝",
    color: "#65a3be",
  },
  {
    name: "Пикабу",
    description: "Публикации для широкой аудитории",
    url: "https://pikabu.ru/@sergeyshpadyrev",
    icon: "🎭",
    color: "#8bc34a",
  },
  {
    name: "Дзен",
    description: "Философские эссе и размышления",
    url: "https://dzen.ru/sergeyshpadyrev",
    icon: "🧘",
    color: "#ffcc00",
  },
  {
    name: "ВКонтакте",
    description: "Сообщество читателей",
    url: "https://vk.com/club231375709",
    icon: "👥",
    color: "#4a76a8",
  },
  {
    name: "Подкаст «Философские разговоры о важном»",
    description: "Совместный подкаст с Дионисом Диметором",
    url: "https://open.spotify.com/show/7oSgD2FdX0v74lApcceekH?si=AN5Ah_cmQdazRJ9n0_tn7Q",
    icon: "🎙️",
    color: "#1db954",
  },
];

export default function Platforms() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Площадки</h1>
      <p style={{ color: "#666", marginBottom: "2.5rem" }}>
        Я распространяю свои тексты и подкасты на нескольких платформах.
        Подписывайтесь там, где вам удобнее.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="platform-card"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.75rem",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.75rem",
                  backgroundColor: `${platform.color}15`,
                }}
              >
                {platform.icon}
              </span>
              <h2
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  margin: 0,
                  color: platform.color,
                }}
              >
                {platform.name}
              </h2>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#666",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {platform.description}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
