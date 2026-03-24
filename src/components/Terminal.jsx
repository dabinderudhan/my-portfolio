import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  RESUME,
  TERMINAL_COMMANDS,
} from "../data";

function useTypewriter(lines, speed = 18, linePause = 320) {
  const [text, setText] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function run() {
      let output = "";
      for (let i = 0; i < lines.length; i += 1) {
        const line = lines[i];
        for (let j = 0; j < line.length; j += 1) {
          if (cancelled) return;
          output += line[j];
          setText(output);
          await new Promise((r) => setTimeout(r, speed));
        }
        if (i !== lines.length - 1) {
          output += "\n";
          setText(output);
          await new Promise((r) => setTimeout(r, linePause));
        }
      }
    }

    run();
    return () => { cancelled = true; };
  }, [lines, speed, linePause]);

  return text;
}

function Terminal() {
  const [history, setHistory] = useState([
    "dabinder@portfolio:~$ help",
    "Commands: help, about, skills, projects, certs, experience, contact, linkedin, github, resume, clear",
  ]);
  const [command, setCommand] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandLog, setCommandLog] = useState([]);
  const inputRef = useRef(null);
  const historyRef = useRef(null);

  const introText = useTypewriter(
    [
      "dabinder@portfolio:~$ whoami",
      "L2 IT Administrator | Microsoft 365 | Intune | Entra ID",
      "dabinder@portfolio:~$ focus",
      "Escalations, mentoring L1s, and security-minded M365 ops",
      "dabinder@portfolio:~$ next",
      "Cybersecurity growth \u2192 hands-on admin, defense, scripting",
    ],
    16,
    280
  );

  const commands = useMemo(() => TERMINAL_COMMANDS, []);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    let output = [];

    switch (cmd) {
      case "help":
        output = ["Commands: help, about, skills, projects, labs, certs, experience, contact, linkedin, github, resume, clear"];
        break;
      case "about":
        output = ["L2 IT Administrator focused on M365, Intune, Entra ID, escalations, team mentoring, and cybersecurity growth."];
        break;
      case "skills":
        output = ["Microsoft 365, Intune, Entra ID, Exchange Online, Defender for O365, PowerShell, SOPs, automation"];
        break;
      case "projects":
        output = ["1. Intune Deployment SOP", "2. Email Security Hardening", "3. Automation Dashboard"];
        break;
      case "labs":
        output = ["1. Active Directory Home Lab", "2. SIEM & Log Analysis Lab", "3. Phishing Analysis Lab"];
        break;
      case "certs":
        output = ["Roadmap: MS-900, CompTIA A+, Network+, Security+, PowerShell"];
        break;
      case "experience":
        output = ["IT administration, endpoint setup, Microsoft 365 operations, documentation, security-minded support"];
        break;
      case "contact":
        output = [EMAIL, LINKEDIN];
        break;
      case "linkedin":
        window.open(LINKEDIN, "_blank", "noopener,noreferrer");
        output = ["Opening LinkedIn..."];
        break;
      case "github":
        window.open(GITHUB, "_blank", "noopener,noreferrer");
        output = ["Opening GitHub..."];
        break;
      case "resume":
        window.open(RESUME, "_blank", "noopener,noreferrer");
        output = ["Opening resume..."];
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        output = [""];
        break;
      default:
        output = [`Command not found: ${cmd}. Type 'help' for available commands.`];
    }

    setHistory((prev) => [...prev, `dabinder@portfolio:~$ ${cmd}`, ...output]);
    setCommandLog((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(command);
    setCommand("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!commandLog.length) return;
      const next = historyIndex === -1 ? commandLog.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setCommand(commandLog[next]);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!commandLog.length || historyIndex === -1) return;
      const next = historyIndex + 1;
      if (next >= commandLog.length) {
        setHistoryIndex(-1);
        setCommand("");
      } else {
        setHistoryIndex(next);
        setCommand(commandLog[next]);
      }
    }
  };

  return (
    <div
      className="terminal"
      onClick={() => inputRef.current?.focus()}
      role="button"
      tabIndex={0}
    >
      <div className="terminal-header">
        <span />
        <span />
        <span />
      </div>

      <pre className="terminal-intro">
        {introText}
        <span className="cursor-char">&block;</span>
      </pre>

      <div className="terminal-suggestions">
        {commands.map((item) => (
          <button
            key={item}
            type="button"
            className="command-chip"
            onClick={() => runCommand(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="terminal-history" ref={historyRef}>
        {history.map((line, i) => (
          <div key={`${line}-${i}`} className="terminal-line">
            {line}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="terminal-form">
        <span className="terminal-prompt">dabinder@portfolio:~$</span>
        <input
          ref={inputRef}
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          spellCheck="false"
          aria-label="Terminal command input"
          className="terminal-input"
        />
      </form>
    </div>
  );
}

export default Terminal;
