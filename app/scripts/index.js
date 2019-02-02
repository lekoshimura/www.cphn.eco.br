document.addEventListener('DOMContentLoaded', function (event) {

  // text-speech: https://responsivevoice.org/api/
  responsiveVoice.setDefaultVoice('Brazilian Portuguese Male');

  // header e navbar
  let navbar = document.querySelector('nav');
  let headerBackground = document.querySelector('.header--background');
  let headerLogo = document.querySelector('.header--logo');
  let headerBackgroundInvisible = document.querySelector('.header--background--invisible');
  // articleQuemSomosNos
  let articleQuemSomosNos = document.querySelector('.article-quem-somos-nos');
  let btnOuvirQuemSomosNos = document.querySelector('.btn-ouvir-quem-somos-nos');
  // articleHistoria
  let articleHistoria = document.querySelector('.article-historia');
  let btnOuvirHistoria = document.querySelector('.btn-ouvir-historia');
  // articleGoroHashimoto
  let articleGoroHashimoto = document.querySelector('.article-goro-hashimoto');
  let btnOuvirGoroHashimoto = document.querySelector('.btn-ouvir-goro-hashimoto');
  // articleNossosObjetivos
  let articleNossosObjetivos = document.querySelector('.article-nossos-objetivos');
  let btnOuvirNossosObjetivos = document.querySelector('.btn-ouvir-nossos-objetivos');
  // articleHerbario
  let articleHerbario = document.querySelector('.article-herbario');
  let btnOuvirHerbario = document.querySelector('.btn-ouvir-herbario');
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
  let currentSender;
  let responsiveVoiceText;
  let responsiveVoicePlay = function (textContainer) {
    let newCurrentSender = currentSender !== this;
    if (newCurrentSender) {
      currentSender = this;
      responsiveVoiceText = textContainer.textContent.replace(/(\r\n|\n|\r)/gm, ' ').replace(/ {1,}/g, ' ');
      responsiveVoice.cancel();
    }
    if (responsiveVoice.isPlaying()) {
      responsiveVoice.pause();
      this.innerHTML = '▶ Continuar';
    } else {
      newCurrentSender ? responsiveVoice.speak(responsiveVoiceText) : responsiveVoice.resume(responsiveVoiceText);
      this.innerHTML = '⏸ Pausar';  
    }
  };

  if (responsiveVoice.voiceSupport()) {
    // articleQuemSomosNos
    btnOuvirQuemSomosNos.addEventListener('click',
      responsiveVoicePlay.bind(btnOuvirQuemSomosNos, articleQuemSomosNos));
    // articleHistoria
    btnOuvirHistoria.addEventListener('click',
      responsiveVoicePlay.bind(btnOuvirHistoria, articleHistoria));
    // articleGoroHashimoto
    btnOuvirGoroHashimoto.addEventListener('click',
      responsiveVoicePlay.bind(btnOuvirGoroHashimoto, articleGoroHashimoto));
    // articleNossosObjetivos
    btnOuvirNossosObjetivos.addEventListener('click',
      responsiveVoicePlay.bind(btnOuvirNossosObjetivos, articleNossosObjetivos));
    // articleHerbario
    btnOuvirHerbario.addEventListener('click',
      responsiveVoicePlay.bind(btnOuvirHerbario, articleHerbario));
  } else {
    btnOuvirQuemSomosNos.classList.add('is-invisible');
    btnOuvirGoroHashimoto.classList.add('is-invisible');
    btnOuvirHerbario.classList.add('is-invisible');
  }; // if (responsiveVoice.voiceSupport()
});
