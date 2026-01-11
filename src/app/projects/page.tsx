type Project = {
  name: string;
  description: string;
  url: string;
  icon: string;
  color: string;
};

const projects: Project[] = [
  {
    name: "una-language",
    description:
      "Функциональный язык программирования, вдохновленный философией LISP и экосистемой JavaScript",
    url: "https://github.com/una-language/una-language",
    icon: "λ",
    color: "#6366f1",
  },
  {
    name: "react-component-structure",
    description: "Библиотека для жёсткой структуры React-компонентов",
    url: "https://github.com/sergeyshpadyrev/react-component-structure",
    icon: "⚛",
    color: "#61dafb",
  },
  {
    name: "react-query-crud",
    description: "Библиотека для работы с CRUD операциями через React Query",
    url: "https://github.com/sergeyshpadyrev/react-query-crud",
    icon: "🔄",
    color: "#ff4154",
  },
  {
    name: "typed-remote-procedure-call",
    description: "Библиотека для работы с типизированными RPC-вызовами",
    url: "https://github.com/sergeyshpadyrev/typed-remote-procedure-call",
    icon: "📡",
    color: "#10b981",
  },
];

export default function Projects() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Проекты</h1>
      <p style={{ color: "#666", marginBottom: "2.5rem" }}>
        Open-source проекты, которые я создал и поддерживаю.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
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
                  fontSize: "1.5rem",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "0.75rem",
                  backgroundColor: `${project.color}15`,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: project.color,
                }}
              >
                {project.icon}
              </span>
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  margin: 0,
                  color: project.color,
                  fontFamily: "monospace",
                }}
              >
                {project.name}
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
              {project.description}
            </p>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.8rem",
                color: "#999",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
              GitHub
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
