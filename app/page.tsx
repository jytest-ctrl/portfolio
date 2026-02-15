export default function Home() {
  return (
    <div style={{ padding: 40, maxWidth: 600, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>안녕하세요, 지용입니다.</h1>
      <p style={{ color: "#666", lineHeight: 1.6, marginBottom: 24 }}>
        개발자 포트폴리오에 오신 것을 환영합니다.
      </p>
      <h2 style={{ fontSize: 18, marginBottom: 12 }}>소개</h2>
      <p style={{ color: "#444", lineHeight: 1.6, marginBottom: 24 }}>
        웹 개발에 관심이 많은 개발자입니다. 깔끔한 코드와 사용자 친화적인 인터페이스를 지향합니다.
      </p>
      <h2 style={{ fontSize: 18, marginBottom: 12 }}>스킬</h2>
      <p style={{ color: "#444", lineHeight: 1.6, marginBottom: 24 }}>
        JavaScript, TypeScript, React, Next.js, HTML/CSS
      </p>
      <h2 style={{ fontSize: 18, marginBottom: 12 }}>연락처</h2>
      <p style={{ color: "#444", lineHeight: 1.6 }}>
        <a href="mailto:hello@example.com" style={{ color: "#0066cc" }}>hello@example.com</a>
        {" · "}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "#0066cc" }}>GitHub</a>
      </p>
    </div>
  );
}
