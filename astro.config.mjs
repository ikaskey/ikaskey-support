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
      defaultLocale: 'ja',
      locales: {
        ja: { label: '日本語', lang: 'ja' },
      },
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
    }),
    sitemap(),
  ],
});
