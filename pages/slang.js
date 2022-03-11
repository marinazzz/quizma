import React, { useState } from "react";
import useSWR from "swr";
import Link from "next/link";

export default function Slang() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("/api/slang", fetcher);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);
  const [show, setShow] = useState(false);
  const [clickAnswer, setClickAnswer] = useState(false);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  const checkAnswer = (variant) => {
    setMyAnswer(variant);
    setClickAnswer(true);
  };

  const checkCorrectAnswer = () => {
    if (myAnswer === data[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const reset = () => {
    setShow(false);
    setClickAnswer(false);
  };

  const finishHandler = () => {
    if (currentQuestion === data.length - 1) {
      setFinish(true);
    }
  };

  const startOver = () => {
    setCurrentQuestion(0);
    setFinish(false);
    setMyAnswer("");
    setScore(0);
  };

  return (
    <div className="app">
      {finish ? (
        <div>
          <div className="">
            <h3 className="">
              {`Du fikk
            ${score} av ${data.length}
            `}
            </h3>
            <button className="button" onClick={() => startOver()}>
              Spill på nytt
            </button>
            <Link href="/">
              <a href="" className="button">
                <p>Prøv en annen kategori</p>
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span className="">{`${currentQuestion + 1}/${data.length}`}</span>
            <h2 className="">{data[currentQuestion].question}</h2>
            {data[currentQuestion].variants.map((variant) => (
              // eslint-disable-next-line react/jsx-key
              <div className="">
                <button
                  key={variant.id}
                  className={`button ${
                    myAnswer === variant
                      ? myAnswer === data[currentQuestion].answer
                        ? "correctAnswer"
                        : "incorrectAnswer"
                      : ""
                  }`}
                  onClick={() => checkAnswer(variant)}
                >
                  {variant}
                </button>
              </div>
            ))}

            <div className="controllers">
              {currentQuestion > 0 && (
                <button
                  className="button button-controller"
                  onClick={() => {
                    setCurrentQuestion(currentQuestion - 1);
                    checkCorrectAnswer();
                    reset();
                  }}
                >
                  Forrige
                </button>
              )}

              {currentQuestion < data.length - 1 && (
                <button
                  className="button button-controller"
                  onClick={() => {
                    setCurrentQuestion(currentQuestion + 1);
                    checkCorrectAnswer();
                    reset();
                  }}
                >
                  Neste
                </button>
              )}

              {currentQuestion + 1 === data.length && (
                <button
                  className="button button-controller"
                  onClick={() => finishHandler()}
                >
                  Send inn
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
