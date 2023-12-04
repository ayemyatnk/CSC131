package com.scheduler.demo;

import org.springframework.data.repository.CrudRepository;

import com.scheduler.demo.Time;

public interface TimeRep extends CrudRepository<Time, Integer>{
    Iterable<Time> findByUserId(Integer user_id);
}
