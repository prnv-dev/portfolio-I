"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { EXPERIENCE, PRODUCTS, PROFILE, SOCIALS } from "@/data/profile";
import { PROJECTS, hostOf } from "@/data/projects";
import { SKILL_GROUPS } from "@/data/skills";
import styles from "./Terminal.module.css";

interface Entry {
  id: number;
  command?: string;
  output: ReactNode;
}

type Run = (args: string[]) => ReactNode | null;

const PROMPT = "pk@nashik:~/play$";

const ROUTES: Record<string, string> = {
  home: "/",
  about: "/about",
  readme: "/about-pranav",
  projects: "/projects",
  skills: "/skills",
  github: "/github",
  resume: "/resume",
  contact: "/contact",
  brain: "/brain-mode",
};

const Dim = ({ children }: { children: ReactNode }) => <span className={styles.dim}>{children}</span>;
const Accent = ({ children }: { children: ReactNode }) => <span className={styles.accent}>{children}</span>;

function Neofetch() {
  const rows: [string, string][] = [
    ["user", PROFILE.name.toLowerCase()],
    ["role", PROFILE.role],
    ["edu", `${PROFILE.education.degree}, ${PROFILE.education.school}`],
    ["status", PROFILE.education.status.toLowerCase()],
    ["base", PROFILE.location],
    ["since", `${PROFILE.freelanceSince}`],
    ["products", PRODUCTS.map((product) => product.name).join(", ")],
    ["shell", "this one"],
  ];
  return (
    <div className={styles.neofetch}>
      <pre className={styles.logo} aria-hidden="true">{` ____  _  __
|  _ \\| |/ /
| |_) | ' /
|  __/| . \\
|_|   |_|\\_\\`}</pre>
      <dl>
        {rows.map(([key, value]) => (
          <div key={key}>
            <dt>{key}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Terminal() {
  const router = useRouter();
  const [entries, setEntries] = useState<Entry[]>([
    { id: 0, output: <Neofetch /> },
    {
      id: 1,
      output: (
        <span>
          Type <Accent>help</Accent> to see what this shell can do. <Dim>Tab completes, ↑ ↓ walk history.</Dim>
        </span>
      ),
    },
  ]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(2);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [entries]);

  const go = (target: string): ReactNode => {
    const key = target.toLowerCase();
    if (ROUTES[key]) {
      router.push(ROUTES[key]);
      return <Dim>navigating to {ROUTES[key]} …</Dim>;
    }
    const project = PROJECTS.find((item) => item.id === key);
    if (project?.url) {
      window.open(project.url, "_blank", "noopener,noreferrer");
      return <Dim>opening {hostOf(project.url)} in a new tab …</Dim>;
    }
    if (project) return <span>{project.title} isn&apos;t public yet.</span>;
    const social = SOCIALS.find((item) => item.key === key);
    if (social) {
      window.open(social.href, "_blank", "noopener,noreferrer");
      return <Dim>opening {social.label} in a new tab …</Dim>;
    }
    return (
      <span>
        open: unknown target <Accent>{target}</Accent>. Try <Accent>ls</Accent> for pages or{" "}
        <Accent>projects</Accent> for ids.
      </span>
    );
  };

  const COMMANDS: Record<string, { summary: string; run: Run }> = {
    help: {
      summary: "list commands",
      run: () => (
        <ul className={styles.table}>
          {Object.entries(COMMANDS).map(([name, command]) => (
            <li key={name}>
              <Accent>{name}</Accent>
              <Dim>{command.summary}</Dim>
            </li>
          ))}
        </ul>
      ),
    },
    whoami: { summary: "who runs this machine", run: () => `${PROFILE.name.toLowerCase()} — ${PROFILE.role}` },
    neofetch: { summary: "system info, sort of", run: () => <Neofetch /> },
    about: {
      summary: "the short bio",
      run: () =>
        `Final-year ${PROFILE.education.degree} student at ${PROFILE.education.school}, ${PROFILE.education.city}. Writing software independently since ${PROFILE.freelanceSince}; now building a multi-product software company.`,
    },
    experience: {
      summary: "work history",
      run: () => (
        <div>
          <p>
            {EXPERIENCE.title} <Dim>({EXPERIENCE.period})</Dim>
          </p>
          <ul className={styles.list}>
            {EXPERIENCE.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ),
    },
    products: {
      summary: "the company's product line",
      run: () => (
        <ul className={styles.table}>
          {PRODUCTS.map((product) => (
            <li key={product.name}>
              <span>{product.name}</span>
              <Dim>
                [{product.platform.toLowerCase()}] {product.summary}
              </Dim>
            </li>
          ))}
        </ul>
      ),
    },
    projects: {
      summary: "deployed work — use `open <id>`",
      run: () => (
        <ul className={styles.table}>
          {PROJECTS.map((project) => (
            <li key={project.id}>
              <Accent>{project.id}</Accent>
              <Dim>
                {project.status === "live" && project.url ? hostOf(project.url) : "in development"}
              </Dim>
            </li>
          ))}
        </ul>
      ),
    },
    skills: {
      summary: "the toolkit",
      run: () => (
        <ul className={styles.table}>
          {SKILL_GROUPS.map((group) => (
            <li key={group.id}>
              <span>{group.title.toLowerCase()}</span>
              <Dim>{group.skills.map((skill) => skill.name).join(", ")}</Dim>
            </li>
          ))}
        </ul>
      ),
    },
    contact: {
      summary: "where to reach me",
      run: () => (
        <ul className={styles.table}>
          <li>
            <span>email</span>
            <a href={`mailto:${PROFILE.email}`} className={styles.link}>
              {PROFILE.email}
            </a>
          </li>
          {SOCIALS.map((social) => (
            <li key={social.key}>
              <span>{social.key}</span>
              <a href={social.href} target="_blank" rel="noreferrer" className={styles.link}>
                {social.handle}
              </a>
            </li>
          ))}
        </ul>
      ),
    },
    ls: {
      summary: "pages you can `open`",
      run: () => (
        <p className={styles.columns}>
          {Object.keys(ROUTES).map((route) => (
            <Accent key={route}>{route}/</Accent>
          ))}
        </p>
      ),
    },
    open: {
      summary: "open <page | project id | social>",
      run: (args) => (args[0] ? go(args[0]) : <span>usage: open &lt;target&gt;</span>),
    },
    cd: { summary: "alias for open", run: (args) => (args[0] ? go(args[0].replace(/^~?\/?/, "")) : go("home")) },
    date: {
      summary: "local time in Nashik",
      run: () =>
        new Intl.DateTimeFormat("en-GB", {
          dateStyle: "full",
          timeStyle: "short",
          timeZone: PROFILE.timezone,
        }).format(new Date()),
    },
    echo: { summary: "print text", run: (args) => args.join(" ") },
    history: {
      summary: "commands you've run",
      run: () =>
        history.length ? (
          <ol className={styles.list}>
            {history.map((item, index) => (
              <li key={`${item}-${index}`}>
                <Dim>{String(index + 1).padStart(3, " ")}</Dim> {item}
              </li>
            ))}
          </ol>
        ) : (
          <Dim>no history yet</Dim>
        ),
    },
    clear: { summary: "clear the screen (or Ctrl+L)", run: () => null },
  };

  const NAMES = Object.keys(COMMANDS);

  const execute = (raw: string) => {
    const line = raw.trim();
    const id = nextId.current++;
    if (!line) {
      setEntries((current) => [...current, { id, command: "", output: null }]);
      return;
    }
    setHistory((current) => [...current, line]);
    setCursor(-1);
    const [name, ...args] = line.split(/\s+/);
    const key = name.toLowerCase();
    if (key === "clear") {
      setEntries([]);
      return;
    }
    let output: ReactNode;
    if (key === "sudo") output = <span>nice try. this incident will not be reported.</span>;
    else if (COMMANDS[key]) output = COMMANDS[key].run(args);
    else
      output = (
        <span>
          command not found: {name}. Type <Accent>help</Accent>.
        </span>
      );
    setEntries((current) => [...current, { id, command: line, output }]);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      execute(value);
      setValue("");
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.length) return;
      const next = cursor === -1 ? history.length - 1 : Math.max(0, cursor - 1);
      setCursor(next);
      setValue(history[next]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (cursor === -1) return;
      const next = cursor + 1;
      if (next >= history.length) {
        setCursor(-1);
        setValue("");
      } else {
        setCursor(next);
        setValue(history[next]);
      }
    } else if (event.key === "Tab") {
      event.preventDefault();
      const [head, ...rest] = value.split(" ");
      if (rest.length === 0) {
        const match = NAMES.filter((name) => name.startsWith(head.toLowerCase()));
        if (match.length === 1) setValue(`${match[0]} `);
      } else if (head === "open" || head === "cd") {
        const targets = [...Object.keys(ROUTES), ...PROJECTS.map((p) => p.id), ...SOCIALS.map((s) => s.key)];
        const match = targets.filter((target) => target.startsWith(rest.join(" ").toLowerCase()));
        if (match.length === 1) setValue(`${head} ${match[0]}`);
      }
    } else if (event.key.toLowerCase() === "l" && event.ctrlKey) {
      event.preventDefault();
      setEntries([]);
    }
  };

  const runChip = (command: string) => {
    execute(command);
    inputRef.current?.focus({ preventScroll: true });
  };

  return (
    <div>
      <div className={styles.window}>
        <div className={styles.titlebar}>
          <span className={styles.title}>Shell over this site&apos;s data</span>
          <span className={styles.title}>Tab completes · ↑ ↓ history · Ctrl+L clears</span>
        </div>
        {/* Clicking anywhere in the body focuses the prompt, like a real terminal. */}
        <div ref={bodyRef} className={clsx(styles.body, "thin-scrollbar")} onClick={() => inputRef.current?.focus()} data-lenis-prevent>
          <div aria-live="polite">
            {entries.map((entry) => (
              <div key={entry.id} className={styles.entry}>
                {entry.command !== undefined ? (
                  <p>
                    <span className={styles.prompt}>{PROMPT}</span> {entry.command}
                  </p>
                ) : null}
                {entry.output !== null && entry.output !== undefined ? (
                  <div className={styles.output}>{entry.output}</div>
                ) : null}
              </div>
            ))}
          </div>
          <label className={styles.inputRow}>
            <span className={styles.prompt}>{PROMPT}</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={onKeyDown}
              className={styles.input}
              aria-label="Terminal input"
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </label>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className={styles.chipLabel}>try</span>
        {["help", "projects", "products", "contact", "open brain"].map((command) => (
          <button key={command} type="button" className={styles.chip} onClick={() => runChip(command)}>
            {command}
          </button>
        ))}
      </div>
    </div>
  );
}
