"use client"
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { useState } from "react"
import Link from "next/link"

const Page = ({ params }) => {
  const objNumber = Number(params.slug - 1)
  const objArray = [
    {
      id: 1,
      letter: "و",
      answers: ["da", "uu", "aa"],
      correctAnswer: "uu",
      speak: "A",
    },
    {
      id: 2,
      letter: "B",
      answers: ["daa", "uuu", "aaa"],
      correctAnswer: "uuu",
      speak: "B",
    },
    {
      id: 3,
      letter: "C",
      answers: ["daaa", "uuuu", "aaaa"],
      correctAnswer: "uuuu",
      speak: "C",
    },
  ]
  const [ans, setAns] = useState("")
  const [status, setStatus] = useState("neutral")
  const speakLetter = () => {
    const speech = new SpeechSynthesisUtterance(objArray[objNumber].speak)
    speech.lang = "en" // Set language to English
    window.speechSynthesis.speak(speech)
  }
  const handleCheck = () => {
    ans === objArray[objNumber].correctAnswer
      ? setStatus("right")
      : setStatus("wrong")
  }
  const handleTryAgain = () => {
    setAns("")
    setStatus("neutral")
  }
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <div className="w-4/5 md:w-2/4 bg-gray-200 rounded">
          <div
            className="h-4 bg-blue-500 rounded"
            style={{ width: `${(objNumber / objArray.length) * 100}%` }}
          ></div>
        </div>
        <div className="pl-5">{objArray.length}</div>
      </div>
      <div className="flex justify-center items-center mt-16 md:mt-32">
        <div className="w-4/5 md:w-1/3">
          <h1 className="text-2xl font-bold">What sound does this make?</h1>
          <div className="mt-16 md:mt-32 flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <div className="relative pb-8 pt-5 md:px-10 border-2 border-slate-300 rounded-xl">
              <div className="text-9xl font-bold text-center">
                {objArray[objNumber]?.letter}
              </div>
              <button
                className="absolute top-4 left-4 bg-blue-400 hover:bg-blue-600 p-2 rounded-xl"
                onClick={speakLetter}
              >
                <HiOutlineSpeakerphone className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              {objArray[objNumber]?.answers.map((item, index) => (
                <button
                  key={index}
                  className={`border-2 border-slate-300 rounded-xl mt-3 px-40 py-4 ${
                    ans === `${item}` && "bg-blue-300"
                  }`}
                  onClick={() => setAns(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          status === "right"
            ? "bg-green-200"
            : status === "wrong"
            ? "bg-red-200"
            : "bg-gray-200"
        } p-4 flex justify-around items-center mt-20 md:mt-40`}
      >
        {status === "right" ? (
          <div className="flex justify-center items-center">
            <div className="text-white text-2xl font-bold mr-5">Correct</div>
            <Link
              className="px-4 py-2 bg-green-300 hover:bg-green-600 text-white rounded"
              // href="/learn"
              href={
                objNumber + 1 >= objArray.length
                  ? "/complete"
                  : `/lesson/${objNumber + 2}`
              }
            >
              Next
            </Link>
          </div>
        ) : status === "wrong" ? (
          <div className="flex justify-center items-center">
            <div className="text-white text-2xl font-bold mr-5">Wrong</div>
            <button
              className="px-4 py-2 bg-green-300 hover:bg-green-600 text-white rounded"
              onClick={handleTryAgain}
            >
              Try Again
            </button>
          </div>
        ) : (
          <button className="px-4 py-2 bg-blue-300 hover:bg-blue-600 text-white rounded">
            Skip
          </button>
        )}
        <button
          className="px-4 py-2 bg-green-300 hover:bg-green-600 text-white rounded"
          onClick={handleCheck}
        >
          Check
        </button>
      </div>
    </>
  )
}

export default Page
