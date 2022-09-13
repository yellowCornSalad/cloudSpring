package com.cs.cloudspring.service;


import com.cs.cloudspring.dao.DirectoryDao;
import com.cs.cloudspring.domain.DirectoryDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DirectoryServiceImpl implements DirectoryService{

    @Autowired
    DirectoryDao directoryDao;

    @Override
    public List<DirectoryDto> getList(){
        return directoryDao.selectAll();
    }
}
