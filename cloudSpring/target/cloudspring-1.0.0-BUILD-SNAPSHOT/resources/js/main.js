$( document ).ready( function() {
    
    

  //--------------------------------체크 처리--------------------------------
  //1. all_check 클릭시 전체 클릭
  $('.input_check_all').click(function(){
      var checked = $('.input_check_all').is(':checked'); // all_check 버튼이 클릭되어 있는지 체크
      //체크 되어 있다면
      if(checked){
          // 전체 파일의 input_check 를 true(체크 처리)
          $('.input_check').prop('checked',true);
          // 체크버튼 계속 떠있게 처리
          $(".file_icon.check").css('display','block');
          // 디자인 변경
          $(".myFile_btn").css('background-color', '#F1F9F8');
          $(".myFile_btn").css('border', '1px solid #F1F9F8');
      }
      //체크 되어 있지 않다면
      else{
          console.log(checked);
          // 전체 파일의 input_check 를 false(체크 해제)
          $('.input_check').prop('checked',false);
          // 체크버튼 안보이게
          // 별이 체크 되어 있다면 그건 놔두기
          // if($('.favorites img').attr("src") == "img/star_fill.png"){
          //     $(".file_icon.check").css('display','none');
          // } 
          // else{
          //     $(".file_icon.check").css('display','none');
          // }
          $(".file_icon.check").css('display','none');
          // 디자인 변경
          $(".myFile_btn").css('background-color', '#ffffff');
          $(".myFile_btn").css('border', '1px solid #F6F7FA');
      }
  });

  //2. 즐겨찾기 등록 
  //*현재는 색만 바뀌게 되어 있음
  $(".favorites").click(function(){
      
      // 별이 클릭 안되어 있다면
      if($(this).children("img").attr("src") == "img/star.png"){
          $(this).children("img").attr("src","img/star_fill.png");
          
      }
      // 별이 클릭 되어 있다면
      else{
          $(this).children("img").attr("src","img/star.png");
      }
      
  });

  //3. 체크박스 클릭시 몇번째 파일이 선택된건지 확인
  function checkIndex(clickthis){
      let idx = $(clickthis).closest("li").index();
      
      return idx;
  }

  var arr_folder = [];
  var arr_file = [];
  $(".input_check").click(function(){
      var checked = $(this).is(':checked'); // check 버튼이 클릭되어 있는지 체크
      let idx = $(this).closest("li").index();

      if($(this).closest("ul").attr("class") == "folder"){
          //체크 되어 있다면
          if(checked){
              arr_folder.push(idx);
          }
          //체크 해제 시 체크 해제 한 인덱스 배열에서 삭제
          else{
              for(let i=0; i<arr_folder.length; i++){
                  if(arr_folder[i] == idx){
                      arr_folder.splice(i, 1);
                      i--;
                  }
              }
          }
      }

      if($(this).closest("ul").attr("class") == "file"){
          //체크 되어 있다면
          if(checked){
              arr_file.push(idx);
          }
          //체크 해제 시 체크 해제 한 인덱스 배열에서 삭제
          else{
              for(let i=0; i<arr_file.length; i++){
                  if(arr_file[i] == idx){
                      arr_file.splice(i, 1);
                      i--;
                  }
              }
          }
      }
      
  })
  $(".input_check_all").click(function(){
      let idx = $("#content1 li").length;
      var checked = $(this).is(':checked');
      if(checked){
          for(let i =0; i<idx; i++){
              arr_folder[i] = i;
              arr_file[i] = i;
              
          }   
      }
      
  })
  //체크박스 클릭 후 별 클릭 시 인덱스
  $("#task_btn_area .favorites").click(function(){
              
              
      for(let i=0; i<arr_folder.length; i++){
          // console.log(arr_folder[i]);
          $("#content1 .folder li:nth-child("+(arr_folder[i]+1)+")").find(".favorites img").attr("src", "img/star_fill.png");
          $("#content1 .folder li:nth-child("+(arr_folder[i]+1)+")").find(".favorites").css("display", "block");
          
      }
      for(let i=0; i<arr_file.length; i++){
          // console.log(arr_file[i]);
          $("#content1 .file li:nth-child("+(arr_file[i]+1)+")").find(".favorites img").attr("src", "img/star_fill.png");
          $("#content1 .file li:nth-child("+(arr_file[i]+1)+")").find(".favorites").css("display", "block");
          
      }
      $('.input_check').prop('checked',false);
      $("#content1 li .check").css("display", "none");
      arr_folder = [];
      arr_file = [];
  })
  let index = 0;
  $(".file .myFile_btn > p").click(function(){
      let img_address = $(this).find("img").attr("src");
      
      index = $(this).parents("li").index();
      let file_length = $(".file li").length;
      
      let name = img_address.split("/");
      $('.detail').css("display", "block");
      $(".selected_file_name").html(name[name.length-1]);
      $(".img_detail img").attr("src", img_address);
      if(index == 0){
          $(".prev_btn").css("opacity", "0.4");
      }
      else if(index == (file_length-1)){
          $(".next_btn").css("opacity", "0.4");
      }
      else{
          $(".prev_btn").attr("style","");
          $(".next_btn").attr("style","");
      }
  })

  //--------------------------------top bar--------------------------------
  $(".back_to_main").click(function(){
      $('.detail').css("display","none");
      $(".selected_file_name").css("display", "block");
      $(".selected_file_name").siblings(".chg_name").css("display", "none");
      $(".more").css("display", "none");
  })
  $(".more_icon").click(function(){
      if($(".more").css("display") == "none"){
          $(".more").css("display", "flex");
      }
      else{
          $(".more").css("display", "none");
      }
  })
  $(".create_folder").click(function(){
      $(".detail2").css("display", "block");
  })
  $(".create_cancel").click(function(){
      $(".detail2").css("display", "none");
  })
  $(".create_success").click(function(){
      $(".detail2").css("display", "none");
  })
  

  //--------------------------------modal--------------------------------
  // 1. 이름 변경 클릭시 
  $(".edit_name").click(function(){
      // 나중에 db에 저장해야함
      $(".selected_file_name").css("display", "none");
      $(".selected_file_name").siblings(".chg_name").css("display", "block");
      $(".selected_file_name").siblings(".chg_name").find("input[type=text]").focus();
      $(".selected_file_name").siblings("input").attr("placeholder", $(".selected_file_name").html());
      $(".more").css("display","none");
  })
  // 2. 이름 변경 완료시
  $(".edit_success").click(function(){
      $(".selected_file_name").css("display", "block");
      $(".selected_file_name").siblings(".chg_name").css("display", "none");
  })

  // 3. 즐겨찾기 클릭 시
  $(".favorite_this").click(function(){
      if($(".file li:nth-child("+(index+1)+")").find(".favorites img").attr("src") == "img/star_fill.png"){
          alert("즐겨찾기에서 제거 되었습니다.");
          $(".more").css("display","none");
          // 해당 인덱스 별 컬러 변경 후 고정
          $(".file li:nth-child("+(index+1)+")").find(".favorites img").attr("src", "img/star.png")
          $(".file li:nth-child("+(index+1)+")").find(".favorites").css('display','none');

      }
      else{
          alert("즐겨찾기로 등록되었습니다.");
          $(".more").css("display","none");
          // 해당 인덱스 별 컬러 변경 후 고정
          $(".file li:nth-child("+(index+1)+")").find(".favorites img").attr("src", "img/star_fill.png")
          $(".file li:nth-child("+(index+1)+")").find(".favorites").css('display','block');
  
      }
  })

  // 4. 뒤로가기 hover 시
  $(".topbar_detail > ul > li:nth-child(1) .back_to_main").hover(function(){
      $(".back_to_main").css("opacity", "0.4");
  }, function(){
      $(".back_to_main").css("opacity", "1");
  })

  // 5. 영역 밖 클릭시 모달 창 끄기 (나중에 구현)
  $(".modal").click(function(){
      $(".detail").css("display", "none");
  })
  
  //6. prev, next 버튼 클릭시 다음으로 이동
  $(".prev_btn").click(function(){
      let img_address = $(".file li:nth-child("+index+") .myFile_btn > p > img").attr("src");
      if(index != 0){
          $(".img_detail_detail img").attr("src", img_address);
          $(".next_btn").attr("style","");
          index = index -1;
          if(index == 0){
              $(".prev_btn").css("opacity", "0.4");
              
          }
          let name = img_address.split("/");
          $('.detail').css("display", "block");
          $(".selected_file_name").html(name[name.length-1]);
      }
      
  })
  $(".next_btn").click(function(){
      let last_file_index = $(".file li").length;
      let img_address = $(".file li:nth-child("+(index+2)+") .myFile_btn > p > img").attr("src");
      if(index != (last_file_index-1)){
          $(".img_detail_detail img").attr("src", img_address);
          $(".prev_btn").attr("style","");
          index = index + 1;
          if(index == (last_file_index-1)){
              $(".next_btn").css("opacity", "0.4");
              
          }
          let name = img_address.split("/");
          $('.detail').css("display", "block");
          $(".selected_file_name").html(name[name.length-1]);
      }
  })
  
  //--------------------------------파일 hover 처리--------------------------------
  $('#content1 li').hover(function(){
      $(this).find(".file_icon").css('display','block');
      $(this).children(".myFile_btn").css('background-color', '#F1F9F8');
      $(this).children(".myFile_btn").css('border', '1px solid #F1F9F8');
  },function(){
      var checked = $(this).find('.input_check').is(':checked');
      
  if(checked){
          $(this).parent('span').css('display','block');
          $(this).find(".file_icon.favorites").css('display','none');
      }
      else{
          $(this).find(".file_icon").css('display','none');
          $(this).children(".myFile_btn").css('background-color', '#ffffff');
          $(this).children(".myFile_btn").css('border', '1px solid #F6F7FA');
      }

      if($(this).find(".favorites img").attr("src") == "img/star_fill.png"){
          $(this).find(".file_icon.favorites").css('display','block');
      }

  });

  

  //-------------------------------- side bar--------------------------------
  //1. 사이드바 업다운
  $(".tree_pd").click(function(){
      if($(this).children("span").find("i").attr('class') == "fa-solid fa-angle-right"){
          $(this).children("span").find("i").attr('class', "fa-solid fa-angle-down");
          $(this).siblings(".tree_sub").slideDown();
      }
      else{
          $(this).children("span").find("i").attr('class', "fa-solid fa-angle-right");
          $(this).siblings(".tree_sub").slideUp();
      }
  })

  //2. 사이드바 클릭시 top_bar에 폴더명 추가
  $(".tree_pd").click(function(){
      
      let filename = $(this).find(".filename").html();
      $(".path").html("");
      
      $('.path').prepend(filename);
      let parentsfilename = $(this).parent(".tree_sub").siblings(".tree_pd").find(".filename");
      addtab();
      function addtab(){
          if(typeof parentsfilename.html() == "undefined"){
              
              $('.path').prepend('&nbsp<i class="fa-solid fa-angle-right"></i>&nbsp');
              $('.path').prepend("내 파일");
          }
          else{
              let a = parentsfilename.closest(".tree_sub").siblings(".tree_pd").find(".filename");
              $('.path').prepend('&nbsp<i class="fa-solid fa-angle-right"></i>&nbsp');
              $('.path').prepend(parentsfilename.html());
              parentsfilename = a;
              
              addtab();
          }
      }

      //클릭된 사이드 바 폴더 디자인 변경
      $(".hover_pd").attr("class", "hover_pd");
      $(this).find(".filename").parent(".tree_pd").find(".hover_pd").attr("class", "hover_pd clicked");
  })
  


  
  $(".myFile_btn").click(function(){
  $(location).attr("href", "#");
})

} );