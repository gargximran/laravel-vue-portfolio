const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);

mix.js("resources/js/Frontend/app.js", "public/asset/js").sass(
    "resources/sass/Frontend/app.scss",
    "public/asset/css"
);
