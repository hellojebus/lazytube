/*! lazytube (lazy load Youtube videos plugin) - v0.0.1
 * Last update: 5/6/2015
 * Usage:
 * Copyright (c) 2015 Jesus Lizama; Licensed MIT */


;(function ($) {
  'use strict';

  function startUp($el) {

    var apiKey = 'AIzaSyCHx8khrwRX0xAPuE-Znc-OhE76CGtCeJY';
    var video = $el.data('video');
    //var id = $el.data('id');

    if (typeof video === 'undefined') {
      throw new Error('Missing data-video attribute');
    }

    $.getJSON('https://www.googleapis.com/youtube/v3/videos?id='+ video +'&key='+ apiKey +'&part=snippet,contentDetails,statistics,status', function (data) {
      $el.append('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + video + '" frameborder="0" allowfullscreen></iframe>');
    });


  }

  $.fn.lazytube = function () {
    return this.each(function () {
      var $el = $(this).css('cursor', 'pointer');
      startUp($el);
    });
  };

}(jQuery));