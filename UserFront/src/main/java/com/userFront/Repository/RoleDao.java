package com.userFront.Repository;

import com.userFront.Utility.Enums.RoleEnum;
import org.springframework.data.repository.CrudRepository;

import com.userFront.domain.security.Role;

public interface RoleDao extends CrudRepository<Role, Integer> {

	Role findByName(RoleEnum name);
}
