<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false"%>
<c:set var="loginId" value="${pageContext.request.getSession(false)==null ? '' : pageContext.request.session.getAttribute('id')}"/>
<c:set var="loginOutLink" value="${loginId=='' ? '/login/login' : '/login/logout'}"/>
<c:set var="loginOut" value="${loginId=='' ? 'Login' : 'ID='+=loginId}"/>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Do+Hyeon&family=Noto+Sans+KR:wght@300;400;700&family=Noto+Serif+KR:wght@500&family=Roboto+Mono&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="<c:url value='/css/joinus.css'/>">
  <link rel="stylesheet" href="<c:url value='/css/header.css'/>">
  <script src="https://kit.fontawesome.com/4d56c448c5.js" crossorigin="anonymous"></script>
  <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
  <title>회원가입</title>

</head>
<body>
<header>
  <h1 class="logo"><img src="<c:url value='/img/logo.png'/>" alt="logo"></h1>
  <ul class="menu">
    <li>회원가입</li>
    <li>로그인</li>
  </ul>
</header>

<h1 id="title">JOIN US</h1>
<p class="must">* 은 필수입력 항목입니다.</p>

<div class="bd">
  <div class="box_id">
    <div class="id_box">
      <p>* 아이디</p>
      <div>
        <input type="text" name="id" id="put_id" class="nfind" placeholder="4~20자 사이의 영어 소문자, 숫자">
        <p class="cau_nfind">아이디를 입력해주세요.</p>
        <p class="cau">아이디는 4~20자리 영문 소문자, 숫자 이어야 합니다.</p>
        <p class="cau">이미 사용 중인 아이디입니다.</p>
      </div>
    </div>
    <div class="dup_chk">
      <a id="dup_chk" href="">중복체크</a>
    </div>
  </div>
  <div id="form_cont">
    <div class="box">
      <p>* 비밀번호</p>
      <div>
        <input type="text" name="pwd" id="put_pwd" class="nfind" placeholder="4~20자 사이의 영어 대소문자, 숫자">
        <p class="cau_nfind">비밀번호를 입력해주세요.</p>
      </div>
    </div>
    <div class="box">
      <p>* 비밀번호 확인</p>
      <div>
        <input type="text" name="chk_pwd" id="put_chk_pwd" class="nfind" placeholder="4~20자 사이의 영어 대소문자, 숫자">
        <p class="cau_nfind">비밀번호 확인을 입력해주세요.</p>
        <p class="cau">비밀번호가 불일치합니다.</p>
      </div>
    </div>
    <div class="box">
      <p>* 이름</p>
      <div>
        <input type="text" name="name" id="put_name" class="nfind">
        <p class="cau_nfind">이름을 입력해주세요.</p>
      </div>
    </div>
    <div class="box">
      <p>생년월일</p>
      <input type="date" name="bday" id="put_bday">
    </div>

    <div class="box">
      <p>이메일</p>
      <input type="text" name="email" id="put_email1">
      <p class="email_sign">@</p>
      <input type="text" name="email" id="put_email2">
      <select name="email" id="selec_email">
        <option value="myself">직접 입력</option>
        <option value="gmail">gmail.com</option>
        <option value="naver">naver.com</option>
        <option value="kakao">kakao.com</option>
        <option value="nate">nate.com</option>
      </select>
    </div>
    <div class="box">
      <p>* 전화번호</p>
      <div>
        <div class="ph_box">
          <select name="ph" id="selec_ph">
            <option value="010">010</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
          </select>
          <p class="sign">-</p>
          <input type="text" name="ph" id="put_ph1">
          <p class="sign">-</p>
          <input type="text" name="ph" id="put_ph2">
        </div>
        <p class="cau_nfind">전화번호를 입력해주세요.</p>
      </div>
    </div>
    <hr>
    <div class="chk_all">
      <label for="all_ag" class="chk_box">
        <input type="checkbox" id="all_ag"/>
        <span class="on"></span>
        약관 전체 동의
      </label>
      <i class="fa-solid fa-caret-down"></i>
    </div>
    <div class="chk">
      <label for="srv_ag" class="chk_box">
        <input type="checkbox" name="chk" id="srv_ag"/>
        <span class="on"></span>
        서비스 이용약관
      </label>
      <a href="">상세정보</a>
    </div>
    <div class="chk">
      <label for="psn_ag" class="chk_box">
        <input type="checkbox" name="chk" id="psn_ag"/>
        <span class="on"></span>
        개인정보수집 및 이용
      </label>
      <a href="">상세정보</a>
    </div>
    <div class="chk">
      <label for="eml_ag" class="chk_box">
        <input type="checkbox" name="chk" id="eml_ag"/>
        <span class="on"></span>
        이메일 수신동의 (선택)
      </label>
      <a href="">상세정보</a>
    </div>
    <button id="join_btn">회원가입</button>
  </div>
</div>

<script src="<c:url value='/js/joinus.js'/>"></script>
</body>
</html>