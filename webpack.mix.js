const mix = require('laravel-mix');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.webpackConfig({
//     plugins: [
//         new BundleAnalyzerPlugin(),
//     ],
// });

mix.setPublicPath('public')
    .js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss'),
]);

if (mix.inProduction()) {
    mix.version();
}
