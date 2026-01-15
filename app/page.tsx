'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Scale, Phone, MapPin, CheckCircle, Users, ArrowRight, Mail, MessageCircle, Send, FileText, Briefcase, ChevronRight } from 'lucide-react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';

// --- АНИМАЦИИ ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  
  // --- ЛОГИКА ПАРАЛЛАКСА ---
  const { scrollY } = useScroll();
  const yLeft = useTransform(scrollY, [0, 600], [0, 200]);
  const yRight = useTransform(scrollY, [0, 600], [0, 150]);

  // --- ОТПРАВКА ФОРМЫ ---
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const agreement = formData.get('agreement');

    if (!agreement) {
        alert('Пожалуйста, подтвердите согласие на обработку данных.');
        setLoading(false);
        return;
    }

    const name = formData.get('name');
    const phone = formData.get('phone');
    const question = formData.get('question');
    const TOKEN = '8482726774:AAEb21VOtB30hZOWlJFB3TQjP5RBXSjN9ww'; 
    const CHAT_ID = '769291850'; 

const text = `🔥 *Заявка с сайта!*\n👤 *Имя:* ${name}\n📞 *Телефон:* ${phone}\n❓ *Вопрос:* ${question || 'Не указан'}\n✅ *Согласие:* Получено`;
    try {
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: 'Markdown' }),
      });
      alert('Спасибо! Ваша заявка принята.');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      alert('Ошибка отправки. Свяжитесь с нами по WhatsApp.');
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-100 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none z-50 mr-4 group">
            <span className="font-serif text-2xl md:text-3xl font-bold text-blue-900 tracking-tight group-hover:opacity-80 transition">LegaLight</span>
            <span className="text-[10px] md:text-xs text-slate-500 font-medium tracking-widest uppercase mt-1 pl-0.5">Юридическая компания</span>
          </Link>
          
          <nav className="hidden xl:flex gap-10 text-sm font-semibold text-slate-600 uppercase tracking-wider absolute left-1/2 -translate-x-1/2">
            {/* ОБНОВЛЕННЫЕ ССЫЛКИ НА НОВЫЕ СТРАНИЦЫ */}
            <Link href="/services" className="hover:text-blue-900 transition duration-300 relative group">
                Услуги
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="hover:text-blue-900 transition duration-300 relative group">
                О компании
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#contact" className="hover:text-blue-900 transition duration-300 relative group">
                Контакты
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
             <div className="hidden lg:flex flex-col items-end leading-tight">
                <a href="tel:+996772774433" className="text-sm font-bold text-slate-900 hover:text-blue-900 transition">+996 (772) 77-44-33</a>
                <a href="tel:+996554900928" className="text-xs text-slate-500 hover:text-blue-900 transition mt-0.5 font-medium">+996 (554) 900-928</a>
             </div>
            <Link href="#contact" className="hidden xl:block bg-blue-900 text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-900/20">Оставить заявку</Link>
          </div>
        </div>
      </motion.header>

      {/* --- HERO BLOCK --- */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-40 px-4 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-transparent">
        
        {/* ФОНОВЫЕ СТАТУИ */}
       

        {/* ДЕКОР ФОНА */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
            <div className="absolute top-0 -right-20 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-indigo-50/60 rounded-full blur-[80px]"></div>
        </div>

        {/* КОНТЕНТ */}
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-5xl mx-auto text-center relative z-10">
          <motion.span variants={fadeInUp} className="inline-block py-1.5 px-4 rounded-full bg-white border border-blue-100 text-blue-800 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">Бишкек • Кыргызстан</motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 mb-8 leading-tight">
            Надежная правовая основа <br className="hidden md:block"/>
            <span className="text-blue-900 relative inline-block">
              работы финтеха
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
              </svg>
            </span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Команда LegaLight — квалифицированные юристы с опытом более 20 лет. Специализируемся на лицензировании и сопровождении компаний в сфере финтеха, банковских и финансовых услуг.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="bg-blue-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-800 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">Получить консультацию <ArrowRight size={18} /></Link>
            <Link href="/services" className="bg-white border border-slate-200 text-slate-700 px-10 py-4 rounded-xl font-bold hover:border-blue-900 hover:text-blue-900 transition shadow-sm">Наши практики</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SERVICES С ЛАЙФХАКОМ (ССЫЛКИ) --- */}
      <section id="services" className="py-20 px-4 bg-white relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Направления деятельности</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-900 to-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-slate-500">Ключевые компетенции для решения ваших бизнес-задач</p>
          </div>
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* ТЕПЕРЬ КАРТОЧКИ ЭТО ССЫЛКИ */}
            {[
              { 
                title: "Аутсорсинг", 
                icon: <Scale />, 
                text: "Правовой анализ договоров, сопровождение сделок и абонентское обслуживание.",
                link: "/services#outsourcing" // Ссылка на якорь
              },
              { 
                title: "Представительство", 
                icon: <Users />, 
                text: "Защита интересов в судах, составление жалоб, досудебное урегулирование.",
                link: "/services#court" 
              },
              { 
                title: "Лицензирование", 
                icon: <FileText />, 
                text: "Лицензии платежных систем. Регистрация операторов МСДП.",
                link: "/services#ops" 
              },
              { 
                title: "Регистрация", 
                icon: <Briefcase />, 
                text: "ОсОО, АО, ИП с ин. участием. Открытие банковских счетов.",
                link: "/services#reg" 
              },
            ].map((item, i) => (
              <Link href={item.link} key={i} className="block h-full group">
                  <motion.div 
                    variants={fadeInUp} 
                    className="h-full p-8 rounded-2xl bg-white border border-slate-100 hover:border-blue-300 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition duration-300 flex flex-col relative overflow-hidden"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition duration-300">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2 group-hover:text-blue-900 transition">
                        {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 flex-grow">{item.text}</p>
                    
                    {/* Кнопка "Подробнее" появляется при наведении */}
                    <div className="text-blue-600 font-bold text-sm flex items-center gap-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                        Подробнее <ChevronRight size={16} />
                    </div>
                  </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ABOUT PREVIEW (Обновлено) */}
      <section id="about" className="py-20 px-4 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="inline-block px-3 py-1 bg-blue-900/50 rounded-full text-blue-300 text-xs font-bold mb-6 border border-blue-800">О компании</div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">Ваш проводник в мире <span className="text-blue-400">Финтеха</span></h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
               ОсОО «Легалайт» — это не просто юристы, а эксперты с глубоким пониманием специфики финансовой отрасли. Мы участвуем в разработке законодательства и знаем, как работают технологии изнутри.
            </p>
            <div className="space-y-4 mb-8">
               <div className="flex items-center gap-3"><CheckCircle className="text-green-400" size={20}/> <span>Специализация на платежных системах</span></div>
               <div className="flex items-center gap-3"><CheckCircle className="text-green-400" size={20}/> <span>98% успешных кейсов по лицензированию</span></div>
               <div className="flex items-center gap-3"><CheckCircle className="text-green-400" size={20}/> <span>Комплексный подход</span></div>
            </div>
            
            <Link href="/about" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-500 transition">
                Подробнее о нас <ChevronRight size={18} />
            </Link>
          </motion.div>
          
          <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 text-center relative overflow-hidden">
             <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">2004</div>
             <p className="text-slate-300 text-sm mb-6">Год начала практики наших ведущих экспертов в банковском секторе.</p>
             <div className="h-px bg-slate-700 w-full mb-6"></div>
             <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Опыт • Доверие • Результат</p>
          </div>
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