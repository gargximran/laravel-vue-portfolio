@extends('layout.template')
@section('router-box')


<transition name="slide-fade">
<router-view></router-view>
</transition>

           


@endsection