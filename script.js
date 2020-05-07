let photo0 = {
  photo: 'gallery/szingapur.jpg',
  title: 'Szingapúr - 2018. augusztus',
  description: 'Balira való utazás során Szingapúr is egy állomásunk volt, ahol eltöltöttünk néhány napot',
};

let photo1 = {
    photo: 'gallery/bali.jpg',
    title: 'Bali - 2018. augusztus',
    description: '2018 nyarán Balin töltöttünk el körülbelül egy hetet',
  };

  let photo2 = {
    photo: 'gallery/parizs.jpg',
    title: 'Párizs - 2018. október',
    description: 'Európai felfedező körutunk Párizsban vette kezdetét 2018 őszén',
  };
  let photo3 = {
    photo: 'gallery/varso.jpg',
    title: 'Varsó - 2018. november',
    description: 'A lengyelek nemzeti ünnepe november 11-én van, ennek kapcsán néhány napot Varósabn töltöttünk 2018-ban',
  };

  let photo4 = {
    photo: 'gallery/london.jpg',
    title: 'London - 2019. március',
    description: 'Párizs után egy másik európai nagyvárosba, Londonba látogattunk el 4-5 napra',
  };

  let photo5 = {
    photo: 'gallery/csiksomlyo.jpg',
    title: 'Csíksomlyó - 2019. június',
    description: 'Anett korábban sosem járt Erdélyben, ezért is utaztunk el a csíksomlyói búcsúba és néztük meg számos székelyföldi látnivalót',
  };

  let photo6 = {
    photo: 'gallery/trogir.jpg',
    title: 'Trogir - 2019. július',
    description: '2019 nyarán Trogirban és környékén töltöttünk egy hetet a csodálatos horvát tengerparton',
  };

  let photo7 = {
    photo: 'gallery/plitvice.jpg',
    title: 'Plitvicei-tavak - 2019. június',
    description: 'A Horvátországban található erdős, vízeséses gyönyörű tórendszert látogattuk meg',
  };

  let photo8 = {
    photo: 'gallery/roma.jpg',
    title: 'Róma - 2019. október',
    description: 'Harmadik európai nagyvárosként Rómába látogattunk el, ahol a sok látnivaló megnézése közbe egy lánykérés is belefért a Szent Péter Bazilika tetején',
  };

  let photo9 = {
    photo: 'gallery/zakopane.jpg',
    title: 'Zakopane - 2019. november',
    description: 'A Lengyelország déli határán található, nagyon hangulato kisvárosban töltöttünk néhány napot',
  };

let photo10 = {
  photo: 'gallery/praga.jpg',
  title: 'Prága - 2019. december',
  description: 'A karácsony előtti napokban Prága gyönyörű városába látogattunk',
};

let photo11 = {
  photo: 'gallery/erdely20202.jpg',
  title: 'Erdély - 2020. január',
  description: 'Erdélyben, a Bihari-hegységben, az 1000 méter magasan fekvő Smida nevű kistelepülésen töltöttünk a világtól evonulva néhány napot'
};

  let currentPhoto = 0;

  let imagesData = [photo0, photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11];

    let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
      }


  loadPhoto(currentPhoto);
  
  $('#right_arrow').click(() => {
    currentPhoto++;
    if(currentPhoto < imagesData.length) {
        loadPhoto(currentPhoto);
      } else {
        currentPhoto = 0;
        loadPhoto(currentPhoto)
      }
  })

  $('#left_arrow').click(() => {
    currentPhoto--;
    if(currentPhoto < 0) {
      currentPhoto = imagesData.length-1;
      loadPhoto(currentPhoto);
      } else {
      loadPhoto(currentPhoto)
      }
})

let counter = 0;
  imagesData.forEach(photo => {
     $(".container").append(
        '<div class="thumbnail" id="box'+ counter+'"><img id="small_pic" src="' + photo.photo + '" data-number="' + counter +  '"><blockquote class="felirat">' + photo.title + '</blockquote></div>'
                 );
                 counter++;
                  });

                
$(".thumbnail").on( "click",function (event) {
  currentPhoto = $(event.target).attr("data-number");
  loadPhoto(currentPhoto);
  let id = "#box" + currentPhoto;
  $(id).css("transform", "scale(1.1)");
  $(id).css("opacity", "0.5");
  for(let counter2 = 0; counter2 < imagesData.length; counter2++){
    if(counter2 != currentPhoto){
       let id2 = "#box" + counter2;
       $(id2).css("transform", "scale(1.0)");
       $(id2).css("opacity", "1");
    }
}
});
  


        /*

imagesData2.forEach((url) => {
    $('.thumbnail').css('background-image', 'url' + 'imagesData2[photoNumber].photo');
});
*/