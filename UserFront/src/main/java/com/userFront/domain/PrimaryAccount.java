package com.userFront.domain;

import java.math.BigDecimal;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.userFront.domain.Settings.AbstractAuditableEntity;
import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class PrimaryAccount extends AbstractAuditableEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long accountNumber;
	private BigDecimal accountBalance;

	@OneToMany(mappedBy = "primaryAccount", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private List<PrimaryTransaction> primaryTransactionList;

	public PrimaryAccount(Long accountNumber, BigDecimal accountBalance, List<PrimaryTransaction> primaryTransactionList) {
		this.accountNumber = accountNumber;
		this.accountBalance = accountBalance;
		this.primaryTransactionList = primaryTransactionList;
	}
}
