'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, ArrowRight, Loader2, TrendingUp, BookOpen } from 'lucide-react';

interface NewsItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  source: string;
}

// "Вечные" новости (показываются, если все способы загрузки не сработали)
const FALLBACK_NEWS: NewsItem[] = [
  {
    title: "НБКР утвердил новые стандарты кибербезопасности для банков",
    pubDate: new Date().toISOString(),
    link: "https://www.nbkr.kg/",
    description: "Регулятор обновляет требования к защите информации в финансовом секторе для предотвращения мошенничества.",
    source: "НБКР"
  },
  {
    title: "Обзор рынка: банки Кыргызстана наращивают кредитный портфель",
    pubDate: new Date().toISOString(),
    link: "https://banks.kg/",
    description: "Аналитика показывает рост интереса бизнеса и населения к кредитным продуктам в национальной валюте.",
    source: "Banks.kg"
  },
  {
    title: "LegaLight: Как получить лицензию на крипто-обменник в 2024 году",
    pubDate: new Date().toISOString(),
    link: "https://legalight.kg/services",
    description: "Экспертный разбор законодательства о виртуальных активах и пошаговая инструкция для бизнеса.",
    source: "LegaLight"
  }
];

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchNews() {
      // Ищем новости с banks.kg через Google News
      const RSS_URL = 'https://news.google.com/rss/search?q=site:banks.kg&hl=ru&gl=KG&ceid=KG:ru';
      
      // СПИСОК ПРОКСИ (Пробуем по очереди)
      // 1. rss2json (самый чистый JSON)
      // 2. codetabs (очень надежный прокси)
      // 3. allorigins (запасной)
      const STRATEGIES = [
        {
          type: 'json',
          url: `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`
        },
        {
          type: 'xml',
          url: `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(RSS_URL)}`
        },
        {
          type: 'xml',
          url: `https://api.allorigins.win/raw?url=${encodeURIComponent(RSS_URL)}`
        }
      ];

      let success = false;

      for (const strategy of STRATEGIES) {
        if (success) break; // Если уже скачали, выходим

        try {
          const response = await fetch(strategy.url, { signal: AbortSignal.timeout(5000) });
          if (!response.ok) continue;

          let items: any[] | NodeListOf<Element> = [];
          const parsedNews: NewsItem[] = [];

          if (strategy.type === 'json') {
            const data = await response.json();
            if (data.items) {
               // Конвертируем формат rss2json
               data.items.slice(0, 3).forEach((item: any) => {
                  parsedNews.push({
                    title: item.title,
                    link: item.link,
                    pubDate: item.pubDate,
                    description: cleanDescription(item.description || item.content),
                    source: "Banks.kg"
                  });
               });
               if (parsedNews.length > 0) success = true;
            }
          } else {
            // Парсим XML (для codetabs и allorigins)
            const text = await response.text();
            const parser = new DOMParser();
            const xml = parser.parseFromString(text, "text/xml");
            const xmlItems = xml.querySelectorAll("item");
            
            xmlItems.forEach((item, index) => {
                if (index > 2) return;
                parsedNews.push({
                    title: item.querySelector("title")?.textContent || "",
                    link: item.querySelector("link")?.textContent || "",
                    pubDate: item.querySelector("pubDate")?.textContent || "",
                    description: cleanDescription(item.querySelector("description")?.textContent || ""),
                    source: "Banks.kg"
                });
            });
            if (parsedNews.length > 0) success = true;
          }

          if (success && isMounted) {
            setNews(parsedNews);
            setIsLive(true);
          }

        } catch (e) {
          console.warn(`Стратегия ${strategy.url} не сработала`);
        }
      }

      // Если ничего не сработало — ставим заглушку
      if (!success && isMounted) {
        setNews(FALLBACK_NEWS);
        setIsLive(false);
      }
      
      if (isMounted) setLoading(false);
    }

    fetchNews();

    return () => { isMounted = false; };
  }, []);

  // Вспомогательная функция для очистки текста
  const cleanDescription = (html: string) => {
    if (!html) return "Подробнее читайте на сайте источника.";
    const div = document.createElement("div");
    div.innerHTML = html;
    let text = div.textContent || "";
    // Убираем лишние фразы Google
    text = text.replace(/Посмотреть статью полностью/g, '');
    text = text.replace(/Google News/g, '');
    if (text.length < 10) return "Подробности по ссылке...";
    if (text.length > 130) return text.slice(0, 130) + "...";
    return text;
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long'
      });
    } catch (e) {
      return "Новости";
    }
  };

  return (
    <section className="py-20 px-4 bg-slate-50 relative z-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
                {/* Меняем цвет и иконку в зависимости от статуса */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${isLive ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {isLive ? <TrendingUp size={14} /> : <BookOpen size={14} />} 
                    {isLive ? 'Сейчас в эфире' : 'Рекомендуем прочесть'}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-2">
                    {isLive ? 'Новости Banks.kg' : 'Полезные материалы'}
                </h2>
                <p className="text-slate-500">События и аналитика финансового сектора</p>
            </div>
            <a href="https://banks.kg/" target="_blank" rel="noreferrer" className="text-blue-900 font-bold flex items-center gap-2 hover:opacity-70 transition text-sm md:text-base">
                Перейти на портал <ArrowRight size={18} />
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
                                <span className={`px-2 py-0.5 rounded text-[10px] ${item.source === 'Banks.kg' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                                    {item.source}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition leading-snug line-clamp-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                                {item.description}
                            </p>
                        </div>
                        <div className="text-blue-700 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto pt-4 border-t border-slate-50">
                            Читать далее <ArrowRight size={16} />
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