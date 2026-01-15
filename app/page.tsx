'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Scale, Phone, MapPin, CheckCircle, Users, ArrowRight, Mail, MessageCircle, Send, FileText, Briefcase } from 'lucide-react'; // Добавил Briefcase
import { motion, Variants } from 'framer-motion';

// --- НАСТРОЙКИ АНИМАЦИИ ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const [loading, setLoading] = useState(false);

  // --- ЛОГИКА ОТПРАВКИ ФОРМЫ ---
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const question = formData.get('question');
    
    // Получаем состояние чекбокса (хотя атрибут required и так не даст отправить)
    const agreement = formData.get('agreement');

    if (!agreement) {
        alert('Пожалуйста, подтвердите согласие на обработку данных.');
        setLoading(false);
        return;
    }

    // 👇 ТВОИ ДАННЫЕ
    const TOKEN = '8482726774:AAEb21VOtB30hZOWlJFB3TQjP5RBXSjN9ww'; 
    const CHAT_ID = '769291850'; 

    const text = `
🔥 *Заявка с сайта LegaLight!*
👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
❓ *Вопрос:* ${question || 'Не указан'}
✅ *Согласие:* Получено
    `;

    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'Markdown',
        }),
      });
      alert('Спасибо! Ваша заявка отправлена.');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      alert('Ошибка при отправке. Пожалуйста, позвоните нам.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* --- HEADER --- */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
          
          {/* Логотип */}
          <div className="flex flex-col leading-none z-50 mr-4">
            <span className="font-serif text-lg md:text-2xl font-bold text-blue-900 tracking-tight">LegaLight</span>
            <span className="text-[9px] md:text-[10px] text-slate-500 font-medium tracking-widest uppercase mt-1">Юридическая компания</span>
          </div>
          
          {/* Меню */}
          <nav className="hidden lg:flex gap-8 text-sm font-medium text-slate-600 absolute left-1/2 -translate-x-1/2">
            <Link href="#services" className="hover:text-blue-900 transition">Услуги</Link>
            <Link href="#about" className="hover:text-blue-900 transition">О компании</Link>
            <Link href="#contact" className="hover:text-blue-900 transition">Контакты</Link>
          </nav>

          {/* Контакты справа */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-4">
              
              {/* Мессенджеры */}
              <div className="flex items-center gap-2 md:gap-3">
                 <a href="https://wa.me/996772774433" target="_blank" className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition border border-green-100 hover:scale-110 duration-300">
                    <MessageCircle size={18} />
                 </a>
                 <a href="https://t.me/+996772774433" target="_blank" className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-blue-50 text-blue-500 hover:bg-blue-500 hover:text-white transition border border-blue-100 hover:scale-110 duration-300">
                    <Send size={18} />
                 </a>
              </div>

              <div className="hidden lg:block w-px h-8 bg-slate-200"></div>

              {/* Телефоны */}
              <div className="flex flex-col items-end">
                <div className="lg:hidden flex gap-2">
                  <a href="tel:+996772774433" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 active:bg-blue-100 border border-slate-200">
                    <Phone className="w-4 h-4" />
                  </a>
                  <a href="tel:+996554900928" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 active:bg-blue-100 border border-slate-200">
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                <div className="hidden lg:flex flex-col items-end leading-tight">
                  <a href="tel:+996772774433" className="text-sm font-bold text-slate-800 hover:text-blue-900 transition">
                    +996 (772) 77-44-33
                  </a>
                  <a href="tel:+996554900928" className="text-sm font-bold text-slate-800 hover:text-blue-900 transition mt-0.5">
                    +996 (554) 900-928
                  </a>
                </div>
              </div>
            </div>
            
            <Link href="#contact" className="hidden xl:block bg-blue-900 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-blue-800 transition shadow-lg shadow-blue-900/20 whitespace-nowrap hover:-translate-y-0.5 transform duration-200">
              Оставить заявку
            </Link>
          </div>
        </div>
      </motion.header>

      {/* --- HERO BLOCK --- */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 bg-slate-50 border-b border-slate-100">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-blue-900 text-[10px] md:text-xs font-bold tracking-wide mb-6 shadow-sm">
            БИШКЕК • КЫРГЫЗСТАН
          </motion.span>
          
          <motion.h1 variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 md:mb-8 leading-tight">
            Надежная правовая основа <br className="hidden md:block"/>
            <span className="text-blue-900">работы финтеха, банковских и финансовых услуг</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
            Команда LegaLight — квалифицированные юристы с опытом более 20 лет. 
            Мы специализируемся на юридическом сопровождении и лицензировании компаний, 
            работающих в области финтеха, финансовых и банковских услуг.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#contact" className="w-full sm:w-auto bg-blue-900 text-white px-8 py-4 rounded text-center font-medium hover:bg-blue-800 transition flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 hover:-translate-y-1 duration-200">
              Получить консультацию <ArrowRight size={18} />
            </Link>
            <Link href="#services" className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded text-center font-medium hover:border-blue-900 hover:text-blue-900 transition hover:-translate-y-1 duration-200">
              Наши практики
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SERVICES (GRID - 4 ITEMS) --- */}
      <section id="services" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-3">Направления деятельности</h2>
            <p className="text-slate-500 text-sm md:text-base">Ключевые компетенции для решения ваших задач</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            // Сетка изменена на 4 колонки
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                title: "Аутсорсинг", 
                icon: <Scale />, 
                text: "Правовой анализ договоров, сопровождение сделок и участие в переговорах." 
              },
              { 
                title: "Представительство", 
                icon: <Users />, 
                text: "Защита интересов в судах, составление жалоб, досудебное урегулирование." 
              },
              { 
                title: "Лицензирование", 
                icon: <FileText />, 
                text: "Подготовка документов и подача пакета на получение лицензий операторов платежных систем, регистрация операторов МСДП." 
              },
              { 
                // НОВАЯ УСЛУГА
                title: "Регистрация", 
                icon: <Briefcase />, 
                text: "ОсОО, АО, ОсДО, ИП с участием иностранных граждан. Сопровождение при открытии банковских счетов и карт." 
              },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 hover:shadow-xl hover:shadow-blue-900/5 transition duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT / TRUST --- */}
      <section id="about" className="py-16 md:py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Почему выбирают LegaLight</h2>
            <p className="text-slate-300 mb-8 leading-relaxed text-sm md:text-base">
              Мы не используем шаблонные решения. Каждый кейс рассматривается индивидуально с учетом специфики вашего бизнеса. 
              Наш подход объединяет юридическую точность и финансовую грамотность.
            </p>
            <div className="space-y-5">
              {/* УБРАН ПУНКТ ПРО КОМПЛЕКСНЫЙ ПОДХОД */}
              {["20+ лет опыта на рынке", "Комплексный подход", "Работаем на 3 языках (RU, KG, EN)"].map((txt, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-blue-400 shrink-0 mt-0.5 w-5 h-5" />
                  <span className="text-slate-200 text-sm md:text-base">{txt}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center relative"
          >
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             
             <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-xs md:text-sm text-slate-400 uppercase tracking-wider">Конфиденциальность</div>
                <div className="my-6 h-px bg-slate-700 w-full"></div>
                <p className="text-slate-400 text-sm">Мы гарантируем полную защиту вашей информации и соблюдение адвокатской тайны.</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section id="contact" className="bg-slate-50 py-16 md:py-24 px-4 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2"
          >
            
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
                           <a href="https://wa.me/996772774433" target="_blank" className="bg-green-600 p-1.5 rounded text-white hover:bg-green-500 transition hover:scale-110" title="WhatsApp">
                             <MessageCircle size={16} />
                           </a>
                           <a href="https://t.me/+996772774433" target="_blank" className="bg-blue-500 p-1.5 rounded text-white hover:bg-blue-400 transition hover:scale-110" title="Telegram">
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
                           <a href="https://wa.me/996554900928" target="_blank" className="bg-green-600 p-1.5 rounded text-white hover:bg-green-500 transition hover:scale-110" title="WhatsApp">
                             <MessageCircle size={16} />
                           </a>
                           <a href="https://t.me/+996554900928" target="_blank" className="bg-blue-500 p-1.5 rounded text-white hover:bg-blue-400 transition hover:scale-110" title="Telegram">
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
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  name="name" 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition bg-slate-50" 
                  placeholder="Ваше имя" 
                />
                <input 
                  name="phone" 
                  type="tel" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition bg-slate-50" 
                  placeholder="Телефон" 
                />
                <textarea 
                  name="question"
                  rows={3} 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-900 focus:ring-1 focus:ring-blue-900 outline-none transition bg-slate-50" 
                  placeholder="Ваш вопрос"
                ></textarea>
                
                {/* ЧЕКБОКС СОГЛАСИЯ */}
                <div className="flex items-start gap-3 pt-2">
                    <input 
                        type="checkbox" 
                        name="agreement"
                        id="agreement"
                        required
                        className="mt-1 w-4 h-4 text-blue-900 border-slate-300 rounded focus:ring-blue-900 cursor-pointer"
                    />
                    <label htmlFor="agreement" className="text-xs text-slate-500 leading-tight cursor-pointer">
                        Нажимая кнопку Отправить, я ознакомлен с <Link href="/offer" className="text-blue-900 underline hover:no-underline">Публичной офертой</Link>, <Link href="/privacy" className="text-blue-900 underline hover:no-underline">Политикой конфиденциальности</Link> и соглашаюсь на сбор, обработку и передачу персональных данных.
                    </label>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-blue-900 text-white py-4 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-900/10 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {loading ? 'Отправка...' : 'Отправить'}
                </button>
              </form>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Левая колонка */}
          <div className="text-center md:text-left">
            <span className="font-serif text-xl font-bold text-white tracking-tight">LegaLight</span>
            <p className="text-xs mt-2 max-w-xs text-slate-500">
              г. Бишкек, ул. Токтогула 125/1, БЦ Авангард, Tower B
            </p>
            <div className="text-xs text-slate-600 mt-4">
              © {new Date().getFullYear()} LegaLight. All rights reserved.
            </div>
          </div>
          
          {/* Правая колонка: Навигация и Документы */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-sm font-medium">
            
            {/* Меню */}
            <div className="flex flex-col gap-3">
               <span className="text-white font-bold mb-1">Меню</span>
               <Link href="#services" className="hover:text-white transition">Услуги</Link>
               <Link href="#contact" className="hover:text-white transition">Контакты</Link>
            </div>

            {/* Документы */}
            <div className="flex flex-col gap-3">
               <span className="text-white font-bold mb-1">Документы</span>
               <Link href="/privacy" className="hover:text-white transition">Политика конфиденциальности</Link>
               <Link href="/offer" className="hover:text-white transition">Публичная оферта</Link>
               <Link href="/consent" className="hover:text-white transition">Согласие на обработку</Link>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}