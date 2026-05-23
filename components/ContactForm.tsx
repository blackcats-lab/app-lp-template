'use client';

import { useState, FormEvent } from 'react';
import { siteConfig } from '@/site.config';

export function ContactForm() {
  const { contact } = siteConfig;
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      category: formData.get('category'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    // endpoint が設定されていない場合は mailto: にフォールバック
    if (!contact.endpoint) {
      const body = encodeURIComponent(
        `お名前: ${payload.name}\nカテゴリ: ${payload.category}\n件名: ${payload.subject}\n\n${payload.message}`
      );
      const subject = encodeURIComponent(`[お問い合わせ] ${payload.subject}`);
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      setStatus('success');
      return;
    }

    try {
      const res = await fetch(contact.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('送信に失敗しました');
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : '送信に失敗しました');
    }
  }

  if (status === 'success' && contact.endpoint) {
    return (
      <div className="rounded-2xl bg-[color:var(--color-surface-alt)] border border-[color:var(--color-border)] p-10 text-center">
        <div className="text-5xl text-[color:var(--color-accent)] mb-4">✓</div>
        <h3 className="font-display text-2xl font-medium mb-2">送信完了しました</h3>
        <p className="text-[color:var(--color-muted)]">
          2〜3営業日以内にご返信いたします。しばらくお待ちください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="お名前" required>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors"
          />
        </Field>
        <Field label="メールアドレス" required>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors"
          />
        </Field>
      </div>

      <Field label="お問い合わせ種別" required>
        <select
          name="category"
          required
          className="w-full px-4 py-3 rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors"
        >
          {contact.categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </Field>

      <Field label="件名" required>
        <input
          type="text"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors"
        />
      </Field>

      <Field label="お問い合わせ内容" required>
        <textarea
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 rounded-xl bg-[color:var(--color-surface)] border border-[color:var(--color-border)] focus:outline-none focus:border-[color:var(--color-accent)] transition-colors resize-y"
        />
      </Field>

      <label className="flex items-start gap-3 text-sm text-[color:var(--color-muted)]">
        <input type="checkbox" required className="mt-1" />
        <span>
          <a href="/privacy" className="underline">プライバシーポリシー</a>
          に同意します
        </span>
      </label>

      {status === 'error' && (
        <div className="text-sm text-red-600">{errorMessage}</div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full md:w-auto inline-flex justify-center items-center px-8 py-3 rounded-full bg-[color:var(--color-brand)] text-[color:var(--color-brand-fg)] font-medium hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? '送信中...' : '送信する'}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block mb-2 text-sm font-medium">
        {label}
        {required && <span className="text-[color:var(--color-accent)] ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
