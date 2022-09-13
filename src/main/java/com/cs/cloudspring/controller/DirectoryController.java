package com.cs.cloudspring.controller;


import com.cs.cloudspring.domain.DirectoryDto;
import com.cs.cloudspring.service.DirectoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("/directory")
public class DirectoryController {

    @Autowired
    DirectoryService directoryService;

    @GetMapping("/list")
    public String list(Model m, HttpServletRequest request) {
        List<DirectoryDto> list = directoryService.getList();
        m.addAttribute("list", list);
        return "directory"; // 로그인을 한 상태이면, 게시판 화면으로 이동
    }

}
