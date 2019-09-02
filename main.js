$(document).ready(function(){
    var no = 0;
    var no1 = 0;
    var no2 = 0;
    var no3 = 0;
    var no4 = 0;
    var no5 = 0;
    var no6 = 0;
    var no7 = 0;
    $('#klik .tampil').click(function(){
      
      $('#show').slideToggle();
      no = no+=1;
      if(no%2==0){
        $('#klik .tampil a').css('color', '');
        $('#klik .tampil .icon span i').removeClass('rotate_i');
      }else{ 
        $('#klik .tampil a').css('color', 'red');
        $('#klik .tampil .icon span i').addClass('rotate_i');
        }
    });

    $('#klik1 .tampil').click(function(){
      $('#show1').slideToggle();
      no1= no1+=1;
      if(no1%2==0){
        $('#klik1 .tampil a').css('color', '');
        $('#klik1 .tampil .icon span i').removeClass('rotate_i');
      }else {
        $('#klik1 .tampil a').css('color', 'red');
        $('#klik1 .tampil .icon span i').addClass('rotate_i');
        }
    })
    
    $('#klik2 .tampil').click(function(){
      $('#show2').slideToggle();
      no2 = no2+=1;
      if(no2%2==0){
        $('#klik2 .tampil a').css('color', '');
        $('#klik2 .tampil .icon span i').removeClass('rotate_i');
      }else {
        $('#klik2 .tampil a').css('color', 'red');
        $('#klik2 .tampil .icon span i').addClass('rotate_i');
      }
    })

    $('#klik3 .tampil').click(function(){
      $('#show3').slideToggle();
      no3 = no3+=1;
      if(no3%2==0){
        $('#klik3 .tampil a').css('color', '');
        $('#klik3 .tampil .icon span i').removeClass('rotate_i');
      }else {
        $('#klik3 .tampil a').css('color', 'red');
        $('#klik3 .tampil .icon span i').addClass('rotate_i');
      }
    })

    $('#klik4 .tampil').click(function(){
      $('#show4').slideToggle();
      no4 = no4+=1;
      if(no4%2==0){
        $('#klik4 .tampil a').css('color', '');
        $('#klik4 .tampil .icon span i').removeClass('rotate_i');
      }else {
        $('#klik4 .tampil a').css('color', 'red');
        $('#klik4 .tampil .icon span i').addClass('rotate_i');
      }
    })

    $('#klik5 .tampil').click(function(){
      $('#show5').slideToggle();
      no5 = no5+=1;
      if(no5%2==0){
        $('#klik5 .tampil a').css('color', '');
        $('#klik5 .tampil .icon span i').removeClass('rotate_i');
      }else {
        $('#klik5 .tampil a').css('color', 'red');
        $('#klik5 .tampil .icon span i').addClass('rotate_i');
      }
    })

    $('#klik6 .tampil').click(function(){
      $('#show6').slideToggle();
      no6 = no6+=1;
      if(no6%2==0){
        $('#klik6 .tampil a').css('color', '');
        $('#klik6 .tampil .icon span i').removeClass('rotate_i');
      }else {
        $('#klik6 .tampil a').css('color', 'red');
        $('#klik6 .tampil .icon span i').addClass('rotate_i');
      }
    })

    $('#klik7 .tampil').click(function(){
      $('#show7').slideToggle();
      no7 = no7+=1;
      if(no7%2==0){
        $('#klik7 .tampil a').css('color', '');
        $('#klik7 .tampil .icon span i').removeClass('rotate_i');
      }else {
        $('#klik7 .tampil a').css('color', 'red');
        $('#klik7 .tampil .icon span i').addClass('rotate_i');
      }
    })
    
    $(function(){
      var val = 0;
      var interval = setInterval(function(){
        val +=1;
        $('.bar').progressbar({value:80});
      },0.002);
    })
    
  })
