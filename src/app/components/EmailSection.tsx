"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const EmailSection = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setStatus('Sending...');

        try {
            const result = await emailjs.send(
                'service_kv8niie',
                'template_3eq02kh',
                formData,
                '2EF8QY_NUkR0pdObp'
            );
            setStatus('Message sent successfully!');
            setFormData({ email: '', subject: '', message: '' });
        } catch (error) {
            setStatus(`Failed to send message: ${error.message}`);
        }
    };

    return (
        <section className='grid md:grid-cols-2 my-12 md:my-12 gap-4 relative'>
            <div>
                <h5 className='text-4xl font-bold mb-8'>Обратная связь</h5>
                <p className='text-base md:text-lg'>Lorem ipsum</p>
                <div className='socials flex flex-row gap-2'>
                    {/* Social Links */}
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <div>
                        <label htmlFor="email" className='text-white mb-1 block text-sm font-medium'>Ваша почта</label>
                        <input
                            name="email"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5'
                            type='email' id='email' value={formData.email} onChange={handleChange} required placeholder='yourmail@mail.com'/>
                    </div>
                    <div>
                        <label htmlFor="subject" className='text-white mb-1 block text-sm font-medium'>Тема</label>
                        <input
                            name="subject"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5'
                            type='text' id='subject' value={formData.subject} onChange={handleChange} required placeholder='Тема письма'/>
                    </div>
                    <div>
                        <label htmlFor="message" className='text-white mb-1 block text-sm font-medium'>Сообщение</label>
                        <textarea
                            name="message"
                            id="message"
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5'
                            value={formData.message} onChange={handleChange} placeholder='Давайте поговорим о...'
                        />
                    </div>
                    <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Отправить</button>
                    <p>{status}</p>
                </form>
            </div>
        </section>
    );
};
