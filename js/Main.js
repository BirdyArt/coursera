const urls = [
    'images/restaurantsImg/1.jpg', 
    'images/restaurantsImg/2.jpg', 
    'images/restaurantsImg/3.jpg', 
    'images/restaurantsImg/4.jpg', 
    'images/restaurantsImg/5.jpg', 
    'images/restaurantsImg/6.jpg', 
    'images/restaurantsImg/7.jpg', 
    'images/restaurantsImg/8.jpg', 
    'images/restaurantsImg/9.jpg', 
    'images/sportImg/1.jpg', 
    'images/sportImg/2.jpg', 
    'images/sportImg/3.jpg',
    'images/sportImg/4.jpg', 
    'images/sportImg/5.jpg', 
    'images/sportImg/6.jpg',
    'images/sportImg/7.jpg', 
    'images/sportImg/8.jpg', 
    'images/sportImg/9.jpg',
    'images/sportImg/10.jpg', 
    'images/sportImg/11.jpg', 
    'images/sportImg/12.jpg',
    'images/sportImg/13.jpg',
];
var arrLang = {
  "en": {
    "services": "Services",
    "portfolio":"Portfolio",
    "reviews": "Reviews",
    "contact us": "Contact Us",
    "about":"About",
    "herotext":"A PROVEN LEADER IN MACHINING, FABRICATION AND WELDING",
    "home":"Home",
    "links":"Links",
    "address":"Our Address",
    "addressvalue":"2, Building 4, Nagornoe Shosse, Khimki, Moscow Region, RUSSIAN FEDERATION",
    "moreinfo":"Want more information? Learn how we can help your next project succeed",
    "receivenews":" Receive Newsletters",
    "submit":"Submit",
    "name":"",
    "email":"",
    "phone":"",
    "whatcust":"WHAT OUR CUSTOMERS SAY",
    "review1com":"REVIEW COMPANY 1",
    "review1":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "review2com":"REVIEW COMPANY 2",
    "review2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "review3com":"REVIEW COMPANY 3",
    "review3":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "review4com":"REVIEW COMPANY 4",
    "review4":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "review5com":"REVIEW COMPANY 5",
    "review5":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "review6com":"REVIEW COMPANY 6",
    "review6":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "review7com":"REVIEW COMPANY 7",
    "review7":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "review8com":"REVIEW COMPANY 8",
    "review8":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "review9com":"REVIEW COMPANY 9",
    "review9":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "whyviks":"WHY VIKS?",
    "whyvikstext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero.",
    "learnmore":"LEARN MORE",
    "20years":"20 YEARS OF EXCELLENCE",
    "20yearstext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero.",
    "clientfocus":"CLIENT IS OUR FOCUS",
    "clientfocustext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero.",
    "fastrel":"FAST AND RELIABLE",
    "fastreltext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero.",
    "innovation":"CONSTANT INNOVATION",
    "innovationtext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero.",
    "quote":"OUR PORTFOLIO",
    "solser":"SOLUTIONS & SERVICES",
    "welding":"WELDING & CUTTING",
    "weldingtext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "painting":"PAINTING",
    "paintingtext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "engineering":"ENGINEERING",
    "engineeringtext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "machining":"MACHINING",
    "machiningtext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "restcafe":"Restaurants & Cafe",
    "ourportfolio":"Our Portfolio",
    "loccont":"Location & Contact Info",
    "contacts": "Contacts",
    "getintouch":"GET IN TOUCH",
    "painting1":"Painting",
    "aboutinfo":"About Our Company",
    "20yearsquality":"20 YEARS OF EXCELLENCE",
    "aboutcompany":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "ourservices":"SERVICES WE OFFER",
    "ourservicestext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "ourpartners":"OUR PARTNERS",
    "ourpartnerstext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "ourclients":"OUR CLIENTS",
    "ourclientstext":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at magna libero. Vestibulum ac tristique diam. Aliquam imperdiet tempor porttitor.",
    "sportImg":"Sport",
    "homeImg":"Home Decor",
    "all":"All",
    "restaurantsImg":"Restaurants & Cafe",
    "paintingImg":"Painting"
  },
  "ru": {
    "services": "Сервисы",
    "portfolio":"Портфолио",
    "reviews": "Отзывы",
    "contact us": "Контакты",
    "about":"О Компании",
    "herotext":"ПРИЗНАННЫЙ ЛИДЕР В МЕТАЛООБРАБОТКЕ",
    "home":"Главная",
    "links":"Ссылки",
    "address":"Наш Адрес",
    "addressvalue":"Россия, Московская обл., г. Химки, Нагорное ш., д. 2 к.4",
    "moreinfo":"Нужно больше информации? Узнайте как мы можем помочь Вашему проекту!",
    "receivenews":" Получать новости компании",
    "submit":"Отправить",
    "name":"Имя",
    "email":"Адрес эл. почты",
    "phone":"Номер тел.",
    "whatcust":"ЧТО ГОВОРЯТ О НАС КЛИЕНТЫ",
    "review1com":"КОМПАНИЯ 1",
    "review1":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "review2com":"КОМПАНИЯ 2",
    "review2":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "review3com":"КОМПАНИЯ 3",
    "review3":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "review4com":"КОМПАНИЯ 4",
    "review4":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "review5com":"КОМПАНИЯ 5",
    "review5":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "review6com":"КОМПАНИЯ 6",
    "review6":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "review7com":"КОМПАНИЯ 7",
    "review7":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "review8com":"КОМПАНИЯ 8",
    "review8":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "review9com":"КОМПАНИЯ 9",
    "review9":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "whyviks":"ПОЧЕМУ ИМЕННО VIKS?",
    "whyvikstext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "learnmore":"УЗНАТЬ БОЛЬШЕ",
    "20years":"20 ЛЕТ БЕЗУПРЕЧНОГО КАЧЕСТВА",
    "20yearstext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "clientfocus":"КЛИЕНТ - ЭТО НАШ ГЛАВНЫЙ ФОКУС",
    "clientfocustext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "fastrel":"БЫСТРОТА И НАДЕЖНОСТЬ",
    "fastreltext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "innovation":"НЕПРЕРЫВНЫЕ ИННОВАЦИИ",
    "innovationtext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "quote":"ПОРТФОЛИО",
    "solser":"НАШИ СЕРВИСЫ И РЕШЕНИЯ",
    "welding":"СВАРКА И РЕЗКА",
    "weldingtext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "painting":"ПОКРАСКА",
    "paintingtext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "engineering":"ДОКУМЕНТАЦИЯ",
    "engineeringtext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "machining":"ЧПУ СТАНОК",
    "machiningtext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "restcafe":"Рестораны и кафе",
    "ourportfolio":"Наше Портфолио",
    "loccont":"Местоположение и контактная информация",
    "contacts": "Контакты",
    "getintouch":"СВЯЗАТЬСЯ С НАМИ",
    "painting1":"Покрасочные работы",
    "aboutinfo":"О нашей компании",
    "20yearsquality":"20 ЛЕТ КАЧЕСТВА",
    "aboutcompany":"Группа компаний ВЕКС была основана в 1996 году и включает в себя компании, осуществляющие следующие виды деятельности: производство и разработка профессионального упаковочного оборудования для упаковки в стретч-пленку организация услуг по упаковке багажа пассажиров в аэропортах и грузовых терминалах предоставление услуг по упаковке малогабаритных грузов с выездом к Заказчику металлообработка, , токарные и фрезерные работы, лазерная резка, сварка аргоном, порошковая покраска",
    "ourservices":"УСЛУГИ КОТОРЫЕ МЫ ПРЕДЛАГАЕМ",
    "ourservicestext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "ourpartners":"НАШИ ПАРТНЕРЫ",
    "ourpartnerstext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "ourclients":"НАШИ КЛИЕНТЫ",
    "ourclientstext":"Лорем ипсум долор сит амет, дуис цонцептам цу хис, ех мнесарчум дефиниебас диссентиунт сеа. Анимал латине ан яуо, вереар салутатус не сит. Тантас убияуе дуо ин, ад хис веро сцаевола сцрипторем. Те сеа опортере еррорибус, ет еос дицам плацерат, вери аргументум цомпрехенсам меи ид.",
    "sportImg":"Спорт",
    "homeImg":"Для дома",
    "all":"Все",
    "restaurantsImg":"Рестораны и кафе",
    "paintingImg":"Покрасочные работы"
  }
};
var lang = "en";
$("#option1").attr('checked', 'checked');
$("#en").css({'background':'rgba(0, 0, 0, 0.45)','color':'#fff'});
if('localStorage' in window){
    var usrLang = localStorage.getItem('uiLang');
     if (usrLang) {
       lang = usrLang;
       }
     if(usrLang == "ru") {
       lang = usrLang;
        $("#option2").attr('checked', 'checked');
        $("#ru").css({'background':'rgba(0, 0, 0, 0.45)','color':'#fff'});
        $("#option1").removeAttr('checked');
        $("#en").css({'background':'none','color':'#404040'});
   };
};
function buildGallery (arr) {
    $('#gallery').empty();
    $('.carousel-inner').empty();
    $('.carousel-indicators').empty();
    for(var i=0 ; i< arr.length ; i++) {
        $('<div class="col-12 col-sm-6 col-lg-3"><div class="full w-100" style="background: url('+arr[i]+') 0 0 no-repeat;background-size: cover;position: relative;height: 260px;margin: 10px 0px;" data-target="#carousel-example-generic" data-slide-to="'+i+'"><div class="d-none d-sm-block overlay-effect h-100 w-100"><i class="fas fa-expand-arrows-alt fa-3x"></i></div></div></div>').appendTo('#gallery');
        $('<div class="carousel-item"><img src="'+arr[i]+'" class="d-block w-100"></div>').appendTo('.carousel-inner');
        $('<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
    };
    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#carousel-example-generic').carousel();
};
buildGallery(urls);
$(document).ready(function() {
    $(".lang").each(function(index, element) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
    });
    $('.navbar-nav>li>a, #en, #ru').on('click', function(){
        if($(window).width() < 576) {
        $('.navbar-collapse').collapse('hide');
        };
    });
    $(function () {
        $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $(".hero-image").height());
        });
    });
    $('#exampleModal').on('show.bs.modal', function (e) {
        if($(window).width() < 576)  {
        return e.preventDefault()
        };
    });
    $(".filter-button").click(function(){
        var a = [];
        var m = urls;
        var value = $(this).attr('key');        
        a.push(value);
        if(value !== "all")
        {
        m = urls.filter(u => a.every(s => u.includes(s)));
        };
        buildGallery(m);
    });
  });  
$(".translate").click(function() {
    var lang = $(this).attr("id");
    if('localStorage' in window){
        localStorage.setItem('uiLang', lang);
        console.log(localStorage.getItem('uiLang'));
    };
    if (lang == "ru") {
        $("#option2").attr('checked', 'checked');
        $("#ru").css({'background':'rgba(0, 0, 0, 0.45)','color':'#fff'});
        $("#option1").removeAttr('checked');
        $("#en").css({'background':'none','color':'#404040'});
    };
    if (lang == "en") {
        $("#option1").attr('checked', 'checked');
        $("#en").css({'background':'rgba(0, 0, 0, 0.45)','color':'#fff'});
        $("#option2").removeAttr('checked');
        $("#ru").css({'background':'none','color':'#404040'});
        };
    $(".lang").each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr("key")]);
    });
});


