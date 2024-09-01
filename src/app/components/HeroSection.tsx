"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const HeroSection = ({ onScrollToContact }: {onScrollToContact: any}) => {
  return (
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-12 justify-items-center md:justify-items-stretch items-center">
          <motion.div
              initial={{ opacity: 0, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-8 text-center sm:text-left"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent block bg-clip-text bg-gradient-to-r from-purple-400 to-red-800">
              Привет! Я {"\n"}
            </span>
              <TypeAnimation
                  sequence={["Войнович Денис", 2000, "Frontend-разработчик", 2000]}
                  wrapper="span"
                  speed={1}
                  repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
              Создаю современные и интерактивные веб-приложения
            </p>
            <div>
              <button
                  onClick={onScrollToContact}
                  className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-800 hover:bg-slate-200 text-white"
              >
                Написать мне
              </button>
              <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/cv/cv(Voinovich).pdf';
                    link.download = 'cv(Voinovich).pdf';
                    link.click();
                  }}
                  className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-800 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Скачать резюме
              </span>
              </button>
            </div>
          </motion.div>
          <motion.div
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 mt-5"
          >
            <Image
                className="rounded-lg mt-4 lg:mt-0"
                src='/images/photo.jpg'
                alt="profile-photo"
                width={300}
                height={300}
            />
          </motion.div>
        </div>
      </section>
  );
};
