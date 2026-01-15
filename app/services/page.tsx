import Link from 'next/link';
import { ArrowLeft, CreditCard, Briefcase, ShieldCheck, Gavel, Landmark, Check, HelpCircle, Clock, Globe } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100">
      
      {/* HEADER SIMPLE */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 z-50 h-20 flex items-center">
         <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 text-blue-900 font-bold hover:opacity-80 transition">
                <ArrowLeft size={20} /> На главную
            </Link>
            <span className="font-serif font-bold text-xl text-slate-900">LegaLight</span>
         </div>
      </header>

      <main className="pt-32 pb-20 px-4">
        
        {/* HERO SECTION */}
        <section className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-widest uppercase mb-6">
                Наши практики
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Комплексные решения <br/> <span className="text-blue-900">для вашего бизнеса</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                От регистрации компании и получения сложных финансовых лицензий до защиты интересов в суде.
            </p>
        </section>

        {/* 1. ОПС / ПО */}
        <section className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-16" id="ops">
            <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center shrink-0">
                    <CreditCard size={32} />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Лицензирование Платежных Систем (ОПС/ПО)</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Получение лицензии Оператора платежной системы — ключевой этап для финтех-стартапов и сервисов денежных переводов. Мы сопровождаем процесс "под ключ": от бизнес-модели до получения лицензии в НБКР.
                    </p>
                    <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-bold border border-green-100">
                        Успешно проведено 15+ компаний (98% успеха)
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-slate-50 p-6 rounded-2xl">
                    <h3 className="font-bold mb-4 flex items-center gap-2"><Check size={18} className="text-blue-600"/> Что дает лицензия:</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Осуществление денежных переводов</li>
                        <li>• Процессинг платежей и эквайринг</li>
                        <li>• Выпуск электронных денег и кошельков</li>
                        <li>• Работа с международными системами</li>
                    </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl">
                    <h3 className="font-bold mb-4 flex items-center gap-2"><Briefcase size={18} className="text-blue-600"/> Для кого:</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li>• Финтех-стартапы и цифровые кошельки</li>
                        <li>• Компании электронной коммерции</li>
                        <li>• Платежные агрегаторы</li>
                        <li>• Сервисы денежных переводов</li>
                    </ul>
                </div>
            </div>

            {/* FAQ OPS */}
            <div className="border-t border-slate-100 pt-8">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2"><HelpCircle size={20} className="text-slate-400"/> Часто задаваемые вопросы</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <p className="font-bold text-sm mb-1">Можно ли получить лицензию без офиса?</p>
                        <p className="text-sm text-slate-500">Нет, требуется реальный офис не менее 50 кв.м.</p>
                    </div>
                    <div>
                        <p className="font-bold text-sm mb-1">Обязательно ли свое IT-решение?</p>
                        <p className="text-sm text-slate-500">Можно использовать аутсорсинг, но нужно подтвердить безопасность.</p>
                    </div>
                    <div>
                        <p className="font-bold text-sm mb-1">Лицензия для иностранной компании?</p>
                        <p className="text-sm text-slate-500">Да, но процесс требует доп. проверок учредителей.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 2. МФО / МКК */}
        <section className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-16" id="mfo">
            <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center shrink-0">
                    <Landmark size={32} />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Лицензирование МФО и МКК</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Полное сопровождение получения лицензий в Госфиннадзоре (ГСФР). Легализуйте кредитную деятельность и получите доступ к банковскому финансированию.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="border border-slate-200 p-5 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2">МКК</h4>
                    <p className="text-xs text-slate-500">Микрокредитная компания. Выдает кредиты (без права привлекать вклады).</p>
                </div>
                <div className="border border-slate-200 p-5 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2">МФО</h4>
                    <p className="text-xs text-slate-500">Микрофинансовая организация. Может выдавать кредиты и привлекать депозиты.</p>
                </div>
                <div className="border border-slate-200 p-5 rounded-xl">
                    <h4 className="font-bold text-slate-900 mb-2">Преимущества</h4>
                    <p className="text-xs text-slate-500">Легальная работа, налоговые льготы, возможность масштабирования.</p>
                </div>
            </div>
        </section>

        {/* 3. РЕГИСТРАЦИЯ КОМПАНИЙ */}
        <section className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-16" id="reg">
            <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center shrink-0">
                    <Globe size={32} />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Регистрация компаний (с иностранным участием)</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Регистрируем ОсОО, АО, ИП, Филиалы. Специализируемся на сложных случаях с иностранными учредителями и подготовке к дальнейшему лицензированию.
                    </p>
                </div>
            </div>

      
            {/* FAQ REG */}
            <div className="space-y-4">
                <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition">
                    <p className="font-bold text-sm">Можно ли зарегистрировать компанию без визита в КР?</p>
                    <p className="text-sm text-slate-600 mt-1">Да, по нотариальной доверенности мы все сделаем за вас.</p>
                </div>
                <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition">
                    <p className="font-bold text-sm">Минимальный уставный капитал?</p>
                    <p className="text-sm text-slate-600 mt-1">От 100 сом для резидентов, от 1000 сом для ин. участия. Для фин. компаний — от 10 млн сом.</p>
                </div>
            </div>
        </section>

        {/* 4. АУТСОРСИНГ */}
        <section className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-16" id="outsourcing">
            <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-indigo-50 text-indigo-700 rounded-2xl flex items-center justify-center shrink-0">
                    <ShieldCheck size={32} />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Юридический аутсорсинг (Финтех)</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Ваш внешний юридический департамент. Это выгоднее штатного юриста на 40% и эффективнее, так как на вас работает целая команда экспертов по разным отраслям.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold mb-4 border-b pb-2">Что входит в услуги:</h3>
                    <ul className="space-y-3 text-sm text-slate-700">
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div> Разработка договоров и оферт</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div> Взаимодействие с НБКР и ГСФР</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div> Комплаенс (ПОД/ФТ) и отчетность</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div> Защита персональных данных</li>
                        <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5"></div> Корпоративное управление</li>
                    </ul>
                </div>
                <div className="bg-indigo-50 p-6 rounded-2xl">
                    <h3 className="font-bold text-indigo-900 mb-4">Преимущества:</h3>
                    <ul className="space-y-3 text-sm text-indigo-800">
                        <li className="font-bold">✓ Экономия до 40% бюджета</li>
                        <li>✓ Команда вместо одного юриста</li>
                        <li>✓ Знание специфики Финтеха</li>
                        <li>✓ Беспрерывная работа (без отпусков)</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* 5. СУДЫ */}
        <section className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-20" id="court">
            <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-red-50 text-red-700 rounded-2xl flex items-center justify-center shrink-0">
                    <Gavel size={32} />
                </div>
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Представительство в судах</h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                        Профессиональная защита интересов в судах всех инстанций. Специализация на финансовых, корпоративных и налоговых спорах.
                    </p>
                </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-red-500 mb-8">
                <h3 className="font-bold text-slate-900 mb-2">Наши гарантии:</h3>
                <p className="text-sm text-slate-600">
                    Честная оценка перспектив дела (не берем заведомо проигрышные дела). Прозрачность на всех этапах.
                </p>
            </div>

            <div className="space-y-4">
                <h3 className="font-bold text-lg mb-2">Вопросы и ответы:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <p className="font-bold text-sm mb-1">Обязательно ли идти в суд?</p>
                        <p className="text-sm text-slate-500">Нет, 60% дел мы решаем на этапе переговоров (досудебно).</p>
                    </div>
                    <div>
                        <p className="font-bold text-sm mb-1">Нужно ли мое присутствие?</p>
                        <p className="text-sm text-slate-500">Обычно нет. Мы работаем по доверенности.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA SECTION */}
        <section className="max-w-4xl mx-auto bg-blue-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 relative z-10">Нужна консультация по услугам?</h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto relative z-10">
                Оставьте заявку, и мы проведем первичный аудит вашего кейса и рассчитаем стоимость.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                 <Link href="/#contact" className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-xl">
                    Записаться на консультацию
                 </Link>
                 <a href="tel:+996772774433" className="border border-blue-400 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition">
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