import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Shield, Zap, Globe, Award, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* HEADER SIMPLE */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-50 h-20 flex items-center">
         <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-blue-900 font-bold hover:opacity-80 transition">
                <ArrowLeft size={20} /> На главную
            </Link>
            <span className="font-serif font-bold text-xl text-slate-900">LegaLight</span>
         </div>
      </header>

      <main className="pt-28 pb-20 px-4">
        
        {/* HERO SECTION */}
        <section className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-800 text-xs font-bold tracking-widest uppercase mb-6">
                О компании
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Ваш надежный проводник <br/> <span className="text-blue-900">в мире финансового права</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                ОсОО &quot;Легалайт&quot; — юридическая компания, специализирующаяся на правовом сопровождении финансовых и технологических компаний в Кыргызстане. Мы создаем надежную правовую основу для инноваций.
            </p>
        </section>

        {/* STATS */}
        <section className="max-w-6xl mx-auto mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                    { val: "15+", label: "Лет опыта практики" },
                    { val: "98%", label: "Успешных кейсов" },
                    { val: "10+", label: "Крупных проектов" },
                    { val: "24h", label: "Скорость реакции" },
                ].map((stat, i) => (
                    <div key={i} className="bg-slate-50 p-6 md:p-8 rounded-2xl text-center border border-slate-100">
                        <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{stat.val}</div>
                        <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>

        {/* HISTORY & MISSION */}
        <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start mb-24">
            <div>
                <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                    <Clock className="text-blue-600" /> Наша история
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                        Компания основана группой юристов, работавших в крупнейших банках и финансовых институтах Кыргызстана. Мы видели, как растет финтех-индустрия, и понимали, что рынку нужны юристы, говорящие на языке технологий.
                    </p>
                    <p>
                        С 2004 года наши эксперты помогают бизнесу уверенно работать в одной из самых регулируемых отраслей экономики.
                    </p>
                    <div className="pl-4 border-l-2 border-blue-200 space-y-4 mt-6">
                        <div>
                            <span className="font-bold text-blue-900 block">2023</span>
                            <span className="text-sm">Основание компании, фокус на банковском праве и платежных системах.</span>
                        </div>
                        <div>
                            <span className="font-bold text-blue-900 block">2024</span>
                            <span className="text-sm">Первые успешные кейсы по лицензированию платежных организаций и операторов.</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-blue-900 text-white p-8 md:p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                        <Target className="text-blue-300" /> Наша миссия
                    </h2>
                    <p className="text-blue-100 leading-relaxed text-lg mb-8">
                        Создавать надежную правовую основу для инноваций в финансовой сфере. Мы верим, что качественное юридическое сопровождение — это не препятствие, а катализатор роста бизнеса.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3"><CheckCircle size={18} className="text-green-400"/><span>Понимаем технологии (API, Blockchain)</span></div>
                        <div className="flex items-center gap-3"><CheckCircle size={18} className="text-green-400"/><span>Знаем требования регуляторов</span></div>
                        <div className="flex items-center gap-3"><CheckCircle size={18} className="text-green-400"/><span>Международные стандарты</span></div>
                    </div>
                </div>
            </div>
        </section>

        {/* VALUES */}
        <section className="max-w-6xl mx-auto mb-24">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">Наши ценности</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Экспертность", icon: <Award />, text: "Мы не просто изучаем законы — мы участвуем в их разработке и формируем лучшие практики." },
                    { title: "Проактивность", icon: <Zap />, text: "Мы предупреждаем проблемы, а не только решаем их. Защищаем бизнес до появления рисков." },
                    { title: "Конфиденциальность", icon: <Shield />, text: "Доверие клиента священно. Мы храним адвокатскую тайну превыше всего." },
                ].map((item, i) => (
                    <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-lg shadow-slate-200/50 hover:-translate-y-1 transition duration-300">
                        <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Готовы обсудить ваш проект?</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                Если вы создаете финансовый продукт или запускаете платежный сервис — мы будем рады стать вашим партнером.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link href="/#contact" className="bg-blue-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition">
                    Связаться с нами
                 </Link>
                 <a href="tel:+996772774433" className="bg-white border border-slate-300 text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition">
                    +996 (772) 77-44-33
                 </a>
            </div>
        </section>

      </main>

      {/* FOOTER MINI */}
      <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} LegaLight. Все права защищены.</p>
      </footer>
    </div>
  );
}