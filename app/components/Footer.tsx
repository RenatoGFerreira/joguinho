import React from "react";

interface FooterProps {
  dark: boolean;
}

const Footer: React.FC<FooterProps> = ({ dark }) => {
  return (
    <footer
      style={{
        borderTop: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`,
        padding: "32px 20px",
        textAlign: "center",
        backgroundColor: dark ? "#020617" : "#f8fafc",
        transition: "all 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="mt-4 font-bold text-center pb-10 text-sm"
          style={{
            color: dark ? "#e2e8f0" : "#0f172a",
            borderBottom: `1px solid ${dark ? "#1e293b" : "#e2e8f0"}`,
          }}
        >
          <p className="mb-1">
            <span className="block md:inline">&copy; MoviePops</span>
            <span className="block md:inline">
              {" "}
              | O desafio musical para cinéfilos.
            </span>
          </p>
        </div>

        <div
          className="mt-12 mb-24 text-center text-sm"
          style={{ color: dark ? "#64748b" : "#64748b" }}
        >
          <p className="mb-2">
            <a
              href="https://wa.me/5531991627440?text=Olá!%20Vi%20o%20site%20MoviePops%20e%20gostaria%20de%20criar%20um%20projeto%20parecido."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors"
              style={{ color: dark ? "#94a3b8" : "#334155" }}
            >
              Quer um sistema web para sua empresa, site ou jogo personalizado?
              Fale comigo!
            </a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} MoviePops. Projeto sem fins
            comerciais.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
