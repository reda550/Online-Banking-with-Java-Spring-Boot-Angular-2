package com.userFront.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.userFront.domain.User;

public interface UserDao extends CrudRepository<User, Long>, UserDaoCustom<User> {

	User findByUsername(String username);
	User findByEmail(String email);
	List<User> findAll();

}
