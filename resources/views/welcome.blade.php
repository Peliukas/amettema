<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Amettema</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
    <link href="/css/styles.css" rel="stylesheet">
    <link href="/css/component-styles.css" rel="stylesheet">
    <link href="/css/slick.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
</head>
<body>
<div id="app">
    @include('header')
    @include('banner')
    @include('body')
</div>
<script src="{{ mix('js/app.js') }}"></script>
<script>
    window.Laravel = {!! json_encode([
                'csrfToken' => csrf_token(),
            ]) !!};
</script>
</body>
@include('footer')
</html>
