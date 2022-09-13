let joinBtn = document.getElementById('join_btn');

// 이메일 남기기
$('#selec_email').change(function(){
  $('#selec_email option:selected').each(function() {
    if($(this).val()=='myself'){
      $('#put_email2').val('');
      $('#put_email2').attr('disabled',false);
    }else{
      $('#put_email2').val($(this).text());
      $('#put_email2').attr('disabled',true);
    }
  });
});

// 약관 전체 동의 시, 모든 체크 표시 checked
let chkAll = document.querySelector('#all_ag');

function checkAll() {
	if($("#all_ag").is(':checked')) {
		$("input[type=checkbox]").prop("checked", true);
	} else {
		$("input[type=checkbox]").prop("checked", false);
	}
};

chkAll.addEventListener('click', ()=> {
  checkAll();
});

$(document).on('click', 'input:checkbox[name=chk]', function(e) {
  var chks = document.getElementsByName('chk');
  var chked = 0;

  for(var i=0; i<chks.length; i++){
    var cbox = chks[i];

    if(cbox.checked==true){
      chked++;
    }
  }

  if(chks.length == chked){
    $('#all_ag').prop("checked", true);
  }else{
    $('#all_ag').prop("checked", false);
  }
});

// 공란 있을 시, 오류 문구 display: block;
let inputNot = document.getElementsByClassName('nfind');
let inputNfound = document.getElementsByClassName('cau_nfind'); 

function checkCau() {
  for(var i=0; i<inputNot.length; i++){
    if(inputNot[i].value==''){
      $(inputNfound[i]).css('display', 'block');
    }else{
      $(inputNfound[i]).css('display', 'none');
    }
  }
};

let ph1 = document.getElementById('put_ph1');
let ph2 = document.getElementById('put_ph2');

function checkCau_ph() {
  if(ph1.value=='' || ph2.value==''){
    $(inputNfound[4]).css('display', 'block');
  }else{
    $(inputNfound[4]).css('display', 'none');
  }
};

// 필수 동의 중에 체크 안 된 것 있으면, alert 창으로 @@에 동의해주세요. 띄우기
let chkService = document.getElementById('srv_ag');
let chkPersonal = document.getElementById('psn_ag');

function checkAlert() {
  if(chkService.checked!=true&&chkPersonal.checked!=true){
    alert('필수 항목에 동의해주세요.');
  }else if(chkService.checked!=true){
    alert('서비스 이용약관에 동의해주세요.');
  }else if(chkPersonal.checked!=true){
    alert('개인정보수집 및 이용에 동의해주세요.');
  };
};

// 비밀번호랑 비밀번호 확인 value 다르면 비밀번호가 불일치합니다. 오류 block
let inputPwd = document.getElementById('put_pwd');
let inputPwdchk = document.getElementById('put_chk_pwd');
let Cau = document.querySelectorAll('.cau');

function chkEqualPwd() {
  if(inputPwd.value!=inputPwdchk.value){
    $(Cau[2]).css('display', 'block');
  }else{
    $(Cau[2]).css('display', 'none');
  }
};

joinBtn.addEventListener('click', ()=> {
  checkAlert();
  checkCau();
  checkCau_ph();
  chkEqualPwd();
});
