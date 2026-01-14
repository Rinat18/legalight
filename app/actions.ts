'use server'

const TELEGRAM_BOT_TOKEN = '8482726774:AAEb21VOtB30hZOWlJFB3TQjP5RBXSjN9ww';
const TELEGRAM_CHAT_ID = '@Anvar495';

export async function sendToTelegram(formData: FormData) {
  const name = formData.get('name');
  const phone = formData.get('phone');
  const question = formData.get('question');

  if (!name || !phone) return;

  const text = `
🔥 *Новая заявка с сайта LegaLight!*

👤 *Имя:* ${name}
📞 *Телефон:* ${phone}
❓ *Вопрос:* ${question || 'Не указан'}
  `;

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'Markdown',
      }),
    });
    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false };
  }
}