package com.cs.cloudspring.domain;

import java.util.Date;

public class DirectoryDto {
    private String file_uuid;
    private String file_name;
    private String file_url;
    private Integer file_size;
    private Date file_upload_date;
    private String id;
    private Integer file_favorite; // 즐겨찾기 여부
    private Integer file_check; //폴더, 파일 구분
    //Constructor
    public DirectoryDto(){}

    public DirectoryDto(String file_uuid, String file_name, String file_url, Integer file_size, Date file_upload_date, String id) {
        this.file_uuid = file_uuid;
        this.file_name = file_name;
        this.file_url = file_url;
        this.file_size = file_size;
        this.file_upload_date = file_upload_date;
        this.id = id;
        this.file_favorite = file_favorite;
        this.file_check = file_check;
    }

    //toStirng

    @Override
    public String toString() {
        return "DirectoryDto{" +
                "file_uuid='" + file_uuid + '\'' +
                ", file_name='" + file_name + '\'' +
                ", file_url='" + file_url + '\'' +
                ", file_size=" + file_size +
                ", file_upload_date=" + file_upload_date +
                ", id='" + id + '\'' +
                ", file_favorite=" + file_favorite +
                ", file_check=" + file_check +
                '}';
    }

    //Getter and Setter
    public String getFile_uuid() {
        return file_uuid;
    }

    public void setFile_uuid(String file_uuid) {
        this.file_uuid = file_uuid;
    }

    public String getFile_name() {
        return file_name;
    }

    public void setFile_name(String file_name) {
        this.file_name = file_name;
    }

    public String getFile_url() {
        return file_url;
    }

    public void setFile_url(String file_url) {
        this.file_url = file_url;
    }

    public Integer getFile_size() {
        return file_size;
    }

    public void setFile_size(Integer file_size) {
        this.file_size = file_size;
    }

    public Date getFile_upload_date() {
        return file_upload_date;
    }

    public void setFile_upload_date(Date file_upload_date) {
        this.file_upload_date = file_upload_date;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getFile_favorite() {
        return file_favorite;
    }

    public void setFile_favorite(Integer file_favorite) {
        this.file_favorite = file_favorite;
    }

    public Integer getFile_check() {
        return file_check;
    }

    public void setFile_check(Integer file_check) {
        this.file_check = file_check;
    }
}
