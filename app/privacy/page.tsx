import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-900 font-medium mb-8 hover:opacity-80">
          <ArrowLeft size={20} /> Вернуться на главную
        </Link>
        
        <h1 className="text-3xl font-serif font-bold mb-6">Политика конфиденциальности и сбора персональных данных</h1>
        
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm">
            <p><strong>ОсОО Юридическая компания &quot;Легалайт&quot;</strong></p>
            <p>ИНН: 01709202410509</p>
            <p>Юридический адрес: Кыргызская Республика, г. Бишкек, ул. Токтоналиева 104/7–17</p>
            <p>Генеральный директор: Эстемесов Анвар Кубатович</p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Введение</h2>
            <p>Настоящая Политика конфиденциальности и сбора персональных данных (далее – Политика) регулирует сбор, хранение, использование и защиту персональных данных клиентов ОсОО &quot;Легалайт&quot; (далее – Компания).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Согласие на обработку данных</h2>
            <p>Используя наш сайт и предоставляя свои персональные данные, Клиент дает согласие на обработку своих данных в соответствии с условиями данной Политики.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Собираемые персональные данные</h2>
            <p>Компания может собирать и обрабатывать следующие данные:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Фамилия, имя, отчество;</li>
              <li>Контактные телефоны;</li>
              <li>Адрес электронной почты;</li>
              <li>Другие данные, предоставленные Клиентом.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Цели сбора персональных данных</h2>
            <p>Личные данные Клиентов могут быть использованы для:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Обработки заявок на получение юридических услуг;</li>
              <li>Связи с Клиентом для информирования о статусе обращения;</li>
              <li>Отправки информации о новых услугах и акциях Компании;</li>
              <li>Улучшения качества обслуживания.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Хранение данных</h2>
            <p>Компания хранит персональные данные в течение срока, необходимого для достижения целей, указанных в данной Политике, или в течение срока, установленного законодательством.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Защита персональных данных</h2>
            <p>Компания принимает необходимые меры для защиты персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">7. Раскрытие данных третьим лицам</h2>
            <p>Компания не раскрывает персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством Кыргызской Республики.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">8. Права Клиента</h2>
            <p>Клиент имеет право на:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Доступ к своим персональным данным;</li>
              <li>Исправление неправомерно или неточно обработанных данных;</li>
              <li>Отказ от обработки личных данных (в случаях, предусмотренных законодательством).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">9. Изменения в Политике</h2>
            <p>Компания оставляет за собой право изменять данную Политику. О любых изменениях Клиенты будут уведомлены путем публикации обновленной версии на сайте.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">10. Контактная информация</h2>
            <p>Для вопросов, связанных с персональными данными, обращайтесь по следующему адресу:</p>
            <div className="mt-2">
                <p>Сайт: www.legalight.kg</p>
                <p>Телефон: +996 772 774433</p>
                <p>Электронная почта: info@legalight.kg</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}