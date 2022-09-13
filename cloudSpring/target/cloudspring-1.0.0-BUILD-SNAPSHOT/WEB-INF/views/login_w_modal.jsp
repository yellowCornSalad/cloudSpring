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
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <link rel="stylesheet" href="<c:url value='/css/login_w_modal.css'/>">
  <link rel="stylesheet" href="<c:url value='/css/header.css'/>">
  <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
  <title>로그인</title>
</head>
<body>
<header>
  <h1 class="logo"><img src="<c:url value='/img/logo.png'/>" alt=""></h1>
  <ul class="menu">
    <li>회원가입</li>
    <li>로그인</li>
  </ul>
</header>

<!-- 모달 -->
<div class="modal">
  <div class="modal_body">
    <div class="x_btn">
      <span class="material-symbols-outlined">disabled_by_default</span>
    </div>
    <br>
    <div class="find_btn_box">
      <button id="id_btn" class="find_on">아이디 찾기</button>
      <button id="pwd_btn">비밀번호 찾기</button>
    </div>
    <div class="form_cont">
      <div class="put_find_id">
        <input type="text" id="modal_id" name="id" placeholder="아이디"/>
        <hr>
      </div>
      <input type="text" id="modal_ph" name="ph" placeholder="전화번호 (숫자만 입력해주세요.)"/>
      <hr>
      <div class="put_mail">
        <input type="text" id="email1" name="forward_email" placeholder="이메일"/>
        <p>@</p>
        <input type="text" id="email2" name="behind_email" placeholder="직접 입력"/>
        <select id="selectEmail">
          <option value="myself">직접 입력</option>
          <option value="gmail">gmail.com</option>
          <option value="naver">naver.com</option>
          <option value="kakao">kakao.com</option>
          <option value="nate">nate.com</option>
        </select>
      </div>
      <hr>
      <button id="change" class="find_id">아이디<br><br>찾기</button>
    </div>
  </div>
</div>
<!-- 모달 끝 -->

<h1 id="title">LOGIN</h1>
<div class="sns_log">
  <!-- <div class="google">google</div> -->
  <div class="google"><img class="google_logo" src="<c:url value='/img/google.png'/>" alt="구글(google)"/></div>
  <!-- <div class="kakao">kakao</div> -->
  <div class="kakao"><img class="kakao_logo" src="<c:url value='/img/kakao.png'/>" alt="카카오(kakao)"/></div>
  <!-- <div class="naver">naver</div> -->
  <div class="naver">
    <!-- <div class="naver_logo_view"> -->
    <img class="naver_logo" src="<c:url value='/img/naver.png'/>" alt="네이버(naver)"/>
    <!-- </div> -->
  </div>
</div>

<div class="hrz">
  <hr class="hr1">
  <p class="or">or</p>
  <hr class="hr2">
</div>

<p class="cau_log">없는 아이디 이거나 아이디 혹은 비밀번호가 일치하지 않습니다.</p>

<div class="put_box">
  <input type="text" id="put_id" name="put_id" placeholder="아이디">
  <p class="cau_id">아이디를 입력해주세요.</p>
  <input type="text" id="put_pwd" name="put_pwd" placeholder="비밀번호">
  <p class="cau_pwd">비밀번호를 입력해주세요.</p>
</div>

<div class="agr_ch">
  <label for="agree1" class="chk_box">
    <!-- <input type="checkbox" id="agree1"/> -->
    <input type="checkbox" id="agree1" checked="checked"/>
    <span class="on"></span>
    로그인 유지
  </label>
  <label for="agree2" class="chk_box">
    <input type="checkbox" id="agree2"/>
    <!-- <input type="checkbox" id="agree2" checked="checked"/> -->
    <span class="on"></span>
    로그인 상태 저장
  </label>
</div>

<div class="btns">
  <button type="button" id="find_idpwd" name="find_idpwd">아이디 / 비밀번호 찾기</button>
  <button type="submit" id="login" name="login"><a class="a_login" href="">로그인</a></button>
</div>

<%--<div class="a_link"><a href="">회원가입</a></div>--%>

<script src="<c:url value='/js/login_w_modal.js'/>"></script>
</body>
</html>