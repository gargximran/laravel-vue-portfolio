<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Imran Hossain</title>
        <link rel="stylesheet" href="{{ asset('asset/css/app.css', true) }}" />
        <link rel="apple-touch-icon" sizes="180x180" href="/gXi/gxi.png" />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/gXi/gxi-32x32.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/gXi/gxi-16x16.png"
        />
        <link rel="manifest" href="/gXi/site.webmanifest" />
        <base href="{{ secure_url('/') }}" />
    </head>
    <body>
        <div id="app"></div>
        <script src="{{ asset('asset/js/app.js', true) }}"></script>
    </body>
</html>
