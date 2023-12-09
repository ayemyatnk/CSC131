package com.scheduler.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.stereotype.Service;

import java.util.*;

@SpringBootApplication
@RestController
public class SchedulerApplication {
	@Autowired
	private UserRep userRep;
	@Autowired
	private TimeRep timeRep;
	@Autowired
	private MeetingRep meetingRep;
	
    public static void main(String[] args) {
      SpringApplication.run(SchedulerApplication.class, args);
    }
    
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
      return String.format("Hello %s!", name);
    }
    
    // List starts out empty
    @GetMapping("/api/user")
    public Iterable<User> get_all_user() {
    	return userRep.findAll();
    }
    
    @GetMapping ("/api/user/{user_id}")
    public Optional<User> get_one_user(@PathVariable(value = "user_id")int Id) {
    	return userRep.findById(Id);
    }
    
    @PostMapping ("/api/user")
    public @ResponseBody void add_user(@RequestBody User user) {
    	userRep.save(user);
    }
    
    @PutMapping ("/api/user/{user_id}")
    public void edit_user(@PathVariable(value = "user_id") int Id,@RequestBody User user) {
    	User oldUser = userRep.findById(Id).get();
    	oldUser.setName(user.getName());
    	oldUser.setAge(user.getAge());
    	oldUser.setMajor(user.getMajor());
    	userRep.save(oldUser);
    }

    @DeleteMapping ("/api/user/{user_id}")
    public void delete_user(@PathVariable(value = "user_id") int Id) {
    	userRep.deleteById(Id);
    }
    
    @GetMapping ("/api/user/{user_id}/availability")
    public Iterable<Time> get_time(@PathVariable(value = "user_id")Integer Id){
    	return timeRep.findByUserId(Id);
    }
    
    @PostMapping ("/api/user/{user_id}/availability")
    public void add_time(@PathVariable(value = "user_id")int Id, @RequestBody Time time) {
    	time.setUserID(Id);
    	timeRep.save(time);
    }
    
    @PutMapping ("/api/user/{user_id}/availability/{availability_id}")
    public void edit_time(@PathVariable(value = "user_id")int Id, @PathVariable(value = "availability_id")int Time_Id, @RequestBody Time time) {
    	Time oldTime = timeRep.findById(Time_Id).get();
    	oldTime.setStart(time.getStart());
    	oldTime.setEnd(time.getEnd());
    	timeRep.save(oldTime);
    }
    
    @DeleteMapping ("/api/user/{user_id}/availability/{availability_id}")
    public void delete_time(@PathVariable(value = "user_id")int Id, @PathVariable(value = "availability_id")int Time_Id) {
    	timeRep.deleteById(Time_Id);
    }
    @GetMapping ("/api/meeting")
    public List<Meeting> get_meeting() {
    	return meetingList;
    }
    
    @GetMapping ("/api/meeting/{meeting_id}")
    public Meeting get_one_meeting(@PathVariable(value = "meeting_id")int Id) {
    	return meetingList.get(Id);
    }
    
    @PostMapping ("/api/meeting")
    public void add_meeting(@RequestBody Meeting meeting) {
    	meeting.setMeetingId(meeting_id);
    	meetingList.add(meeting);
    	meeting_id++;
    }
    
    @PutMapping ("/api/meeting/{meeting_id}")
    public void edit_meeting(@PathVariable(value = "meeting_id")int Id, @RequestParam int start, @RequestParam int end) {
    	for(int i = 0; i <meetingList.size(); i++) {
    		if(meetingList.get(i).getMeetingID() == Id) {
    			meetingList.get(i).setMeetingStart(start);
				meetingList.get(i).setMeetingEnd(end);
    		}
    	}
    }
    
    @DeleteMapping ("/api/meeting/{meeting_id}")
    public void delete_meeting(@PathVariable(value = "meeting_id")int Id) {
    	for(int i = 0; i <meetingList.size(); i++) {
    		if(meetingList.get(i).getMeetingID() == Id) {
    			meetingList.remove(i);
    		}
    	}
    }
    
    //Support up to 4 users, more could be implemented
    @GetMapping ("/api/timeslots")
    public Time get_timeslots(@RequestParam int id1, @RequestParam(required = false) Integer id2, @RequestParam(required = false) Integer id3, @RequestParam(required = false) Integer id4) {
    	int timeSlotStart = 0;
    	int timeSlotEnd = 24;
    	
    	for(int i = 0; i < timeList.size(); i++) {
    		if (timeList.get(i).getUserID() == id1 || (id2 != null &&timeList.get(i).getUserID() == id2) || (id3 != null &&timeList.get(i).getUserID() == id3) || (id4 != null &&timeList.get(i).getUserID() == id4)) {
    	    	if (timeList.get(i).getStart() > timeSlotStart) {
    	    		timeSlotStart = timeList.get(i).getStart();
    	    	}
    	    	if (timeList.get(i).getEnd() < timeSlotEnd) {
    	    		timeSlotEnd = timeList.get(i).getEnd();
    	    	}
    		}
    	}
    	if (timeSlotStart > timeSlotEnd) {
    		return new Time("No Time Slot Available");
    	}
    	return new Time(timeSlotStart, timeSlotEnd);
    }
}