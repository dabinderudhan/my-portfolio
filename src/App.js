import React, { useEffect, useState } from "react";

function useTypewriter(lines, speed = 22, linePause = 450) {
  const [text, setText] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function typeLines() {
      let output = "";

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        for (let j = 0; j < line.length; j++) {
          if (cancelled) return;
          output += line[j];
          setText(output);
          await new Promise((resolve) => setTimeout(resolve, speed));
        }

        if (i !== lines.length - 1) {
          output += "\n";
          setText(output);
          await new Promise((resolve) => setTimeout(resolve, linePause));
        }
      }
    }

    typeLines();

    return () => {
      cancelled = true;
    };
  }, [lines, speed, linePause]);

  return text;
}

export default function TerminalBox() {
  const terminalText = useTypewriter(
    [
      "dabinder@portfolio:~$ whoami",
      "IT Administrator | Microsoft 365 | Intune | Entra ID",
      "dabinder@portfolio:~$ focus",
      "Automation-first operations + security-minded delivery",
      "dabinder@portfolio:~$ next",
      "Cybersecurity (defensive → offensive) + hands-on labs",
    ],
    18,
    320
  );

  return (
    <aside className="terminal">
      <div className="terminalTop">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminalTitle">terminal</span>
      </div>

      <pre className="terminalBody">
        {terminalText}
        <span className="cursor">▍</span>
      </pre>
    </aside>
  );
}
