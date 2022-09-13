    // 모달창에서 '아이디', '비밀번호' 창 전환
    let findPwd = document.querySelector("#pwd_btn");
    let findId = document.querySelector("#id_btn");
    let changeBtn = document.querySelector("#change");

    findPwd.addEventListener("click", ()=>{
      findPwd.classList.add("find_on");
      findId.classList.remove("find_on");
      changeBtn.innerHTML = "비밀번호<br><br>찾기"
      $(".put_find_id").css("display","block");
    });

    findId.addEventListener("click", ()=>{
      findId.classList.add("find_on");
      findPwd.classList.remove("find_on");
      changeBtn.innerHTML = "아이디<br><br>찾기"
      $(".put_find_id").css("display","none");
    });
    // 이메일 남기기
    $('#selectEmail').change(function(){
      $('#selectEmail option:selected').each(function() {
        if($(this).val()=='myself'){
          $('#email2').val('');
          $("#email2").attr("disabled",false);
        }else{
          $('#email2').val($(this).text());
          $("#email2").attr("disabled",true);
        }
      });
    });
    // 공란있을 시에 alert창 띄우기
    let formId = document.getElementById("modal_id");
    let formPh = document.getElementById("modal_ph");
    let formMail1 = document.getElementById("email1");
    let formMail2 = document.getElementById("email2");
    changeBtn.addEventListener("click", ()=> {
      if(findId.classList.contains('find_on')){
        if(formPh.value=="" || formMail1.value=="" || formMail2.value==""){
          alert("모든 항목을 입력해주세요.")
        }
      }
    });
    changeBtn.addEventListener("click", ()=> {
      if(findPwd.classList.contains('find_on')){
        if(formId.value=="" ||formPh.value=="" || formMail1.value=="" || formMail2.value==""){
          alert("모든 항목을 입력해주세요.")
        }
      }
    });

    // 모달 창 끄고 닫기
    let body = document.querySelector("body");
    let findBtn = document.querySelector("#find_idpwd");
    let closeBtn = document.querySelector(".x_btn");
    let modal = document.querySelector(".modal");

     findBtn.addEventListener('click', ()=> {
    //   $(".modal").css("display","block");
      modal.classList.toggle('show');

      if(modal.classList.contains('show')) {
        body.style.overflow = 'hidden';
      }
     });
     //   $(".modal").css("display","none");
     closeBtn.addEventListener('click', () => {
        modal.classList.toggle('show');

        if (!modal.classList.contains('show')) {
          body.style.overflow = 'auto';
        }
      
    });
    // 로그인 버튼 누를 때
    let login = document.getElementById("login");
    let putId = document.getElementById("put_id");
    let putPw = document.getElementById("put_pwd");

    function notputID() {
      if(putId.value == ""){
        putId.focus();
        $(".cau_id").css("display", "block");
      }else{
        $(".cau_id").css("display", "none");
      }
      return false;
    };
    function notputPW() {
      if(putPw.value == ""){
        putPw.focus();
        $(".cau_pwd").css("display", "block");
      }else{
        $(".cau_pwd").css("display", "none");
      }
      return false;
    };
    function notputIDPW() {
      if(putId.value == "" && putPw.value == ""){
        putId.focus();
        $(".cau_id").css("display", "block");
        $(".cau_pwd").css("display", "block");
      }
      return false;
    };

    login.addEventListener("click", () => {
      notputID();
      notputPW();
      notputIDPW();
    });
