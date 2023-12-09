package com.scheduler.demo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import java.util.List;
import java.util.Optional;
import com.scheduler.demo.User;

public interface UserRep extends CrudRepository<User, Integer>{
    Optional<User> findById(long user_id);

}
