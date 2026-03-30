"use client";

import { useState } from "react";
import { FooterSection } from "@/components/ui/footer-section";
import { LoadingAnimation } from "@/components/ui/LoadingAnimation";

// Asset URLs from Figma MCP
const imgDsc003191 = "http://localhost:3845/assets/d0a25c004aae6a2ca7a830569ca22a2fafdc0ae1.png";
const imgImage2 = "http://localhost:3845/assets/b7a7aa03759f8a3528b4cda6225af8956a60765c.png";
const imgImage3 = "http://localhost:3845/assets/bd54c64b552db44f7b48293a31fa55c106ce108c.png";
const imgImage4 = "http://localhost:3845/assets/2ff2f5947100f862552e80f18bcbefe81d783504.png";
const imgImage1Vectorized = "http://localhost:3845/assets/d2d90945c958d34039b2a87eb6be17e1961d9b8c.svg";
const imgLogoWord2026 = "http://localhost:3845/assets/b92cdd34714baf4251d48327afd6406714070472.svg";

/* ── Tag pill component ── */
function TagPill({ children }: { children: string }) {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(0,0,0,0.2)] flex items-center justify-center px-[20px] py-[16px] rounded-[12px] hover:bg-white/20 transition-colors duration-200">
      <span className="font-medium leading-[1.1] text-[16px] xl:text-[20px] text-white whitespace-nowrap">{children}</span>
    </div>
  );
}

/* ── Team member data ── */
const teamMembers = [
  { name: "Настя", role: "Основатель, Lead Designer", prev: "Ex Yandex", emoji: "👩‍💻" },
  { name: "Дима", role: "Senior UX Designer", prev: "Ex Sber", emoji: "👨‍🎨" },
  { name: "Катя", role: "UX Researcher", prev: "Ex VK", emoji: "🔬" },
  { name: "Артём", role: "Product Designer", prev: "Ex Ozon", emoji: "🎯" },
];

/* ── Process steps ── */
const processSteps = [
  { num: "01", title: "Погружение", desc: "Изучаем продукт, метрики и пользователей. Анализируем конкурентов и находим точки роста." },
  { num: "02", title: "Исследование", desc: "Проводим UX-исследования, интервью и аудит текущего решения." },
  { num: "03", title: "Дизайн", desc: "Проектируем интерфейсы, прототипируем и тестируем гипотезы." },
  { num: "04", title: "Внедрение", desc: "Готовим спецификации, работаем с разработкой и сопровождаем запуск." },
];

/* ── Client logos ── */
const clientLogos = ["Yandex", "Sber", "VK", "Ozon", "Tinkoff", "МТС"];

export default function Home() {
  const [is_form_open, set_is_form_open] = useState(false);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);
    set_is_form_open(false);
  }

  return (
    <LoadingAnimation>
      {/* ── Modal Form ── */}
      {is_form_open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => set_is_form_open(false)}>
          <div className="bg-white rounded-[32px] p-[48px] w-full max-w-[520px] mx-4 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => set_is_form_open(false)} className="absolute top-[24px] right-[24px] text-[#3d3d3d] hover:text-black text-2xl leading-none">&times;</button>
            <h3 className="font-semibold text-[28px] leading-[1.1] text-black mb-[8px]">Обсудить проект</h3>
            <p className="text-[16px] text-[#3d3d3d] mb-[32px] leading-[1.3]">Расскажите о задаче — мы свяжемся в течение дня</p>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-[16px]">
              <input name="name" required placeholder="Имя" className="w-full px-[20px] py-[16px] bg-[rgba(0,0,0,0.05)] rounded-[16px] text-[16px] outline-none focus:ring-2 focus:ring-[#ee2733] transition-shadow" />
              <input name="telegram" required placeholder="Telegram / Email" className="w-full px-[20px] py-[16px] bg-[rgba(0,0,0,0.05)] rounded-[16px] text-[16px] outline-none focus:ring-2 focus:ring-[#ee2733] transition-shadow" />
              <textarea name="description" rows={3} placeholder="Кратко о задаче" className="w-full px-[20px] py-[16px] bg-[rgba(0,0,0,0.05)] rounded-[16px] text-[16px] outline-none resize-none focus:ring-2 focus:ring-[#ee2733] transition-shadow" />
              <button type="submit" className="w-full bg-black text-white font-semibold text-[16px] py-[16px] rounded-[16px] hover:bg-[#ee2733] transition-colors duration-200">Отправить</button>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white text-black min-h-screen font-sans w-full max-w-[1320px] mx-auto flex flex-col xl:flex-row relative">
        {/* ═══════ Left Sidebar ═══════ */}
        <aside className="w-full xl:w-[420px] xl:sticky xl:top-0 h-auto xl:h-screen flex flex-col justify-between py-[48px] px-[32px] xl:pl-[48px] xl:pr-[32px] shrink-0 overflow-y-auto">
          <div className="flex flex-col gap-[80px]">
            {/* Logo + tagline */}
            <div className="flex flex-col gap-[16px]">
              <div className="h-[40px] relative shrink-0 w-[232px]">
                <img alt="Paprika" className="block max-w-none size-full" src={imgLogoWord2026} />
              </div>
              <p className="font-medium leading-[1.1] text-[#3d3d3d] text-[20px] max-w-[369px]">
                Эксперты в B2B SaaS продуктах — вникаем в ваш проект и повышаем метрики
              </p>
            </div>

            {/* Nav pills */}
            <nav className="flex flex-wrap gap-[6px] max-w-[369px]">
              {[
                { label: "О нас", href: "#about" },
                { label: "Кейсы", href: "#cases" },
                { label: "Процесс работы", href: "#process" },
                { label: "Нам доверяют", href: "#clients" },
                { label: "Команда", href: "#team" },
                { label: "Карьера", href: "#career" },
                { label: "Контакты", href: "#contacts" },
              ].map(({ label, href }) => (
                <a key={label} href={href} className="bg-[rgba(0,0,0,0.06)] flex items-center justify-center px-[16px] py-[10px] rounded-[12px] hover:bg-black transition-colors duration-200 cursor-pointer group">
                  <span className="font-semibold leading-[1.1] text-[#3d3d3d] group-hover:text-white text-[16px] whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* CTA block */}
          <div className="bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.05)] flex flex-col gap-[24px] items-start p-[24px] rounded-[32px] w-full mt-[60px] xl:mt-0 relative">
            <p className="font-semibold leading-[1.1] text-[20px] text-black">
              <span>Заказать или просто спросить<br />{"можно в       "}</span>
              <span className="text-[#FF0000]">telegram</span>
            </p>
            <button onClick={() => set_is_form_open(true)} className="bg-black flex items-center justify-center p-[16px] rounded-[16px] w-full hover:bg-[#FF0000] transition-colors duration-200">
              <span className="font-semibold leading-[1.1] text-[16px] text-white whitespace-nowrap">
                Или заполните форму
              </span>
            </button>
            <div className="absolute left-[109px] size-[18px] top-[49px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgImage1Vectorized} />
            </div>
          </div>
        </aside>

        {/* ═══════ Right Content ═══════ */}
        <main className="flex-1 min-w-0 flex flex-col gap-[64px] pt-[48px] pb-[120px] px-[24px] xl:pl-[0px] xl:pr-[48px]">

          {/* ──── 1. Hero (из Figma) ──── */}
          <section id="about" className="bg-[#ee2733] min-h-[600px] xl:h-[1080px] relative overflow-clip rounded-[40px] xl:rounded-[80px] w-full flex flex-col group">
            <div className="absolute bottom-[-100px] xl:bottom-[-418px] left-0 right-0 h-[600px] xl:h-[1334px] w-full z-0 pointer-events-none group-hover:scale-[1.03] transition-transform duration-700 ease-out">
              <img alt="" className="absolute inset-0 object-cover size-full" src={imgDsc003191} />
            </div>
            <div className="relative z-10 p-[32px] xl:p-[64px] flex flex-col flex-1">
              <p className="font-semibold leading-[1.1] text-[24px] xl:text-[32px] text-white w-full max-w-[760px]">
                Мы встраиваемся в команду клиента как in-house дизайнеры и помогаем B2B SaaS-продуктам решать задачи роста: от улучшения UX и редизайна до повышения конверсии и качества пользовательского опыта.
              </p>
              <div className="mt-auto flex flex-col gap-[8px] items-start">
                <p className="font-medium leading-[1.1] text-[20px] text-white whitespace-nowrap">
                  Настя, основатель студии
                </p>
                <div className="flex gap-[6px] items-center">
                  <p className="font-medium leading-[1.1] text-[20px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">Ex Lead </p>
                  <div className="opacity-70 rounded-full overflow-hidden size-[24px] shrink-0">
                    <img alt="" className="w-full h-full object-cover" src={imgImage2} />
                  </div>
                  <p className="font-medium leading-[1.1] text-[20px] text-[rgba(255,255,255,0.7)] whitespace-nowrap">Yandex</p>
                </div>
              </div>
            </div>
          </section>

          {/* ──── 2. Case 1: Factory Director (из Figma) ──── */}
          <section id="cases" className="relative flex flex-col h-[500px] xl:h-[640px] justify-between overflow-clip rounded-[40px] xl:rounded-[80px] w-full bg-black group cursor-pointer">
            <div className="absolute inset-0 z-0 pointer-events-none group-hover:scale-[1.03] transition-transform duration-700 ease-out">
              <img alt="" className="absolute object-cover size-full" src={imgImage3} />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent" />
            </div>
            <div className="relative z-10 p-[32px] xl:p-[64px] flex flex-col flex-1 justify-between">
              <p className="font-semibold leading-[1.1] text-[32px] xl:text-[48px] text-white max-w-[760px] group-hover:-translate-y-1 transition-transform duration-300">
                Factory Director — автоматизация производства, которая работает
              </p>
              <div className="flex gap-[8px] items-start flex-wrap mt-auto">
                {["UX/UI", "Исследования", "SaaS"].map((tag) => (<TagPill key={tag}>{tag}</TagPill>))}
              </div>
            </div>
          </section>

          {/* ──── 3. Case 2 (из Figma) ──── */}
          <section className="relative flex flex-col h-[500px] xl:h-[640px] justify-between overflow-clip rounded-[40px] xl:rounded-[80px] w-full bg-[#663e2e] group cursor-pointer">
            <div className="absolute inset-0 z-0 pointer-events-none group-hover:scale-[1.03] transition-transform duration-700 ease-out">
              <img alt="" className="absolute object-cover size-full" src={imgImage4} />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent" />
            </div>
            <div className="relative z-10 p-[32px] xl:p-[64px] flex flex-col flex-1 justify-between">
              <p className="font-semibold leading-[1.1] text-[32px] xl:text-[48px] text-white max-w-[760px] group-hover:-translate-y-1 transition-transform duration-300">
                Второй кейс — Название
              </p>
              <div className="flex gap-[8px] items-start flex-wrap mt-auto">
                {["UX/UI", "Исследования", "SaaS"].map((tag) => (<TagPill key={tag}>{tag}</TagPill>))}
              </div>
            </div>
          </section>

          {/* ──── 4. Процессы (из Figma) ──── */}
          <section id="process" className="flex flex-col gap-[32px] xl:gap-[64px] items-start w-full">
            <div className="flex flex-col gap-[16px] max-w-[760px]">
              <h2 className="font-semibold text-[36px] xl:text-[48px] leading-[1.1] text-black">Процессы</h2>
              <p className="font-medium text-[16px] xl:text-[20px] leading-[1.1] text-[#3d3d3d]">
                Дизайн и код — это полдела. Вторая половина — коммуникация и процессы
              </p>
            </div>
            <div className="flex gap-[20px] overflow-x-auto pb-[16px] hide-scrollbar -mr-[24px] pr-[24px] xl:-mr-[48px] xl:pr-[48px] w-[calc(100%+24px)] xl:w-[calc(100%+48px)]">
              {processSteps.map((step) => (
                <div key={step.num} className="bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.05)] h-[320px] xl:h-[480px] rounded-[40px] xl:rounded-[64px] shrink-0 w-[300px] xl:w-[434px] p-[32px] xl:p-[48px] flex flex-col justify-between hover:bg-[rgba(0,0,0,0.08)] transition-colors duration-200 cursor-default group">
                  <span className="font-semibold text-[48px] xl:text-[64px] text-[rgba(0,0,0,0.08)] leading-none group-hover:text-[rgba(238,39,51,0.15)] transition-colors duration-300">{step.num}</span>
                  <div className="flex flex-col gap-[12px]">
                    <h3 className="font-semibold text-[24px] xl:text-[28px] leading-[1.1] text-black">{step.title}</h3>
                    <p className="font-medium text-[16px] leading-[1.3] text-[#3d3d3d]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ──── 5. Нам доверяют (клиенты) ──── */}
          <section id="clients" className="flex flex-col gap-[32px] xl:gap-[48px] w-full">
            <div className="flex flex-col gap-[16px] max-w-[760px]">
              <h2 className="font-semibold text-[36px] xl:text-[48px] leading-[1.1] text-black">Нам доверяют</h2>
              <p className="font-medium text-[16px] xl:text-[20px] leading-[1.1] text-[#3d3d3d]">
                Работаем с командами продуктов, которые хотят расти
              </p>
            </div>
            <div className="relative flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="flex flex-nowrap shrink-0 gap-[16px] animate-marquee hover:[animation-play-state:paused]">
                {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                  <div key={i} className="bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.05)] rounded-[24px] px-[40px] py-[32px] flex items-center justify-center hover:bg-[rgba(0,0,0,0.08)] transition-colors duration-200 shrink-0">
                    <span className="font-semibold text-[20px] xl:text-[24px] text-[#3d3d3d] whitespace-nowrap">{logo}</span>
                  </div>
                ))}
              </div>
              <div aria-hidden="true" className="flex flex-nowrap shrink-0 gap-[16px] animate-marquee hover:[animation-play-state:paused] ml-[16px]">
                {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
                  <div key={i} className="bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.05)] rounded-[24px] px-[40px] py-[32px] flex items-center justify-center hover:bg-[rgba(0,0,0,0.08)] transition-colors duration-200 shrink-0">
                    <span className="font-semibold text-[20px] xl:text-[24px] text-[#3d3d3d] whitespace-nowrap">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ──── 6. Команда ──── */}
          <section id="team" className="flex flex-col gap-[32px] xl:gap-[48px] w-full">
            <div className="flex flex-col gap-[16px] max-w-[760px]">
              <h2 className="font-semibold text-[36px] xl:text-[48px] leading-[1.1] text-black">Команда</h2>
              <p className="font-medium text-[16px] xl:text-[20px] leading-[1.1] text-[#3d3d3d]">
                Мы маленькая, но сильная команда с опытом в крупных продуктах
              </p>
            </div>
            <div className="flex gap-[16px] xl:gap-[20px] overflow-x-auto pb-[16px] hide-scrollbar -mr-[24px] pr-[24px] xl:-mr-[48px] xl:pr-[48px] w-[calc(100%+24px)] xl:w-[calc(100%+48px)]">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.05)] rounded-[32px] xl:rounded-[48px] p-[32px] xl:p-[40px] flex flex-col gap-[24px] hover:bg-[rgba(0,0,0,0.08)] transition-colors duration-200 group min-h-[280px] xl:min-h-[340px] shrink-0 w-[280px] xl:w-[320px]">
                  <div className="w-[64px] h-[64px] xl:w-[80px] xl:h-[80px] rounded-full bg-[rgba(0,0,0,0.08)] flex items-center justify-center text-[32px] xl:text-[40px] group-hover:scale-110 transition-transform duration-300">
                    {member.emoji}
                  </div>
                  <div className="flex flex-col gap-[8px] mt-auto">
                    <h3 className="font-semibold text-[24px] xl:text-[28px] leading-[1.1] text-black">{member.name}</h3>
                    <p className="font-medium text-[16px] leading-[1.3] text-[#3d3d3d]">{member.role}</p>
                    <p className="font-medium text-[14px] leading-[1.3] text-[rgba(0,0,0,0.4)]">{member.prev}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ──── 7. Партнёрам ──── */}
          <section className="bg-black rounded-[40px] xl:rounded-[64px] p-[32px] xl:p-[64px] flex flex-col gap-[32px] xl:gap-[48px] w-full">
            <div className="flex flex-col gap-[16px] max-w-[760px]">
              <h2 className="font-semibold text-[36px] xl:text-[48px] leading-[1.1] text-white">Партнёрам</h2>
              <p className="font-medium text-[16px] xl:text-[20px] leading-[1.3] text-[rgba(255,255,255,0.7)]">
                Если вы агентство или студия — давайте сотрудничать. Мы берём проекты на субподряд и усиливаем вашу команду.
              </p>
            </div>
            <button onClick={() => set_is_form_open(true)} className="bg-[#ee2733] text-white font-semibold text-[16px] xl:text-[20px] py-[16px] xl:py-[20px] px-[32px] rounded-[16px] w-fit hover:bg-[#d41f2a] transition-colors duration-200">
              Стать партнёром
            </button>
          </section>

          {/* ──── 8. Карьера ──── */}
          <section id="career" className="bg-[rgba(0,0,0,0.05)] border border-[rgba(0,0,0,0.05)] rounded-[40px] xl:rounded-[64px] p-[32px] xl:p-[64px] flex flex-col gap-[32px] xl:gap-[48px] w-full">
            <div className="flex flex-col gap-[16px] max-w-[760px]">
              <h2 className="font-semibold text-[36px] xl:text-[48px] leading-[1.1] text-black">Карьера</h2>
              <p className="font-medium text-[16px] xl:text-[20px] leading-[1.3] text-[#3d3d3d]">
                Ищем сильных дизайнеров и исследователей. Работаем удалённо, платим хорошо, делаем интересные продукты.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-[16px]">
              <div className="bg-white rounded-[24px] p-[24px] xl:p-[32px] flex-1 flex flex-col gap-[12px]">
                <h3 className="font-semibold text-[20px] xl:text-[24px] leading-[1.1] text-black">Middle+ UX/UI Designer</h3>
                <p className="font-medium text-[16px] text-[#3d3d3d] leading-[1.3]">Figma, исследования, B2B опыт</p>
                <p className="font-semibold text-[16px] text-[#ee2733]">от 200 000 ₽</p>
              </div>
              <div className="bg-white rounded-[24px] p-[24px] xl:p-[32px] flex-1 flex flex-col gap-[12px]">
                <h3 className="font-semibold text-[20px] xl:text-[24px] leading-[1.1] text-black">UX Researcher</h3>
                <p className="font-medium text-[16px] text-[#3d3d3d] leading-[1.3]">Интервью, аналитика, CJM</p>
                <p className="font-semibold text-[16px] text-[#ee2733]">от 180 000 ₽</p>
              </div>
            </div>
            <button onClick={() => set_is_form_open(true)} className="bg-black text-white font-semibold text-[16px] xl:text-[20px] py-[16px] xl:py-[20px] px-[32px] rounded-[16px] w-fit hover:bg-[#ee2733] transition-colors duration-200">
              Откликнуться
            </button>
          </section>

          {/* ──── 9. Контакты ──── */}
          <section id="contacts" className="flex flex-col gap-[32px] xl:gap-[48px] w-full">
            <div className="flex flex-col gap-[16px] max-w-[760px]">
              <h2 className="font-semibold text-[36px] xl:text-[48px] leading-[1.1] text-black">Контакты</h2>
              <p className="font-medium text-[16px] xl:text-[20px] leading-[1.1] text-[#3d3d3d]">
                Напишите нам — обсудим ваш проект
              </p>
            </div>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-[16px] max-w-[520px]">
              <input name="name" required placeholder="Имя" className="w-full px-[20px] py-[16px] bg-[rgba(0,0,0,0.05)] rounded-[16px] text-[16px] outline-none focus:ring-2 focus:ring-[#ee2733] transition-shadow border border-[rgba(0,0,0,0.05)]" />
              <input name="telegram" required placeholder="Telegram / Email" className="w-full px-[20px] py-[16px] bg-[rgba(0,0,0,0.05)] rounded-[16px] text-[16px] outline-none focus:ring-2 focus:ring-[#ee2733] transition-shadow border border-[rgba(0,0,0,0.05)]" />
              <textarea name="description" rows={4} placeholder="Расскажите о проекте" className="w-full px-[20px] py-[16px] bg-[rgba(0,0,0,0.05)] rounded-[16px] text-[16px] outline-none resize-none focus:ring-2 focus:ring-[#ee2733] transition-shadow border border-[rgba(0,0,0,0.05)]" />
              <button type="submit" className="w-full bg-black text-white font-semibold text-[16px] py-[16px] rounded-[16px] hover:bg-[#ee2733] transition-colors duration-200">
                Отправить
              </button>
            </form>
          </section>

          {/* ──── Footer ──── */}
          <FooterSection />
        </main>
      </div>
    </LoadingAnimation>
  );
}
