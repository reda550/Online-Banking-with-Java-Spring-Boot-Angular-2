package com.userFront.Repository.implementation;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.userFront.Repository.UserDao;
import com.userFront.Repository.UserDaoCustom;
import com.userFront.domain.QUser;
import com.userFront.domain.User;
import com.userFront.domain.security.QUserRole;
import com.userFront.domain.security.UserRole;
import org.apache.log4j.spi.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
@Repository
public class UserDaoImpl implements UserDaoCustom<User> {

    @PersistenceContext
    private EntityManager entityManager;



    @Override
    public List<User> findusers() {
        QUser qUser = QUser.user;
        QUserRole qUserRole = QUserRole.userRole;
        JPAQuery<Long> query1 = (JPAQuery<Long>) new JPAQueryFactory(entityManager).
                 select(qUserRole.user.userId)
                .from(qUserRole)
                .where(qUserRole.role.roleId.eq(2));
        List<Long> userbyrole = query1.fetch();
        JPAQuery<User> query = (JPAQuery<User>) new JPAQueryFactory(entityManager)
                .from(qUser)
                .where(qUser.userId.in(userbyrole));

        return query.fetch();
    }

    @Override
    public List<User> findadmins() {
        QUser qUser = QUser.user;
        QUserRole qUserRole = QUserRole.userRole;
        JPAQuery<Long> query1 = (JPAQuery<Long>) new JPAQueryFactory(entityManager).
                select(qUserRole.user.userId)
                .from(qUserRole)
                .where(qUserRole.role.roleId.eq(1));
        List<Long> userbyrole = query1.fetch();
        JPAQuery<User> query = (JPAQuery<User>) new JPAQueryFactory(entityManager)
                .from(qUser)
                .where(qUser.userId.in(userbyrole));

        return query.fetch();
    }
}
