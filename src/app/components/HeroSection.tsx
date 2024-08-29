'use client'
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";

export const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12 items-center'>
                <div className='col-span-7 text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent block bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Привет! Я {'\n'}</span>
                        <TypeAnimation
                            sequence={[
                                'Денис',
                                2000,
                                'Frontend-разработчик',
                                2000,
                            ]}
                            wrapper="span"
                            speed={1}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>Lorem ipsum</p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire me
                        </button>
                        <button
                            className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Скачать резюме</span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 mt-5'>
                    <Image
                        className='rounded-lg mt-4 lg:mt-0'
                        src='/images/photo.jfif'
                        alt='profile-photo'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
};
