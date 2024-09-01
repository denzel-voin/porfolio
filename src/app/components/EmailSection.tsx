"use client";
import React, {ForwardedRef, forwardRef, useState} from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import Image from "next/image";

export const EmailSection = forwardRef((props, ref: ForwardedRef<any>) => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("Отправка...");

    try {
      const result = await emailjs.send(
        "service_kv8niie",
        "template_3eq02kh",
        formData,
        "2EF8QY_NUkR0pdObp",
      );
      setStatus("Сообщение успешно отправлено!");
      setFormData({ email: "", subject: "", message: "" });
    } catch (error: any) {
      setStatus(`Ошибка отправки: ${error.message}`);
    }
  };

  return (
      <section id='contacts' ref={ref} className="grid md:grid-cols-2 my-12 md:my-12 gap-4 relative">
        <div>
          <h5 className="text-4xl font-bold mb-8 text-white">Обратная связь</h5>
          <p className="text-base md:text-lg mb-4 text-white">
            Есть вопросы или предложения? Всегда рад помочь! Напишите мне через
            контактную форму, и я свяжусь с вами в ближайшее время. <br /> Мои
            контакты в социальных сетях:
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/denzel-voin">
              <Image src="/github.svg" alt="Github Icon" width={40} height={40} />
            </Link>
            <Link href="https://t.me/Denzel_vojn">
              <Image
                  src="/telegram.svg"
                  alt="Telegram Icon"
                  width={40}
                  height={40}
              />
            </Link>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <label
                  htmlFor="email"
                  className="text-white mb-1 block text-sm font-medium"
              >
                Ваша почта
              </label>
              <input
                  name="email"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="yourmail@mail.com"
              />
            </div>
            <div>
              <label
                  htmlFor="subject"
                  className="text-white mb-1 block text-sm font-medium"
              >
                Тема
              </label>
              <input
                  name="subject"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Тема письма"
              />
            </div>
            <div>
              <label
                  htmlFor="message"
                  className="text-white mb-1 block text-sm font-medium"
              >
                Сообщение
              </label>
              <textarea
                  name="message"
                  id="message"
                  className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-2.5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Давайте поговорим о..."
              />
            </div>
            <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Отправить
            </button>
            <p>{status}</p>
          </form>
        </div>
      </section>
  );
});

EmailSection.displayName = "EmailSection";
