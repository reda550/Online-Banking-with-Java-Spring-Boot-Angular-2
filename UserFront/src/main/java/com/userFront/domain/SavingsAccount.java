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
public class SavingsAccount extends AbstractAuditableEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private int accountNumber;
	@GeneratedValue(strategy = GenerationType.AUTO)
	private BigDecimal accountBalance;

	@OneToMany(mappedBy = "savingsAccount", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnore
	private List<SavingsTransaction> savingsTransactionList;

	public SavingsAccount(int accountNumber, BigDecimal accountBalance, List<SavingsTransaction> savingsTransactionList) {
		this.accountNumber = accountNumber;
		this.accountBalance = accountBalance;
		this.savingsTransactionList = savingsTransactionList;
	}
}
