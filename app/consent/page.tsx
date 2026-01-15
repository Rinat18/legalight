import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function ConsentPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
        
        {/* Декор фона */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-50"></div>

        <Link href="/" className="inline-flex items-center gap-2 text-blue-900 font-medium mb-8 hover:bg-blue-50 px-4 py-2 rounded-lg transition">
          <ArrowLeft size={20} /> Вернуться на главную
        </Link>
        
        <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center">
                <FileText size={24} />
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 leading-tight">
            Согласие на сбор и обработку <br/> персональных данных
            </h1>
        </div>
        
        <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base border-t border-slate-100 pt-8">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-sm mb-8">
            <p className="font-bold text-lg mb-2 text-blue-900">ОсОО «Легалайт»</p>
            <div className="grid md:grid-cols-2 gap-2 text-slate-600">
                <p>ИНН: 01709202410509</p>
                <p>Адрес: г. Бишкек, ул. Токтоналиева 104/7</p>
                <p>E-mail: info@legalight.kg</p>
            </div>
          </div>

          <p>Настоящим я, действуя своей волей и в своем интересе, даю согласие ОсОО «Легалайт» (далее — «Компания») на обработку моих персональных данных на следующих условиях:</p>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3 mt-8 flex items-center gap-2">1. Персональные данные</h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
              <li>Фамилия, имя, отчество; Контактный телефон; E-mail;</li>
              <li>Название организации и должность (для юр. лиц);</li>
              <li>ИНН; Паспортные данные и фин. сведения (при необходимости);</li>
              <li>Данные о cookie-файлах и IP-адрес.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3 mt-8 flex items-center gap-2">2. Цели обработки</h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
              <li>Обработка обращений и заключение договоров;</li>
              <li>Идентификация клиентов, проверка благонадежности (due diligence);</li>
              <li>Выполнение требований комплаенс и законодательства о финтехе;</li>
              <li>Противодействие легализации доходов (ПОД/ФТ);</li>
              <li>Улучшение качества обслуживания.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3 mt-8 flex items-center gap-2">3. Действия с данными</h2>
            <p>Сбор, запись, систематизация, накопление, хранение, уточнение, использование, передача (в т.ч. третьим лицам и госорганам при необходимости), обезличивание, удаление.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-blue-900 mb-3 mt-8 flex items-center gap-2">4. Права и сроки</h2>
            <p>Вы имеете право на доступ к данным, их уточнение или отзыв согласия. Согласие действует до момента отзыва, но не менее сроков хранения, установленных законом КР (для налогового учета, ПОД/ФТ и т.д.).</p>
          </section>

          <div className="mt-12 pt-6 border-t border-slate-200 text-sm text-slate-500 italic">
             <p>Полный текст согласия доступен в офисе компании по требованию.</p>
          </div>
        </div>
      </div>
    </div>
  );
}