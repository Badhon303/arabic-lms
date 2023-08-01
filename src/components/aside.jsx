import Image from "next/image"
import { FcHome } from "react-icons/fc"
import { FcReading } from "react-icons/fc"
import { FcPortraitMode } from "react-icons/fc"
import Link from "next/link"

const Aside = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r-2 border-slate-300 hidden sm:block">
        {/* Sidebar content goes here  */}
        {/* <div className="bg-red-300 mt-5"> */}
        <div className="flex justify-center items-center mt-5">
          <Image src="/logo.png" width={60} height={50} alt="Learn Arabic" />
          <h1 className="font-bold text-2xl">Learn Arabic</h1>
        </div>
        {/* </div> */}
        <ul className="p-4 mt-5">
          <Link href="http://115.127.24.183:3001/www.leads.com/index.html">
            <li className="mb-5 ml-5 p-2 flex justify-start items-center hover:bg-[#f7f7f7] rounded-lg">
              <FcHome className="h-10 w-10" />
              <p className="block px-5 py-1 rounded font-bold">HOME</p>
            </li>
          </Link>
          <Link href="/learn">
            <li className="mb-5 ml-5 p-2 flex justify-start items-center hover:bg-[#f7f7f7] rounded-lg">
              <FcReading className="h-10 w-10" />
              <p className="block px-5 py-1 rounded font-bold">LEARN</p>
            </li>
          </Link>
          <Link href="/learn">
            <li className="mb-2 ml-5 p-2 flex justify-start items-center hover:bg-[#f7f7f7] rounded-lg">
              <FcPortraitMode className="h-10 w-10" />
              <p className="block px-5 py-1 rounded font-bold">LEADER</p>
            </li>
          </Link>
          {/* Add more links as needed  */}
        </ul>
      </aside>

      {/* Main Content  */}
      <div className="flex-1">
        {/* Main content goes here */}
        {/* <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to Arabic Learning
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula, urna non mattis consequat.
          </p>
        </div> */}
        {/* <main className="ml-60 pt-16 max-h-screen overflow-auto"> */}
        <div className="px-6 py-8 mt-5 sm:mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">
              <h1 className="text-3xl font-bold mb-10">Learning Progress</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-stretch">
                  <div className="text-gray-400 text-xs">
                    Members
                    <br />
                    connected
                  </div>
                  <div className="h-100 border-l mx-4"></div>
                </div>
                <div className="flex items-center gap-x-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="bi bi-chat-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                  >
                    Open
                  </button>
                </div>
              </div>

              <hr className="my-10" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 overflow-hidden">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Stats</h2>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <div className="p-4 bg-green-100 rounded-xl">
                        <div className="font-bold text-xl text-gray-800 leading-none">
                          Good day, <br />
                          Adnan
                        </div>
                        <div className="mt-5">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                          >
                            Start tracking
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                      <div className="font-bold text-2xl leading-none">20</div>
                      <div className="mt-2">Tasks finished</div>
                    </div>
                    <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                      <div className="font-bold text-2xl leading-none">5.5</div>
                      <div className="mt-2">Tracked hours</div>
                    </div>
                    <div className="col-span-2">
                      <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                        <div className="font-bold text-xl leading-none">
                          Your daily plan
                        </div>
                        <div className="mt-2">5 of 8 completed</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Your tasks today</h2>

                  <div className="space-y-4">
                    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                      <div className="flex justify-between">
                        <div className="text-gray-400 text-xs">Alphabet</div>
                        <div className="text-gray-400 text-xs">4h</div>
                      </div>
                      <p className="font-bold hover:text-yellow-800 hover:underline">
                        14 Alphabets left
                      </p>
                      <div className="text-sm text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          className="text-gray-800 inline align-middle mr-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                        Deadline is today
                      </div>
                    </div>
                    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                      <div className="flex justify-between">
                        <div className="text-gray-400 text-xs">Grace Aroma</div>
                        <div className="text-gray-400 text-xs">7d</div>
                      </div>
                      <p className="font-bold hover:text-yellow-800 hover:underline">
                        New course review
                      </p>
                      <div className="text-sm text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          className="text-gray-800 inline align-middle mr-1"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                        New feedback
                      </div>
                    </div>
                    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                      <div className="flex justify-between">
                        <div className="text-gray-400 text-xs">
                          Words Learned
                        </div>
                        <div className="text-gray-400 text-xs">2h</div>
                      </div>
                      <p className="font-bold hover:text-yellow-800 hover:underline">
                        7 Words Learned
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </main> */}
      </div>
    </div>
  )
}

export default Aside
