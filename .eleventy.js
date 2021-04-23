/**
 * Eleventy Configuration
 */
module.exports = (eleventyConfig) => {
  return {
    dir: {
      // 入力ディレクトリ
      // input: ".",
      input: "src/pages",
      // インクルードのディレクトリ
      // includes: "_includes",
      includes: "../components",
      // レイアウトのディレクトリ
      // layouts: "_includes",
      layouts: "../layouts",
      // グローバルデータファイルのディレクトリ
      // data: "_data",
      data: "../data",
      // 出力ディレクトリ
      // output: "_site",
      output: "dist",
      // グローバルデータファイルのデフォルトのテンプレートエンジン
      dataTemplateEngine: false,
      // マークダウンファイルのデフォルトのテンプレートエンジン
      markdownTemplateEngine: "liquid",
      // HTMLファイルのデフォルトのテンプレートエンジン
      htmlTemplateEngine: "liquid",
      // テンプレートフォーマット
      templateFormats: [
        // "html",
        // "liquid",
        // "ejs",
        // "md",
        "hbs",
        // "mustache",
        // "haml",
        // "pug",
        // "njk",
        // "11ty.js",
      ],
    },
  };
};
