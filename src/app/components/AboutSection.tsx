'use client'
import Image from "next/image";
import {useState, useTransition} from "react";
import {TabButton} from "@/app/components/TabButton";
import {ITabData} from "../../../types/types";

const TAB_DATA: ITabData[] = [
    {
        title: 'Навыки',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Алгоритмы и структуры данных</li>
                <li>ООП</li>
                <li>MVC/MVP</li>
            </ul>
        )
    },
    {
        title: 'Образование',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Выпускник магистратуры МИСиС в 2025. Информационные системы и технологии.</li>
                <li>Являюсь студентом на курсе Веб-разработки Яндекс Практикум.</li>
            </ul>
        )
    }
]

export const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/laptop.jpg' alt='laptop' width={500} height={500} className='rounded-lg' />
                <div className='flex flex-col mt-4 md:mt-0 h-full'>
                    <h2 className='text-4xl font-bold mb-4'>Обо мне</h2>
                    <p className='text-base md:text-lg'>С мая 2023 года по апрель 2024 года я активно развивал свои навыки в области Frontend-разработки на курсах Хекслета по подписке. Помимо этого, я являюсь студентом магистратуры МИСиС по информационным технологиям и прохожу курс Веб-разработки в Яндекс Практикуме.</p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'} >
                            Навыки
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'} >
                            Образование
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    )
}
