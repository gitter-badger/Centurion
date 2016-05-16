function centurionCurrent(elem) {
  var mlen = 0,tsnm = null;

  //@todo: current navigation needs to account for "/" and find first nav item or index

  $(elem).find('a').each(function(){
    var pat = $(this).attr('href');

    if(window.location.pathname.indexOf(pat) != -1 && pat.length > mlen){
      mlen = pat.length
      $(this).addClass('nav-current').siblings().removeClass('nav-current');
    } else {
      $(elem + ' a:first-of-type').addClass('nav-current');
    }
  });
}
centurionCurrent('#main');