package com.scheduler.demo;

import org.springframework.data.repository.CrudRepository;

import com.scheduler.demo.Meeting;

public interface MeetingRep extends CrudRepository<Meeting, Integer>{

}
