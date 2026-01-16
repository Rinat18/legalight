'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, ArrowRight, Loader2, TrendingUp } from 'lucide-react';

interface NewsItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  source: string;
}

// --- ЗАПАСНЫЕ НОВОСТИ (На случай, если интернет пропал) ---
const FALLBACK_NEWS: NewsItem[] = [
  {
    title: "НБКР утвердил новые правила проведения платежей",
    pubDate: new Date().toISOString(),
    link: "https://www.nbkr.kg/",
    description: "Национальный банк Кыргызской Республики вводит обновленные стандарты безопасности для операторов платежных систем.",
    source: "НБКР"
  },
  {
    title: "Рынок финтеха в Кыргызстане показывает рекордный рост",
    pubDate: new Date().toISOString(),
    link: "https://banks.kg/",
    description: "Аналитики отмечают увеличение объема безналичных транзакций и появление новых цифровых банковских продуктов.",
    source: "Banks.kg"
  },
  {
    title: "LegaLight расширяет практику по лицензированию крипто-активов",
    pubDate: new Date().toISOString(),
    link: "https://legalight.kg/services",
    description: "Юридическая компания запускает новые услуги для операторов виртуальных активов в соответствии с законодательством КР.",
    source: "LegaLight"
  }
];

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchNews() {
      try {
        // 👇 ФИЛЬТР: Ищем новости только с сайта banks.kg
        const RSS_URL = 'https://news.google.com/rss/search?q=site:banks.kg&hl=ru&gl=KG&ceid=KG:ru';
        
        // Используем прокси для обхода блокировок
        const PROXY_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`;

        const response = await fetch(PROXY_URL, {
            signal: AbortSignal.timeout(5000) // Ждем максимум 5 секунд
        });
        
        if (!response.ok) throw new Error('Ошибка сети');

        const data = await response.json();
        if (!data.contents) throw new Error('Пустой ответ');

        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const items = xml.querySelectorAll("item");

        const parsedNews: NewsItem[] = [];

        items.forEach((item, index) => {
          if (index > 2) return; // Берем только 3 свежие новости

          const title = item.querySelector("title")?.textContent || "";
          const link = item.querySelector("link")?.textContent || "";
          const pubDate = item.querySelector("pubDate")?.textContent || "";
          
          // Чистим описание
          let description = item.querySelector("description")?.textContent || "";
          const div = document.createElement("div");
          div.innerHTML = description;
          // Google иногда добавляет лишние ссылки, убираем их, оставляя текст
          let cleanDesc = div.textContent?.replace(/&nbsp;/g, ' ') || "";
          
          // Если описания нет (у banks.kg иногда только заголовки), ставим заглушку
          if (cleanDesc.length < 5) cleanDesc = "Читайте полные подробности на сайте источника.";

          parsedNews.push({
            title,
            link,
            pubDate,
            description: cleanDesc,
            source: "Banks.kg"
          });
        });

        if (parsedNews.length === 0) throw new Error('Нет новостей');
        
        if (isMounted) setNews(parsedNews);

      } catch (err) {
        // Если не получилось скачать — ставим запасные (тихо)
        if (isMounted) setNews(FALLBACK_NEWS);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchNews();

    return () => { isMounted = false; };
  }, []);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch (e) {
      return "Сегодня";
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-50 relative z-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest mb-4">
                    <TrendingUp size={14} /> Финансовый сектор
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">Новости Banks.kg</h2>
                <p className="text-slate-500">Актуальная информация банковского сектора Кыргызстана</p>
            </div>
            {/* Ссылка на Banks.kg */}
            <a href="https://banks.kg/" target="_blank" rel="noreferrer" className="text-blue-900 font-bold flex items-center gap-2 hover:opacity-70 transition text-sm md:text-base">
                Все новости портала <ArrowRight size={18} />
            </a>
        </div>

        {loading ? (
            <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-blue-900" size={40} />
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noreferrer" className="group block h-full">
                    <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition duration-300 h-full flex flex-col justify-between">
                        <div>
                            <div className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider flex items-center justify-between">
                                <span>{formatDate(item.pubDate)}</span>
                                <span className="text-blue-100 bg-blue-900 px-2 py-0.5 rounded text-[10px]">{item.source}</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition leading-snug line-clamp-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                                {item.description}
                            </p>
                        </div>
                        <div className="text-blue-700 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto pt-4 border-t border-slate-50">
                            Читать на Banks.kg <ArrowRight size={16} />
                        </div>
                    </article>
                </a>
            ))}
            </div>
        )}
      </div>
    </section>
  );
}