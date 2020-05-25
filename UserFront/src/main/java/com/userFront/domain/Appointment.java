package com.userFront.domain;

import com.userFront.domain.Settings.AbstractAuditableEntity;
import lombok.*;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;



@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Appointment extends AbstractAuditableEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private Date date;
	private String location;
	private String description;
	private boolean confirmed;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

}
