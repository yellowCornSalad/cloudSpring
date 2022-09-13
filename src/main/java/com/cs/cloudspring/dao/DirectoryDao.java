package com.cs.cloudspring.dao;

import com.cs.cloudspring.domain.DirectoryDto;

import java.util.List;

public interface DirectoryDao {
    List<DirectoryDto> selectAll();
}
