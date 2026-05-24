# App LP Template

> 個人開発者のための、モバイル/Webアプリ向けランディングページ・テンプレート。
> Next.js (App Router) + Tailwind CSS + Vercel で、**設定ファイルを編集するだけ**で公開できます。

```
┌──────────────────────────────────────────────────────┐
│   1.  AIエージェントに AGENTS.md を読んでもらう       │
│   2.  「私のアプリ用にカスタマイズして」とお願いする │
│   3.  Vercelにデプロイ → 公開完了                    │
└──────────────────────────────────────────────────────┘
```

## 含まれているもの

- ✦ ヒーロー / 機能紹介 / 使い方ステップ / 料金 / FAQ / ダウンロードCTA を備えたトップページ
- ✦ 料金プラン詳細ページ (`/pricing`)
- ✦ カテゴリ別FAQページ (`/faq`)
- ✦ お問い合わせフォーム (`/contact`) — Formspree や mailto: フォールバック対応
- ✦ プライバシーポリシー (`/privacy`) — マークダウン管理、汎用テンプレート同梱
- ✦ 利用規約 (`/terms`) — マークダウン管理、汎用テンプレート同梱
- ✦ レスポンシブ対応、ライト/ダークテーマ切替、CSS変数によるテーマカラーカスタマイズ
- ✦ Vercel への 1-click デプロイ対応

---

## 🚀 はじめかた

### 前提

- Node.js 18.17 以上
- npm / yarn / pnpm のいずれか
- AIコーディングエージェント（Claude Code、Cursor、Codex、Cline、Copilot Workspace など）

### 1. テンプレートから自分のリポジトリを作成

このリポジトリの GitHub ページ右上の **「Use this template」** → **「Create a new repository」** をクリックして、あなたの GitHub アカウントに新しいリポジトリを作成してください。

> 「Use this template」を使うと、コミット履歴がリセットされ、新しいリポジトリの `origin` があなた自身のリポジトリを指すため、そのまま `git push` できます。`git clone` でテンプレートを直接コピーすると `origin` がテンプレリポジトリのままになり、後の push 時に混乱の元になるため非推奨です。

作成したリポジトリをローカルにクローンして、依存をインストールします。

```bash
git clone https://github.com/<あなたのユーザー名>/<新しいリポジトリ名>.git
cd <新しいリポジトリ名>
npm install
```

<details>
<summary>GitHub Template として配布されていない場合（コードのみを入手したいとき）</summary>

```bash
git clone https://github.com/blackcats-lab/app-lp-template.git my-app-lp
cd my-app-lp

# origin をテンプレリポジトリから自分のリポジトリに付け替える
git remote remove origin
git remote add origin https://github.com/<あなたのユーザー名>/<新しいリポジトリ名>.git

npm install
```

</details>

### 2. AIエージェントにカスタマイズを依頼

使用しているAIエージェントを起動し、**プロジェクトのルートディレクトリで**以下のように依頼してください。

```
AGENTS.md を読んで、私のアプリ用にこのランディングページをカスタマイズしてください。

私のアプリ:
- 名前: 〇〇
- 説明: △△△するためのモバイルアプリ
- ターゲット: □□
- 主な機能:
  1. (機能1)
  2. (機能2)
  3. (機能3)
- 料金: 無料 / Proプラン月◯◯円
- 対応プラットフォーム: iOS / Android
- 運営者名: (あなたの名前 or 屋号)
- 連絡先メール: you@example.com
- デザインの好み: (任意。例: ミニマルで黒基調、ダークモード等)
```

AIエージェントは `AGENTS.md` の手順に従って、以下を自動的に行います：

- `site.config.ts` のテキスト・構造を書き換え
- 必要に応じて `app/globals.css` の配色を調整
- `content/privacy.md` / `content/terms.md` のプレースホルダ確認
- ビルドが通ることの確認

### 3. ローカルで確認

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 4. Vercel にデプロイ

GitHub にプッシュした後、[vercel.com](https://vercel.com) で「New Project」 → リポジトリを選択 → デフォルト設定のままデプロイ。Next.js の自動検出が効くので追加設定は不要です。

デプロイ後、`site.config.ts` の `app.url` を本番URLに書き換えて再デプロイすれば完了です。

---

## ✏️ 手動でカスタマイズする場合

AIエージェントを使わない場合は、以下のファイルを直接編集してください。

| やりたいこと | 編集するファイル |
| --- | --- |
| アプリ名・説明・FAQ・価格などの **テキストや構造** | `site.config.ts` |
| **配色** (メイン・アクセント・背景) | `app/globals.css` の `:root` の CSS 変数 |
| **プライバシーポリシー** の本文 | `content/privacy.md` |
| **利用規約** の本文 | `content/terms.md` |
| トップページの **セクション順序** | `app/page.tsx` |
| **新しいセクション** の追加 | `components/` に作成し `app/page.tsx` に追加 |

### CSS変数によるテーマカスタマイズ例

`app/globals.css` の以下のブロックを書き換えると、サイト全体の配色が変わります。

```css
:root {
  --color-brand: #0a0a0a;       /* メインカラー (ボタン背景・見出し) */
  --color-brand-fg: #ffffff;    /* メインカラー上の文字 */
  --color-accent: #ff5b39;      /* アクセント (リンク・ハイライト) */
  --color-ink: #18181b;         /* 本文 */
  --color-muted: #71717a;       /* 補助テキスト */
  --color-surface: #fafaf9;     /* 背景 */
  --color-surface-alt: #f4f4f0; /* 交互背景 */
  --color-border: #e7e5e4;
}
```

### ヒーロー背景のスタイル切替

`site.config.ts` の `brand.heroStyle` を以下から選択：

- `'aurora'` — ぼかしの効いたオーロラ風（デフォルト・カラフル）
- `'grid'` — テック感のあるグリッド
- `'mesh'` — グラデーションメッシュ
- `'plain'` — 装飾なし

---

## 📂 ディレクトリ構成

```
.
├── AGENTS.md              ← AIエージェント向け編集指示書 (重要)
├── README.md              ← このファイル
├── site.config.ts         ← サイト全体の設定 (ここを編集する)
├── app/
│   ├── layout.tsx
│   ├── page.tsx           ← トップページ (セクション組み立て)
│   ├── globals.css        ← テーマカラーの CSS 変数
│   ├── pricing/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Steps.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── DownloadCTA.tsx
│   └── ContactForm.tsx
├── content/
│   ├── privacy.md         ← プライバシーポリシー本文
│   └── terms.md           ← 利用規約本文
└── lib/
    └── markdown.ts        ← マークダウン→HTML変換ヘルパー
```

---

## 📮 お問い合わせフォームを実際に動かす

デフォルトでは `mailto:` を起動するだけのフォールバックです。実際にメールを受け取りたい場合：

**最も簡単な方法 — Formspree**

1. [formspree.io](https://formspree.io) で無料アカウント登録
2. フォームを作成、エンドポイントURLをコピー
3. `site.config.ts` の `contact.endpoint` に貼る

**高度な方法 — API Route + Resend**

`app/api/contact/route.ts` を自前で実装し、[Resend](https://resend.com) でメール送信。AIエージェントに「Resend で問い合わせAPI Route を作って」と依頼できます。

---

## ⚖️ 法的ページについての注意

`content/privacy.md` および `content/terms.md` は、**汎用的なテンプレート** です。あなたのアプリで以下のいずれかに該当する場合、追記や専門家の確認をおすすめします：

- 課金以外の決済（株式、暗号資産、寄付等）を扱う
- 子ども向けアプリ（COPPA 対応）
- EU 圏ユーザー（GDPR 対応）
- センシティブな権限（位置情報、カメラ、連絡先、ヘルスケア等）を利用
- 第三者へのデータ提供がある

リリース前には、必要に応じて弁護士や行政書士などの専門家にレビューを依頼してください。

---

## 📝 ライセンス

MIT License で配布。商用・個人利用問わず自由にお使いいただけます。

クレジット表記は不要ですが、もしこのテンプレートが役立ったら、SNSでシェアしてもらえると嬉しいです 🙏
