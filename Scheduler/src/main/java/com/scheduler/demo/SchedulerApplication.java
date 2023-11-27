package com.scheduler.demo;
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
import java.util.*;

@SpringBootApplication
@RestController
public class SchedulerApplication {
	//List is temporary, for testing purpose
	private ArrayList<User> userList = new ArrayList<User>();
	private int id = 0;
	private ArrayList<Time> timeList = new ArrayList<Time>();
	private int time_id = 0;
	private ArrayList<Meeting> meetingList = new ArrayList<Meeting>();
	private int meeting_id = 0;
	
    public static void main(String[] args) {
      SpringApplication.run(SchedulerApplication.class, args);
    }
    
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
      return String.format("Hello %s!", name);
    }
    
    // List starts out empty
    @GetMapping("/api/user")
    public List<User> get_all_user() {
    	return userList;
    }
    
    @GetMapping ("/api/user/{user_id}")
    public User get_one_user(@PathVariable(value = "user_id")int Id) {
    	return userList.get(Id);
    }
    
    @PostMapping ("/api/user")
    public void add_user(@RequestBody User user) {
    	user.setId(id);
    	userList.add(user);
    	id++;
    }
    
    @PutMapping ("/api/user/{user_id}")
    public void edit_user(@PathVariable(value = "user_id") int Id,@RequestParam (required=false) String name, @RequestParam (required=false) String major, @RequestParam (required=false) int age) {
    	for(int i = 0; i < userList.size(); i++) {
    		if (userList.get(i).getID() == Id) {
    				userList.get(i).setName(name);
    				userList.get(i).setMajor(major);
    				userList.get(i).setAge(age);
    		}
    	}
    }

    @DeleteMapping ("/api/user/{user_id}")
    public void delete_user(@PathVariable(value = "user_id") int Id) {
    	for(int i = 0; i < userList.size(); i++) {
    		if (userList.get(i).getID() == Id) {
    			userList.remove(i);
    		}
    	}
    }
    
    @GetMapping ("/api/user/{user_id}/availability")
    public List<Time> get_time(@PathVariable(value = "user_id")int Id) {
    	ArrayList<Time> tempList = new ArrayList<Time>();
    	for(int i = 0; i < timeList.size(); i++) {
    		if (timeList.get(i).getUserID() == Id) {
    	    	tempList.add(timeList.get(i));
    		}
    	}
    	return tempList;
    }
    
    @PostMapping ("/api/user/{user_id}/availability")
    public void add_time(@PathVariable(value = "user_id")int Id, @RequestBody Time time) {
    	time.setTimeID(time_id);
    	time.setUserID(Id);
    	timeList.add(time);
    	time_id++;
    }
    
    @PutMapping ("/api/user/{user_id}/availability/{availability_id}")
    public void edit_time(@PathVariable(value = "user_id")int Id, @PathVariable(value = "availability_id")int Time_Id, @RequestParam int start, @RequestParam int end) {
    	for(int i = 0; i <timeList.size(); i++) {
    		if(timeList.get(i).getTimeID() == Time_Id) {
    			timeList.get(i).setStart(start);
				timeList.get(i).setEnd(end);
    		}
    	}
    }
    
    @DeleteMapping ("/api/user/{user_id}/availability/{availability_id}")
    public void delete_time(@PathVariable(value = "user_id")int Id, @PathVariable(value = "availability_id")int Time_Id) {
    	for(int i = 0; i <timeList.size(); i++) {
    		if(timeList.get(i).getTimeID() == Time_Id) {
    			timeList.remove(i);
    		}
    	}
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