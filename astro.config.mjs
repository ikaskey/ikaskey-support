// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ikaskey-support.bktsk.com',
  integrations: [
    starlight({
      title: 'いかすきーサポート',
      description: 'Misskey サーバー「いかすきー」のサポートサイトです',
      // 単一言語 (日本語) をルート配信。`root` キーを使わないと /ja/ 接頭辞が付き、
      // 内部リンクが /ja/... を指して 404 になる。
      locales: {
        root: { label: '日本語', lang: 'ja' },
      },
      // 日本語に強い特徴的フォント (見出し=丸ゴシック / 本文=角ゴシック)
      head: [
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500;700;900&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap',
          },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#603be2' },
        },
      ],
      logo: {
        src: './src/assets/ikaskey-icon.png',
        alt: 'いかすきー',
        replacesTitle: false,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ikaskey/ikaskey-support',
        },
      ],
      // VuePress のヘッダーメニュー相当を sidebar 上部 + topbar で表現
      sidebar: [
        { label: 'いかすきーをはじめる', link: 'https://ikaskey.bktsk.com/', attrs: { target: '_blank' } },
        { label: 'いかすきーについて', link: '/about/' },
        { label: 'カスタマイズ', link: '/customize/' },
        { label: 'サポーター', link: '/supporter/' },
        { label: 'FAQ', link: '/faq/' },
        {
          label: 'おしらせ・メンテナンス',
          items: [
            { label: 'おしらせ一覧', link: '/news/' },
            { label: 'メンテナンス情報', link: '/maintenance/' },
            { label: 'タイムライン', link: '/timeline/' },
          ],
        },
        {
          label: '利用規約',
          items: [
            { label: '現行利用規約', link: '/terms/' },
            { label: '変更履歴', link: '/terms/changelog/' },
            { label: 'モデレーション関連事項', link: '/terms/other-terms/' },
            { label: '旧利用規約 v1', link: '/terms/terms_v1/' },
          ],
        },
        {
          label: 'プライバシーポリシー',
          items: [
            { label: 'プライバシーポリシー全文', link: '/privacy-policy/' },
            { label: '変更履歴', link: '/privacy-policy/changelog/' },
          ],
        },
        { label: 'ガイドライン', link: '/guideline/' },
        { label: 'サーバーブロック', link: '/server-block/' },
      ],
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      components: {
        // 上部ヘッダーにメインナビを追加 (splash でも辿れるように)
        Header: './src/components/Header.astro',
      },
    }),
    sitemap(),
  ],
});
