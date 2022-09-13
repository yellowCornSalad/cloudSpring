let putPwd = document.getElementById('put_pwd');
let chkBox = document.querySelector('#agree');
let subBtn = document.querySelector('.bye_btn');

var Form = document.getElementById("pwd_box");

function CheckPwd() {
  if(putPwd.value == ""){
    putPwd.focus();
    $(".pwd_cau").css("display","block");

    return false;
  }else{
    $(".pwd_cau").css("display","none");
  }
};

function CheckBox() {
  if(chkBox.checked!=true) {
    alert("안내사항 확인 후, 동의에 체크해주세요.");

    return false;
  }
};

subBtn.addEventListener("click", () => {
  CheckBox();
  CheckPwd();

  console.log(putPwd.value);

  return false;
});