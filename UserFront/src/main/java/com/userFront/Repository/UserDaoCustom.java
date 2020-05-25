package com.userFront.Repository;

import com.userFront.domain.Settings.AbstractAuditableEntity;
import com.userFront.domain.User;

import java.util.List;

public interface UserDaoCustom<User>{
    List<com.userFront.domain.User> findusers();
    List<com.userFront.domain.User> findadmins();
}
