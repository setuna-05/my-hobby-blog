# 雪梛のブログ
多趣味なのでいろいろなことを気ままに文字に起こして記事にしています。
Astroで構築し、Vercelでホスティングしています。
このサイトは、Claude(Anthropic社のAI)とコードを書きながら運営しています。
色々と遊び心があるサイトにしたくて実用的ではないおまけ機能もいくつか配置して遊んでいますやっぱりそういうのがあったほうが楽しい…楽しくない？

**公開URL**: https://my-hobby-blog-pi.vercel.app/

## 使用技術
- [Astro](https://astro.build/)
- Vercel(ホスティング)
- Google Analytics(アクセス解析)

## サイトの特徴
- カテゴリ別(自転車 / 執筆 / その他)の記事管理
- ダークテーマ+夜空をイメージした背景演出
- 月アイコンをクリックするとカテゴリメニューが開く
- 記事内の画像にカーソルを乗せるといいかもしれない
- トップページの傘をクリックすると…

## ディレクトリ構成

​```
src/
  components/       ヘッダー・フッター・月/傘の演出など
  content/blog/      記事本体(フォルダごとにindex.md + 画像)
  layouts/           ページの共通レイアウト
  pages/             各ページ(トップ、記事一覧、Aboutなど)
  content.config.ts  記事のカテゴリ・スキーマ定義
​```

## 記事の追加方法
1. \`src/content/blog/\` に新しいフォルダを作成(例: \`new-post/\`)
2. その中に \`index.md\` を作成し、frontmatter(タイトル・日付・カテゴリなど)と本文を記述
3. 画像は \`public/images/記事名/\` に配置し、\`/images/記事名/ファイル名.jpg\` で参照
4. 以下のコマンドで公開
\`\`\`
git add .
git commit -m "add new post"
git push
\`\`\`

## ローカルでの動かし方
\`\`\`
npm install
npm run dev
\`\`\`

---
不具合報告や「ここもっとこうしたら?」みたいな提案も歓迎です。
気が向いたときにのんびり更新していく予定です。

## Credit
This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).