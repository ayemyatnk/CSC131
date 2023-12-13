package com.scheduler.demo;

import org.springframework.data.repository.CrudRepository;

import com.scheduler.demo.User;

public interface UserRep extends CrudRepository<User, Integer>{

}
