import Link from 'next/link';
import { Scale, Phone, MapPin, CheckCircle, Calculator, Users, FileText, ArrowRight, Mail, MessageCircle, Send } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* --- HEADER --- */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
          
          {/* Логотип */}
          <div className="flex flex-col leading-none z-50">
            <span className="font-serif text-xl md:text-2xl font-bold text-blue-900 tracking-tight">LegaLight</span>
            <span className="text-[9px] md:text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-1">Юридическая компания</span>
          </div>
          
          {/* Меню (скрыто на мобильных) */}
          <nav className="hidden lg:flex gap-8 text-sm font-medium text-slate-600 absolute left-1/2 -translate-x-1/2">
            <Link href="#services" className="hover:text-blue-900 transition">Услуги</Link>
            <Link href="#about" className="hover:text-blue-900 transition">О компании</Link>
            <Link href="#contact" className="hover:text-blue-900 transition">Контакты</Link>
          </nav>

          {/* Правая часть: Телефоны и кнопка */}
          <div className="flex items-center gap-4">
            
            {/* Телефоны */}
            <div className="flex flex-col items-end">
              
              {/* МОБИЛЬНАЯ ВЕРСИЯ: Две иконки звонка */}
              <div className="lg:hidden flex gap-2">
                <a href="tel:+996772774433" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-blue-900 active:bg-blue-100 border border-slate-200">
                  <Phone className="w-4 h-4" />
                </a>
                <a href="tel:+996554900928" className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 text-blue-900 active:bg-blue-100 border border-slate-200">
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              {/* ДЕСКТОП ВЕРСИЯ: Номера текстом */}
              <div className="hidden lg:flex flex-col items-end leading-tight">
                <a href="tel:+996772774433" className="text-sm font-bold text-slate-800 hover:text-blue-900 transition">
                  +996 (772) 77-44-33
                </a>
                <a href="tel:+996554900928" className="text-sm font-bold text-slate-800 hover:text-blue-900 transition mt-0.5">
                  +996 (554) 900-928
                </a>
              </div>
            </div>
            
            {/* Кнопка заявки */}
            <Link href="#contact" className="hidden sm:block bg-blue-900 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-blue-800 transition shadow-lg shadow-blue-900/20 whitespace-nowrap">
              Оставить заявку
            </Link>
          </div>
        </div>
      </header>

      {/* --- HERO BLOCK --- */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-4 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-blue-900 text-[10px] md:text-xs font-bold tracking-wide mb-6 shadow-sm">
            БИШКЕК • КЫРГЫЗСТАН
          </span>
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
            Комплексная защита <br className="hidden md:block"/>
            <span className="text-blue-900">вашего бизнеса и прав</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Команда LegaLight — это квалифицированные юристы с опытом более 10 лет. 
            Мы предлагаем готовые решения: от юридического аутсорсинга до бухгалтерии.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#contact" className="w-full sm:w-auto bg-blue-900 text-white px-8 py-4 rounded text-center font-medium hover:bg-blue-800 transition flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20">
              Получить консультацию <ArrowRight size={18} />
            </Link>
            <Link href="#services" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded text-center font-medium hover:border-blue-900 hover:text-blue-900 transition">
              Наши практики
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES (GRID) --- */}
      <section id="services" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3">Направления деятельности</h2>
            <p className="text-slate-500 text-sm md:text-base">Полный спектр услуг для бизнеса и частных лиц</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Аутсорсинг", icon: <Scale />, text: "Правовой анализ договоров, сопровождение сделок и участие в переговорах." },
              { title: "Представительство", icon: <Users />, text: "Защита интересов в судах, составление жалоб, досудебное урегулирование." },
              { title: "Бухгалтерия", icon: <Calculator />, text: "Аудит, бухгалтерский аутсорсинг и оптимизация налогообложения." },
              { title: "HR услуги", icon: <FileText />, text: "Подбор персонала, кадровое делопроизводство и выстраивание KPI." }
            ].map((item, i) => (
              <div key={i} className="group p-6 md:p-8 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition duration-300">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT / TRUST --- */}
      <section id="about" className="py-16 md:py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Почему выбирают LegaLight</h2>
            <p className="text-slate-300 mb-8 leading-relaxed text-sm md:text-base">
              Мы не используем шаблонные решения. Каждый кейс рассматривается индивидуально с учетом специфики вашего бизнеса. 
              Наш подход объединяет юридическую точность, финансовую грамотность и эффективное управление кадрами.
            </p>
            <div className="space-y-4">
              {["10+ лет опыта на рынке", "Комплексный подход (Юристы + HR + Бухгалтерия)", "Работаем на 3 языках (RU, KG, EN)"].map((txt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-400 shrink-0 mt-0.5 w-5 h-5" />
                  <span className="text-slate-200 text-sm md:text-base">{txt}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center">
             <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">100%</div>
             <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">Конфиденциальность</div>
             <div className="my-6 h-px bg-slate-700 w-full"></div>
             <p className="text-slate-400 text-sm">Мы гарантируем полную защиту вашей информации и соблюдение адвокатской тайны.</p>
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section id="contact" className="bg-slate-50 py-16 md:py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2">
            
            {/* Левая часть: Контакты */}
            <div className="p-8 md:p-14 bg-blue-900 text-white flex flex-col justify-between order-2 lg:order-1">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-6">Наши контакты</h3>
                <div className="space-y-8">
                  
                  {/* Адрес */}
                  <div className="flex items-start gap-4">
                    <MapPin className="shrink-0 text-blue-400" />
                    <div>
                      <p className="font-medium mb-1">Офис:</p>
                      <p className="text-blue-200 text-sm leading-relaxed">
                        г. Бишкек, ул. Токтогула 125/1,<br/> 
                        БЦ «Авангард», Tower B
                      </p>
                    </div>
                  </div>
                  
                  {/* Телефоны + Мессенджеры */}
                  <div className="flex items-start gap-4">
                    <Phone className="shrink-0 text-blue-400" />
                    <div className="w-full">
                      <p className="font-medium mb-2">Связаться с нами:</p>
                      
                      {/* Номер 1 */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <a href="tel:+996772774433" className="text-blue-200 text-sm hover:text-white font-medium">
                          +996 (772) 77-44-33
                        </a>
                        <div className="flex gap-2">
                           <a href="https://wa.me/996772774433" target="_blank" className="bg-green-600 p-1.5 rounded text-white hover:bg-green-500 transition" title="WhatsApp">
                             <MessageCircle size={16} />
                           </a>
                           <a href="https://t.me/+996772774433" target="_blank" className="bg-blue-500 p-1.5 rounded text-white hover:bg-blue-400 transition" title="Telegram">
                             <Send size={16} />
                           </a>
                        </div>
                      </div>

                      {/* Номер 2 */}
                      <div className="flex flex-wrap items-center gap-3">
                        <a href="tel:+996554900928" className="text-blue-200 text-sm hover:text-white font-medium">
                          +996 (554) 900-928
                        </a>
                        <div className="flex gap-2">
                           <a href="https://wa.me/996554900928" target="_blank" className="bg-green-600 p-1.5 rounded text-white hover:bg-green-500 transition" title="WhatsApp">
                             <MessageCircle size={16} />
                           </a>
                           <a href="https://t.me/+996554900928" target="_blank" className="bg-blue-500 p-1.5 rounded text-white hover:bg-blue-400 transition" title="Telegram">
                             <Send size={16} />
                           </a>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="shrink-0 text-blue-400" />
                    <div>
                      <p className="font-medium mb-1">Email:</p>
                      <a href="mailto:info@legalight.kg" className="text-blue-200 text-sm hover:text-white">info@legalight.kg</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-sm text-blue-400/60">
                LegaLight Legal Services
              </div>
            </div>

            {/* Правая часть: Форма */}
            <div className="p-8 md:p-14 order-1 lg:order-2">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Оставить заявку</h3>
              <p className="text-slate-500 mb-8 text-sm">Перезвоним в течение часа.</p>
              
              <form className="space-y-4">
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition bg-slate-50" placeholder="Ваше имя" />
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition bg-slate-50" placeholder="Телефон" />
                <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition bg-slate-50" placeholder="Ваш вопрос"></textarea>
                <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-900/10">
                  Отправить
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- MAP SECTION (Updated for Avangard BC) --- */}
      <section className="w-full h-80 md:h-96 bg-slate-200 relative">
        <iframe 
          width="100%" 
          height="100%" 
          title="map"
          className="absolute inset-0 grayscale contrast-125 opacity-80 hover:opacity-100 transition duration-500"
          frameBorder="0" 
          src="https://maps.google.com/maps?q=Avangard+Business+Center+Bishkek&t=&z=16&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-serif text-xl font-bold text-white tracking-tight">LegaLight</span>
            <p className="text-xs mt-2 max-w-xs text-slate-500">
              г. Бишкек, ул. Токтогула 125/1, БЦ Авангард
            </p>
          </div>
          
          <div className="flex gap-6 text-sm font-medium">
            <Link href="#services" className="hover:text-white transition">Услуги</Link>
            <Link href="#contact" className="hover:text-white transition">Контакты</Link>
          </div>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} LegaLight. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}