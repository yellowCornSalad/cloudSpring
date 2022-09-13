package com.cs.cloudspring.controller;

import com.cs.cloudspring.domain.BoardDto;
import com.cs.cloudspring.domain.PageHandler;
import com.cs.cloudspring.domain.SearchCondition;
import com.cs.cloudspring.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

@Controller
@RequestMapping("/directory")
public class BoardController {
//    @Autowired
//    BoardService boardService;
//
//
    @GetMapping("/show")
    public String show(){
        return "directory";
    }

}
