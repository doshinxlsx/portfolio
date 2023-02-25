import Head from "next/head";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import sudoku from "../public/sudoku.png";
import advice from "../public/advices.png";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark h-screen" : "h-screen"}>
      <Head>
        <title>Dominik Orincsai</title>
        <meta name="description" content="Dominik Orincsai's portfolio" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 min-h-screen dark:bg-gray-800">
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              Dominik Orincsai
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-xl dark:text-white"
                  />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-xl dark:text-white"
                  />
                )}
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-cyan-300">
              Dominik Orincsai
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto dark:text-white">
              Passionate frontend developer with a focus on user experience and
              a love for clean, maintainable code.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
            <a href="https://www.linkedin.com/in/dominikorincsai/">
              <AiFillLinkedin />
            </a>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold py-1 border-b-4 w-9 border-gray-400 dark:text-cyan-300">
              Bio
            </h3>
            <ul className="mt-2 leading-8 dark:text-white">
              <li>
                <span className="font-bold mr-2 dark:text-cyan-300">2002</span>{" "}
                Born in Mako, Csongrad, Hungary
              </li>
              <li>
                <span className="font-bold mr-2 dark:text-cyan-300">2021</span>{" "}
                Completed the IT System Operator major in High School.
              </li>
              <li>
                <span className="font-bold mr-2 dark:text-cyan-300">
                  2021 to present
                </span>{" "}
                Attending Bachelor&apos;s Program in the Faculty of Natural
                Sciences and Informatics at University of Szeged
              </li>
              <li>
                <span className="font-bold mr-2 dark:text-cyan-300">2022</span>{" "}
                Worked at weCan Technology Zrt.
              </li>
              <li>
                <span className="font-bold mr-2 dark:text-cyan-300">2022</span>{" "}
                Worked at Wedding Manager Kft.
              </li>
            </ul>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold py-1 border-b-4 w-16 border-gray-400 dark:text-cyan-300">
              Skills
            </h3>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                <div className="text-center md:border-r">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl dark:text-white">
                    7/10
                  </h6>
                  <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base dark:text-cyan-300">
                    React
                  </p>
                </div>
                <div className="text-center md:border-r">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl dark:text-white">
                    7/10
                  </h6>
                  <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base dark:text-cyan-300">
                    Javascript
                  </p>
                </div>
                <div className="text-center md:border-r">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl dark:text-white">
                    6/10
                  </h6>
                  <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base dark:text-cyan-300">
                    Python
                  </p>
                </div>
                <div className="text-center">
                  <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl dark:text-white">
                    7/10
                  </h6>
                  <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base dark:text-cyan-300">
                    Networking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-20">
            <h3 className="text-2xl font-bold py-1 border-b-4 w-24 border-gray-400 dark:text-cyan-300">
              Projects
            </h3>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-900 flex-1">
                <Image
                  className="rounded-t-lg"
                  src={sudoku}
                  alt="Sudoku Solver image"
                />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-cyan-300">
                  Sudoku Solver
                </h3>
                <p className="py-2 dark:text-white">
                  A simple web app which solves a user-defined sudoku in no
                  time.
                </p>
                <h4 className="py-4 underline underline-offset-4 font-bold text-gray-600 dark:text-cyan-300">
                  Tech stack:
                </h4>
                <p className="text-gray-800 py-1 dark:text-white">React</p>
                <p className="text-gray-800 py-1 dark:text-white">Javascript</p>
                <p className="text-gray-800 py-1 dark:text-white">Jest</p>
                <p className="text-gray-800 py-1 dark:text-white">
                  React Hooks
                </p>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-900 flex-1">
                <Image
                  className="rounded-t-lg"
                  src={advice}
                  alt="Sudoku Solver image"
                />
                <h3 className="text-lg font-medium pt-8 pb-2 dark:text-cyan-300 ">
                  Advice Generator
                </h3>
                <p className="py-2 dark:text-white">
                  An app that generates an advice - wise or fun - when rolling
                  the dice.
                </p>
                <h4 className="py-4 underline underline-offset-4 font-bold text-gray-600 dark:text-cyan-300">
                  Tech stack:
                </h4>
                <p className="text-gray-800 py-1 dark:text-white">React</p>
                <p className="text-gray-800 py-1 dark:text-white">Typescript</p>
                <p className="text-gray-800 py-1 dark:text-white">
                  styled-components
                </p>
                <p className="text-gray-800 py-1 dark:text-white">Axios</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
