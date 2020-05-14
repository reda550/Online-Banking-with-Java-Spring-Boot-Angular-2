package com.userFront.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.userFront.domain.SavingsTransaction;

public interface SavingsTransactionDao extends CrudRepository<SavingsTransaction, Long> {

    List<SavingsTransaction> findAll();
}

