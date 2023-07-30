import Image from "next/image"
import Link from "next/link"

const Learn = () => {
  return (
    <>
      <Link href="/" className="p-2">
        X
      </Link>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-10">Choose Your Path</h1>
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            {/* Option 1: Learning Arabic for the first time  */}
            <Link
              href="/lesson/1"
              className="border-2 border-slate-300 p-8 md:mr-4 rounded-xl flex flex-col items-center"
            >
              <Image src="/book.png" alt="book" height={100} width={100} />
              <h2 className="text-lg font-semibold mb-4">
                Learning Arabic for the first time?
              </h2>
              {/* Add content for Option 1 here */}
              <p className="block mt-4 text-slate-600">Start from scratch!</p>
            </Link>
            {/* </Link> */}

            {/* Option 2: Already know some Arabic  */}
            <Link
              href="/advanced/1"
              className="border-2 border-slate-300 p-8 ml-4 rounded-xl flex flex-col items-center"
            >
              <Image src="/book.png" alt="book" height={100} width={100} />
              <h2 className="text-lg font-semibold mb-4">
                Already know some Arabic?
              </h2>
              {/* Add content for Option 2 here */}
              <p className="block mt-4 text-slate-600">
                Check your level here!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Learn
