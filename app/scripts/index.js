document.addEventListener('DOMContentLoaded', function (event) {

  // text-speech: https://responsivevoice.org/api/
  responsiveVoice.setDefaultVoice('Brazilian Portuguese Male');

  // header e navbar
  let navbar = document.querySelector('nav');
  let headerBackground = document.querySelector('.header--background');
  let headerContainer = document.querySelector('.header--container');
  let headerLogo = document.querySelector('.header--logo');
  let headerBackgroundInvisible = document.querySelector('.header--background--invisible');
  // articleGoroHashimoto
  let articleQuemSomosNos = document.querySelector('.article-quem-somos-nos');
  let btnOuvirQuemSomosNos = document.querySelector('.btn-ouvir-quem-somos-nos');
  let btnToggleQuemSomosNos = document.querySelector('.btn-toggle-quem-somos-nos');
  // articleGoroHashimoto
  let articleGoroHashimoto = document.querySelector('.article-goro-hashimoto');
  let btnOuvirGoroHashimoto = document.querySelector('.btn-ouvir-goro-hashimoto');
  let btnToggleGoroHashimoto = document.querySelector('.btn-toggle-goro-hashimoto');
  // articleHerbario
  let articleHerbario = document.querySelector('.article-herbario');
  let btnOuvirHerbario = document.querySelector('.btn-ouvir-herbario');
  let btnToggleHerbario = document.querySelector('.btn-toggle-herbario');
  // toggle navbar
  let thresholdHeaderLogo = 0.8;

  function handleIntersectHeaderLogo(entries, observer) {
    entries.forEach(function (entry) {
      entry.intersectionRatio > thresholdHeaderLogo ? null : showNavbar();
    });
  };

  function showNavbar() {
    navbar.classList.remove('is-hidden');
    navbar.classList.remove('fade-out-top');
    navbar.classList.add('fade-in-top');
  };

  // createObserver para headerLogo
  let observerHeaderLogo;
  let optionsHeaderLogo = {
    root: null,
    rootMargin: '0px',
    threshold: [1, 0]
  };
  observerHeaderLogo = new IntersectionObserver(handleIntersectHeaderLogo, optionsHeaderLogo);
  observerHeaderLogo.observe(headerLogo);

  /* --- */
  headerBackgroundInvisible.addEventListener('mouseover', function () {
    showNavbar();
  });

  // toggle banner
  let firstPaint = (window.scrollY === 0);
  let thresholdHeaderBackground = 0.75;

  function handleIntersectHeaderBackground(entries, observer) {
    entries.forEach(function (entry) {
      entry.intersectionRatio < thresholdHeaderBackground ? blurBanner() : sharpBanner();
    });
  };

  function sharpBanner() {
    if (!firstPaint) {
      headerBackground.classList.remove('blur-brightness-etc');
      headerBackground.classList.add('unblur-unbrightness-etc');
    }
    firstPaint = false;
  };

  function blurBanner() {
    headerBackground.classList.remove('unblur-unbrightness-etc');
    headerBackground.classList.add('blur-brightness-etc');
  };

  // createObserver para headerBackground
  let observerHeaderBackground;
  let optionsHeaderBackground = {
    root: null,
    rootMargin: '0px',
    threshold: [thresholdHeaderBackground]
  };
  observerHeaderBackground = new IntersectionObserver(handleIntersectHeaderBackground, optionsHeaderBackground);
  observerHeaderBackground.observe(headerBackground);

  // text-to-speech
  let responsiveVoicePlay = function (textContainer, btnToggle) {
    let text = textContainer.textContent.replace(/(\r\n|\n|\r)/gm, ' ').replace(/ {1,}/g, ' ');
    responsiveVoice.speak(text);
    btnToggle.innerHTML = '⏸ Pausar';
  };

  let responsiveVoicePausado = false;
  let responsiveVoiceToggle = function (btnToggle) {
    if (!responsiveVoicePausado) {
      responsiveVoice.pause();
      responsiveVoicePausado = true;
      btnToggle.innerHTML = 'Continuar';
    } else {
      responsiveVoice.resume();
      responsiveVoicePausado = false;
      btnToggle.innerHTML = '⏸ Pausar';
    }
  };

  if (responsiveVoice.voiceSupport()) {
    // articleQuemSomosNos
    btnOuvirQuemSomosNos.addEventListener('click',
      responsiveVoicePlay.bind(this, articleQuemSomosNos, btnToggleQuemSomosNos));
    btnToggleQuemSomosNos.addEventListener('click',
      responsiveVoiceToggle.bind(this, btnToggleQuemSomosNos));
    // articleGoroHashimoto
    btnOuvirGoroHashimoto.addEventListener('click',
      responsiveVoicePlay.bind(this, articleGoroHashimoto, btnToggleGoroHashimoto));
    btnToggleGoroHashimoto.addEventListener('click',
      responsiveVoiceToggle.bind(this, btnToggleGoroHashimoto));
    // articleHerbario
    btnOuvirHerbario.addEventListener('click',
      responsiveVoicePlay.bind(this, articleHerbario, btnToggleHerbario));
    btnToggleHerbario.addEventListener('click',
      responsiveVoiceToggle.bind(this, btnToggleHerbario));
  } else {
    btnOuvirQuemSomosNos.classList.add('is-invisible');
    btnToggleQuemSomosNos.classList.add('is-invisible');
    btnOuvirGoroHashimoto.classList.add('is-invisible');
    btnToggleGoroHashimoto.classList.add('is-invisible');
    btnOuvirHerbario.classList.add('is-invisible');
    btnToggleHerbario.classList.add('is-invisible');
  }; // if (responsiveVoice.voiceSupport()
});
