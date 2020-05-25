package com.userFront.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.userFront.domain.Settings.AbstractAuditableEntity;
import lombok.*;



@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Recipient extends AbstractAuditableEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String name;
	private String email;
	private String phone;
	private String accountNumber;
	private String description;

	@ManyToOne
	@JoinColumn(name = "user_id")
	@JsonIgnore
	private User user;

}
