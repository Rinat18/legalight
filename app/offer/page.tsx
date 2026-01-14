import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PublicOffer() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-900 font-medium mb-8 hover:opacity-80">
          <ArrowLeft size={20} /> Вернуться на главную
        </Link>
        
        <h1 className="text-3xl font-serif font-bold mb-6">Публичная оферта</h1>
        
        <div className="space-y-6 text-slate-700 leading-relaxed">
           <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm">
            <p><strong>ОсОО Юридическая компания &quot;Легалайт&quot;</strong></p>
            <p>ИНН: 01709202410509</p>
            <p>Юридический адрес: Кыргызская Республика, г. Бишкек, ул. Токтоналиева 104/7-17</p>
            <p>Генеральный директор: Эстемесов Анвар Кубатович</p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Общие положения</h2>
            <p>Настоящая публичная оферта является предложением ОсОО &quot;Легалайт&quot; (далее - Компания) заключить договор на оказание юридических услуг (далее - Договор) на условиях, изложенных в данном документе.</p>
            <p className="mt-2">Настоящая оферта является публичной офертой в соответствии со статьей 398 Гражданского кодекса Кыргызской Республики.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Предмет оферты</h2>
            <p>Компания предлагает клиенту (далее - Клиент) услуги по юридическому сопровождению, консультации и правовой помощи в соответствии с избранным пакетом услуг.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Условия оказания услуг</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Услуги оказываются на основании заявки Клиента.</li>
              <li>Сроки оказания услуг определяются в зависимости от типа услуги и согласовываются сторонами в отдельном порядке.</li>
              <li>Стоимость услуг определена в прейскуранте, опубликованном на сайте Компании.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Права и обязанности сторон</h2>
            <p>Компания обязуется предоставить услуги качественно и в разумные сроки. Клиент обязуется оплатить услуги в установленные сроки. Открытие доступа к информации об услугах и условиях – является обязанностью Компании.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Порядок расчетов</h2>
            <p>Оплата производится на расчетный счет Компании по реквизитам, указанным на сайте и в соответствующих документах.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Ответственность сторон</h2>
            <p>Стороны несут ответственность за ненадлежащее исполнение обязательств по настоящему Договору в соответствии с законодательством Кыргызской Республики.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">7. Заключительные положения</h2>
            <p>Настоящая оферта считается акцептованной, если Клиент осуществляет оплату юридических услуг. Договор считается заключенным с момента получения Компанией платежа.</p>
          </section>
          
          <div className="mt-8 pt-6 border-t border-slate-200">
             <p className="font-bold">Контактная информация:</p>
             <p>Сайт: www.legalight.kg</p>
             <p>Телефон: +996 772 774433</p>
             <p>Электронная почта: info@legalight.kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}