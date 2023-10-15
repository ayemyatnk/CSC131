package com.scheduler.demo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@SpringBootApplication
@RestController
public class SchedulerApplication {
	//List is temporary, for testing purpose
	ArrayList<User> userList = new ArrayList<User>();
	User user1 = new User("Test0", "Test0", 0, 0);
	User user2 = new User("Test1", "Test1", 1, 1);
	
    public static void main(String[] args) {
      SpringApplication.run(SchedulerApplication.class, args);
    }
    
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
      return String.format("Hello %s!", name);
    }
    
    @GetMapping("/api/user")
    public List<User> get_all_user() {
    	//Temporary, for testing purpose
    	userList.add(user1);
    	userList.add(user2);
    	//
    	return userList;
    }
    
    @GetMapping ("/api/user/{user_id}")
    public User get_one_user(@PathVariable int user_id) {
    	//Must run previous "method" first
    	return userList.get(user_id);
    }
    
    /*  To be implemented 
    @PostMapping ("/api/user")
    
    @PutMapping ("/api/user/{user_id}")
    
    @DeleteMapping ("/api/user/{user_id}")
	*/
}