"use client";

import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, RotateCcw, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import Button from "@/components/shared/Button/Button";
import { QUIZ } from "@/data/brain-quiz";
import styles from "./BrainQuiz.module.css";

const verdict = (score: number, total: number) => {
  const ratio = score / total;
  if (ratio === 1) return "You think like the engine. Flawless.";
  if (ratio >= 0.75) return "Senior-level instincts. A couple of the classics got you.";
  if (ratio >= 0.5) return "Solid. The coercion rules are worth one more read.";
  return "JavaScript is weird — that's the point. Run it back.";
};

export default function BrainQuiz() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = QUIZ[index];
  const answered = picked !== null;

  const choose = useCallback(
    (option: number) => {
      if (answered || done) return;
      setPicked(option);
      if (option === question.answer) setScore((value) => value + 1);
    },
    [answered, done, question],
  );

  const next = useCallback(() => {
    if (!answered) return;
    if (index === QUIZ.length - 1) {
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setPicked(null);
  }, [answered, index]);

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  // Keyboard: 1–4 to answer, Enter to continue.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLElement && /^(INPUT|TEXTAREA)$/.test(event.target.tagName)) return;
      const number = Number(event.key);
      if (number >= 1 && number <= question.options.length) choose(number - 1);
      else if (event.key === "Enter" && answered && !done) {
        event.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [choose, next, answered, done, question]);

  const progress = ((index + (answered ? 1 : 0)) / QUIZ.length) * 100;
  const slide = {
    initial: reduce ? false : { opacity: 0, x: 16 },
    animate: { opacity: 1, x: 0 },
    exit: reduce ? { opacity: 0 } : { opacity: 0, x: -16 },
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className={styles.shell}>
      <div className={styles.header}>
        <span>
          {done ? "results" : `question ${String(index + 1).padStart(2, "0")} / ${String(QUIZ.length).padStart(2, "0")}`}
        </span>
        <span>
          score <span className={styles.score}>{score}</span>
        </span>
      </div>
      <div className={styles.track} aria-hidden="true">
        <motion.div className={styles.bar} animate={{ width: `${done ? 100 : progress}%` }} transition={{ duration: 0.4 }} />
      </div>

      <div className={styles.stage}>
        <AnimatePresence mode="wait" initial={false}>
          {done ? (
            <motion.div key="done" {...slide} className={styles.result}>
              <p className={styles.resultScore}>
                {score}
                <span>/{QUIZ.length}</span>
              </p>
              <p className={styles.resultText}>{verdict(score, QUIZ.length)}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button onClick={restart} icon={<RotateCcw size={15} />}>
                  Play again
                </Button>
                <Button href="/lets-fun" variant="ghost">
                  Back to the terminal
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div key={question.id} {...slide}>
              <p className={styles.prompt}>What does this print?</p>
              <pre className={clsx(styles.code, "thin-scrollbar")}>
                <code>{question.code}</code>
              </pre>

              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {question.options.map((option, optionIndex) => {
                  const isAnswer = optionIndex === question.answer;
                  const isPicked = optionIndex === picked;
                  return (
                    <li key={option}>
                      <button
                        type="button"
                        onClick={() => choose(optionIndex)}
                        disabled={answered}
                        className={clsx(
                          styles.option,
                          answered && isAnswer && styles.correct,
                          answered && isPicked && !isAnswer && styles.wrong,
                          answered && !isAnswer && !isPicked && styles.faded,
                        )}
                      >
                        <span className={styles.key}>{optionIndex + 1}</span>
                        <code className={styles.optionText}>{option}</code>
                        {answered && isAnswer ? <Check size={16} className={styles.mark} /> : null}
                        {answered && isPicked && !isAnswer ? <X size={16} className={styles.mark} /> : null}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <AnimatePresence>
                {answered ? (
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.explain}
                    aria-live="polite"
                  >
                    <p>
                      <span className={picked === question.answer ? styles.good : styles.bad}>
                        {picked === question.answer ? "Correct." : "Not quite."}
                      </span>{" "}
                      {question.explanation}
                    </p>
                    <Button onClick={next} icon={<ArrowRight size={15} />} className="mt-4">
                      {index === QUIZ.length - 1 ? "See results" : "Next"}
                    </Button>
                  </motion.div>
                ) : (
                  <p className={styles.hint}>press 1–4 or click an answer</p>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
