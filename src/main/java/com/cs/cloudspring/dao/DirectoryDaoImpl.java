package com.cs.cloudspring.dao;

import com.cs.cloudspring.domain.DirectoryDto;
import org.apache.ibatis.session.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DirectoryDaoImpl implements DirectoryDao{
    @Autowired
    private SqlSession session;
    private static String namespace = "com.cs.cloudspring.dao.DirectoryMapper.";

    @Override
    public List<DirectoryDto> selectAll(){
        return session.selectList(namespace+"selectAll");
    } // List<E> selectList(String statement)

}
