/*

$('path').hover(function(e){

  $('path').css('fill','#fff');
  $('.indicator').html('');
  var id = $(this).attr('id').toUpperCase();

  if($(this).attr('name')) {
    var name = $(this).attr('name');
    $('<div>' + name +'</div>').appendTo('.indicator');
  }


  if($(this).attr('flag')) {
    var flag = $(this).attr('flag') ;
    $(' <img class="flag" src="" alt="">').appendTo('.indicator');
    $('.indicator').find('img').attr('src',flag )
    //$('<img src='+ flag+ ' >').appendTo('.indicator');
    $('<img src='+ ' >').appendTo('.indicator');
 }

 $('.change').remove();

 var script = document.createElement('script');
 // script.classList.add('change');
  //script.src = 'http://api.geonames.org/countryInfoJSON?country='+info[id]+'&username=pixeltest&style=full&callback=update';
  document.body.appendChild(script);

  $(this).css('fill','#5fe96b');
  $('path').not(this).css('fill','rgba(0,0,0,0.5)');
  $('.indicator').css({'top':e.pageY,'left':e.pageX+30}).show();



},function(){
  $('.indicator').html('');
  $('.indicator').hide();
  $('path').css('fill','rgba(0,0,0,0.2)');
});





var idAarr = ["RU-MOW", "RU-SPE", "RU-NEN", "RU-YAR", "RU-CHE", "RU-ULY", "RU-TYU", "RU-TUL", "RU-SVE", "RU-RYA", "RU-ORL", "RU-OMS", "RU-NGR", "RU-LIP", "RU-KRS", "RU-KGN", "RU-KGD", "RU-IVA", "RU-BRY", "RU-AST", "RU-KHA", "RU-CE", "RU-UD", "RU-SE", "RU-MO", "RU-KR", "RU-KL", "RU-IN", "RU-AL", "RU-BA", "RU-AD", "RU-CR", "RU-SEV", "RU-KO", "RU-KIR", "RU-PNZ", "RU-TAM", "RU-MUR", "RU-LEN", "RU-VLG", "RU-KOS", "RU-PSK", "RU-ARK", "RU-YAN", "RU-CHU", "RU-YEV", "RU-TY", "RU-SAK", "RU-AMU", "RU-BU", "RU-KK", "RU-KEM", "RU-NVS", "RU-ALT", "RU-DA", "RU-STA", "RU-KB", "RU-KC", "RU-KDA", "RU-ROS", "RU-SAM", "RU-TA", "RU-ME", "RU-CU", "RU-NIZ", "RU-VLA", "RU-MOS", "RU-KLU", "RU-BEL", "RU-ZAB", "RU-PRI", "RU-KAM", "RU-MAG", "RU-SA", "RU-KYA", "RU-ORE", "RU-SAR", "RU-VGG", "RU-VOR", "RU-SMO", "RU-TVE", "RU-PER", "RU-KHM", "RU-TOM", "RU-IRK"];
var idAarr2 = new Array(
  ["RU-MOW",  "Москва", "moscow.jpg"],
  ["RU-CHE", "Челябинская область", "chel.png" ],
  ["RU-ORL",  "Орловская область", 'orl.png'],
  ["RU-OMS",  "Омская область", "oms.png"],
  ["RU-LIP",  "Липецкая область", "lip.png"],
  ["RU-KRS",  "Курская область", "kur.png"],
  ["RU-RYA",  "Рязанская область", "rya.png"],
  ["RU-BRY",  "Брянская область", "bry.png"],
  ["RU-KIR",  "Кировская область", "kir.png"],
  ["RU-ARK",  "Архангельская область", "ark.png"],
  ["RU-MUR",  "Мурманская область", "myr.png"],
  ["RU-SPE",  "Санкт-Петербург", "spb.png"],
  ["RU-YAR",  "Ярославская область", "yar.png"],
  ["RU-ULY",  "Ульяновская область", "uli.png"],
  ["RU-NVS",  "Новосибирская область", "nso.png"],
  ["RU-TYU",  "Тюменская область", "tyu.png"],
  ["RU-SVE",  "Свердловская область", "sverd.png"],
  ["RU-NGR",  "Новгородская область", "nov.png"],
  ["RU-KGN",  "Курганская область", "kurg.png"],
  ["RU-KGD",  "Калининградская область", "kalin.png"],
  ["RU-IVA",  "Ивановская область", "iva.png"],
  ["RU-AST",  "Астраханская область", "astra.png"],
  ["RU-KHA",  "Хабаровский край", "hab.png"],
  ["RU-CE",  "Чеченская республика", "chech.png"],
  ["RU-UD",  "Удмуртская республика", "udmyr.png"],
  ["RU-SE",  "Республика Северная Осетия", "oset.png"],
  ["RU-MO",  "Республика Мордовия", "mord.png"],
  ["RU-KR",  "Республика  Карелия", "kar.png"],
  ["RU-KL",  "Республика  Калмыкия", "kalm.png"],
  ["RU-IN",  "Республика  Ингушетия", "ingush.png"],
  ["RU-AL",  "Республика Алтай", "altai.png"],
  ["RU-BA",  "Республика Башкортостан", "bash.png"],
  ["RU-AD",  "Республика Адыгея", "adyg.png"],
  ["RU-CR",  "Республика Крым", "nash.png"],
  ["RU-SEV",  "Севастополь", "sev.png"],
  ["RU-KO",  "Республика Коми", "komi.png"],
  ["RU-PNZ",  "Пензенская область", "penz.png"],
  ["RU-TAM",  "Тамбовская область", "tambov.png"],
  ["RU-LEN",  "Ленинградская область", "lenob.png"],
  ["RU-VLG",  "Вологодская область", "vol.png"],
  ["RU-KOS",  "Костромская область", "kos.png"],
  ["RU-PSK",  "Псковская область", "pskov.png"],
  ["RU-YAN",  "Ямало-Ненецкий АО", "inao.png"],
  ["RU-CHU",  "Чукотский АО", "chuk.png"],
  ["RU-YEV",  "Еврейская автономская область", "YEV.png"],
  ["RU-TY",  "Республика Тыва", "TY.png"],
  ["RU-SAK",  "Сахалинская область", "SAK.png"],
  ["RU-AMU",  "Амурская область", "AMU.png"],
  ["RU-BU",  "Республика Бурятия", "BU.png"],
  ["RU-KK",  "Республика Хакасия", "KK.png"],
  ["RU-KEM",  "Кемеровская область", "KEM.png"],
  ["RU-ALT",  "Алтайский край", "ALT.png"],
  ["RU-DA",  "Республика Дагестан", "DA.png"],
  ["RU-KB",  "Кабардино-Балкарская республика", "KB.png"],
  ["RU-KC",  "Карачаевая-Черкесская республика", "KC.png"],
  ["RU-KDA",  "Краснодарский край", "KDA.png"],
  ["RU-ROS",  "Ростовская область", "ROS.png"],
  ["RU-SAM",  "Самарская область", "SAM.png"],
  ["RU-TA",  "Республика Татарстан", "TA.png"],
  ["RU-ME",  "Республика Марий Эл", "ME.png"],
  ["RU-CU",  "Чувашская республика", "CU.png"],
  ["RU-NIZ",  "Нижегородская край", "NIZ.png"],
  ["RU-VLA",  "Владимировская область", "VLA.png"],
  ["RU-MOS",  "Московская область", "MOS.png"],
  ["RU-KLU",  "Калужская область", "KLU.png"],
  ["RU-BEL",  "Белгородская область", "BEL.png"],
  ["RU-ZAB",  "Забайкальский край", "ZAB.png"],
  ["RU-PRI",  "Приморский край", "PRI.png"],
  ["RU-KAM",  "Камачатский край", "KAM.png"],
  ["RU-MAG",  "Магаданская область", "MAG.png"],
  ["RU-SA",  "Республика Саха", "SA.png"],
  ["RU-KYA",  "Красноярский край", "KYA.png"],
  ["RU-ORE",  "Оренбургская область", "ORE.png"],
  ["RU-SAR",  "Саратовская область", "SAR.png"],
  ["RU-VGG",  "Волгоградская область", "VGG.png"],
  ["RU-VOR",  "Ставропольский край", "VOR.png"],
  ["RU-SMO",  "Смоленская область", "SMO.png"],
  ["RU-TVE",  "Тверская область", "TVE.png"],
  ["RU-PER",  "Пермская область", "PER.png"],
  ["RU-KHM",  "Ханты-Мансийский АО", "KHM.png"],
  ["RU-KHM",  "Ханты-Мансийский АО", "KHM.png"],
  ["RU-TOM",  "Томская область", "TOM.png"],
  ["RU-IRK",  "Иркутская область", "IRK.png"],
  ["RU-NEN",  "Ненецскй АО", "NEN.png"],
  ["RU-STA",  "Ставропольский край", "STA.png"],
  ["RU-TUL",  "Тульская область", "TUL.png"]

  );

$('path').each(function() {

  var regId = $(this).attr('id');
  var flag = '';
  var name = '';
  for (var j = 0; j < idAarr2.length; j++) {

    if (regId == idAarr2[j][0]) {
      name = idAarr2[j][1];
      flag =  '../static/assets/flags/'+ idAarr2[j][2];

      $(this).attr('name', name);
      $(this).attr('flag', flag);
    }
  }


  var regIdDiv = '<div class="reg" >'+ '[' + '<span>'+  regId +'</span>' + ']' +' '+ name +'</div>'
  $(regIdDiv).appendTo('.regs');


// var idArrMin = [regId, '_'];
// idAarr2.push(idArrMin);


})


// for (var j = 0; j < idAarr2.length; j++) {
//   if (regId == idAarr2[j][0]) {
//     name = cyr2latChars[j][1];

//   }
// }


function naming() {

}


//revertFill();


$('.reg').hover(function(e) {


  var id = $(this).find('span').text();

  idHover = '#' + id;

  $(idHover).css('fill','#f6e72d');
 // $('path').not(this).css('fill','rgba(0,0,0,0.5)');
 // $('.indicator').css({'top':e.pageY,'left':e.pageX+30}).show();

},function(){
  $('.indicator').html('');
  $('.indicator').hide();
  $('path').css('fill','rgba(0,0,0,0.2)');
});

//} // revertFill
*/
