"use client"
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const Page = ({ params }) => {
  const objNumber = Number(params.slug - 1)
  const objArray = [
    {
      id: 1,
      imageSrc: "/date.png",
      answers: ["تفاحة", "تمر", "البرتقالي"],
      correctAnswer: "تمر",
      speak: "tamiru",
    },
    {
      id: 2,
      imageSrc: "/apple.png",
      answers: ["تمر", "تفاحة", "البرتقالي"],
      correctAnswer: "تفاحة",
      speak: "tufaahatan",
    },
    {
      id: 3,
      imageSrc: "/orange.png",
      answers: ["تمر", "البرتقالي", "تفاحة"],
      correctAnswer: "البرتقالي",
      speak: "alburtuqaliu",
    },
  ]
  const [ans, setAns] = useState("")
  const [status, setStatus] = useState("neutral")
  const speakLetter = () => {
    const speech = new SpeechSynthesisUtterance(objArray[objNumber].speak)
    const voices = window.speechSynthesis.getVoices()
    speech.voice = voices[1] //
    speech.rate = 0.5 //
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
      {/* pb-8 pt-5 md:px-10 */}
      <div className="flex justify-center items-center mt-16 md:mt-32">
        <div className="w-4/5 md:w-1/3">
          <h1 className="text-2xl font-bold">What sound does this make?</h1>
          <div className="mt-16 md:mt-32 flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <div className="relative flex justify-center items-center min-w-[200px] pb-8 border-2 border-slate-300 rounded-xl">
              <Image
                src={objArray[objNumber]?.imageSrc}
                alt="picName"
                width={100}
                height={100}
                className="pt-14"
              />
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
                  className={`border-2 border-slate-300 text-2xl rounded-xl min-w-[200px] min-h-[60px] mb-3 ${
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
        } p-4 flex justify-around items-center fixed bottom-0 left-0 right-0`}
      >
        {status === "right" ? (
          <div className="flex justify-center items-center">
            <div className="text-black text-2xl font-bold mr-5">Correct</div>
            <Link
              className="px-4 py-2 bg-green-300 hover:bg-green-600 text-black font-bold rounded"
              // href="/learn"
              href={
                objNumber + 1 >= objArray.length
                  ? "/complete"
                  : `/advanced/${objNumber + 2}`
              }
            >
              Next
            </Link>
          </div>
        ) : status === "wrong" ? (
          <div className="flex justify-center items-center">
            <div className="text-white text-2xl font-bold mr-5">Wrong</div>
            <button
              className="px-4 py-2 bg-green-300 hover:bg-green-600 text-black font-bold rounded"
              onClick={handleTryAgain}
            >
              Try Again
            </button>
          </div>
        ) : (
          <Link
            href={
              objNumber + 1 >= objArray.length
                ? "/complete"
                : `/advanced/${objNumber + 2}`
            }
            className="px-4 py-2 bg-blue-300 hover:bg-blue-600 text-black font-bold rounded"
          >
            Skip
          </Link>
        )}
        <button
          className="px-4 py-2 bg-green-300 hover:bg-green-600 text-black font-bold rounded"
          onClick={handleCheck}
        >
          Check
        </button>
      </div>
    </>
  )
}

export default Page
