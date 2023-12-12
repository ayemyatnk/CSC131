package com.scheduler.demo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.scheduler.demo.Time;

public interface TimeRep extends CrudRepository<Time, Integer>{
	List<Time> findByUserId(int id);
}
