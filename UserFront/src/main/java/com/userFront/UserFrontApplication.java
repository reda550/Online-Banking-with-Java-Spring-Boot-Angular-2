package com.userFront;

import com.userFront.Repository.RoleDao;
import com.userFront.Utility.Enums.RoleEnum;
import com.userFront.domain.security.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UserFrontApplication implements CommandLineRunner{

	@Autowired
	RoleDao roleDao;
	public static void main(String[] args) {
		SpringApplication.run(UserFrontApplication.class, args);

	}

	/**
	 * Callback used to run the bean.
	 *
	 * @param args incoming main method arguments
	 * @throws Exception on error
	 */
	@Override
	public void run(String... args) throws Exception {
		//roleDao.save(new Role(RoleEnum.findByCode("ADMIN")));
		//roleDao.save(new Role(RoleEnum.findByCode("USER")));

	}
}
