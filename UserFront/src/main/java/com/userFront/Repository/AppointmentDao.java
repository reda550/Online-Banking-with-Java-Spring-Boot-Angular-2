package com.userFront.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.userFront.domain.Appointment;

public interface AppointmentDao extends CrudRepository<Appointment, Long> {

    List<Appointment> findAll();
}
