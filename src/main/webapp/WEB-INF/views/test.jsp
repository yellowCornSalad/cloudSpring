<%--
  Created by IntelliJ IDEA.
  User: eunbi
  Date: 2022-09-12
  Time: 오후 5:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt" %>

<html>
<head>
    <title>Title</title>
</head>
<body>
list로 출력 <br>
<c:forEach var="DirectoryDto" items="${list}">
    ${DirectoryDto.file_uuid}
    ${DirectoryDto.file_name}
</c:forEach>
<br>
1번만 출력
</body>
</html>
