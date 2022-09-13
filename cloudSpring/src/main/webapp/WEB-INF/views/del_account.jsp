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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans&family=Do+Hyeon&family=Noto+Sans+KR:wght@300;400;700&family=Noto+Serif+KR:wght@500&family=Roboto+Mono&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<c:url value='/css/del_account.css'/>">
    <link rel="stylesheet" href="<c:url value='/css/header.css'/>">
    <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>

    <title>회원탈퇴</title>
</head>
<body>
<header>
    <h1 class="logo"><img src="<c:url value='/img/logo.png'/>" alt=""></h1>
    <ul class="menu">
        <li>회원가입</li>
        <li>로그인</li>
    </ul>
</header>
</div>
<div id="bh1">
    <h1>회원 탈퇴</h1>
</div>
<div id="bh2">
    <p>@@ 탈퇴 전 확인하세요</p>
</div>

<div id="precau">
    <ul>
        <li>
            탈퇴 시 이용 중인 드라이브는 폐쇄되며, 모든 데이터는 복구가 불가능합니다.
        </li>
        <br>
        <li>
            모든 이미지, 영상, 문서 등의 데이터와 개인정보가 삭제됩니다.
        </li>
    </ul>
</div>

<form id="pwd_box" name="frm" method="post">
    <div class="pwd_chk1">
        <h4>* 비밀번호 확인</h4>
    </div>
    <div class="pwd_chk2">
        <input type="text" id="put_pwd" name="put_pwd" placeholder="비밀번호를 입력해주세요."/>
        <p class="pwd_cau">비밀번호를 입력해주세요.</p>
    </div>
</form>

<div class="agr_ch">
    <label for="agree" class="chk_box">
        <input type="checkbox" id="agree"/>
        <!-- <input type="checkbox" id="agree" checked="checked"/> -->
        <span class="on"></span>
        안내사항을 모두 확인하였으며, 이에 동의합니다.
    </label>
</div>

<div class="byebtn_box">
    <hr>
    <button type="submit" name="bye_btn" class="bye_btn"><a href="">서비스 탈퇴</a></button>
</div>

<script src="<c:url value='/js/del_account.js'/>"></script>
</body>
</html>