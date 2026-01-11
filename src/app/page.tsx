import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
        gap: "1.5rem",
      }}
    >
      <Image
        src="/images/avatar.jpg"
        alt="Сергей Шпадырев"
        width={200}
        height={250}
        style={{
          borderRadius: "1rem",
          objectFit: "cover",
        }}
      />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
          Сергей Шпадырев
        </h1>
        <p style={{ fontSize: "1.25rem", color: "#666" }}>
          Инженер-программист и философ-эссеист
        </p>
      </div>
    </main>
  );
}
