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
    	return Optional.ofNullable(userRep.findById(Id)
    		.orElseThrow(() -> new IllegalArgumentException("ERROR 404: User not found")));
    }
    
    @PostMapping ("/api/user")
    public @ResponseBody void add_user(@RequestBody User user) {
    	userRep.save(user);
    }
    
    @PutMapping ("/api/user/{user_id}")
    public void edit_user(@PathVariable(value = "user_id") int Id,@RequestBody User user) {
    	if (userRep.existsById(Id)) {
    		User oldUser = userRep.findById(Id).get();
    		oldUser.setName(user.getName());
    		oldUser.setAge(user.getAge());
    		oldUser.setMajor(user.getMajor());
    		userRep.save(oldUser);
    	}
    	else {
    		throw new IllegalArgumentException("ERROR 404: User not found");
    	}
    }

    @DeleteMapping ("/api/user/{user_id}")
    public void delete_user(@PathVariable(value = "user_id") int Id) {
    	if (userRep.existsById(Id)) {
    		userRep.deleteById(Id);
    	}
    	else {
    		throw new IllegalArgumentException("ERROR 404: User not found");
    	}
    }
    
    @GetMapping ("/api/user/{user_id}/availability")
    public List<Time> get_time(@PathVariable(value = "user_id")Integer Id){	
    	if(timeRep.findByUserId(Id).isEmpty()) 
    		throw new IllegalArgumentException("ERROR 404: User not found");
    		
    	return timeRep.findByUserId(Id);
    }
    
    @PostMapping ("/api/user/{user_id}/availability")
    public void add_time(@PathVariable(value = "user_id")int Id, @RequestBody Time time) {
    	time.setUserID(Id);
    	timeRep.save(time);
    }
    
    @PutMapping ("/api/user/{user_id}/availability/{availability_id}")
    public void edit_time(@PathVariable(value = "user_id")int Id, @PathVariable(value = "availability_id")int Time_Id, @RequestBody Time time) {
    	if (timeRep.existsById(Time_Id)){
    		Time oldTime = timeRep.findById(Time_Id).get();
    		oldTime.setStart(time.getStart());
    		oldTime.setEnd(time.getEnd());
    		timeRep.save(oldTime);
    	}
    	else {
    		throw new IllegalArgumentException("ERROR 404: Time not found");
    	}
    }
    
    @DeleteMapping ("/api/user/{user_id}/availability/{availability_id}")
    public void delete_time(@PathVariable(value = "user_id")int Id, @PathVariable(value = "availability_id")int Time_Id) {
    	if (timeRep.existsById(Time_Id)) {
    		timeRep.deleteById(Time_Id);
    	}
    	else {
    		throw new IllegalArgumentException("ERROR 404: Time not found");
    	}
    }
    @GetMapping ("/api/meeting")
    public Iterable<Meeting> get_meeting() {
    	return meetingRep.findAll();
    }
    
    @GetMapping ("/api/meeting/{meeting_id}")
    public Optional<Meeting> get_one_meeting(@PathVariable(value = "meeting_id")int Id) {
    	return Optional.ofNullable(meetingRep.findById(Id)
        		.orElseThrow(() -> new IllegalArgumentException("ERROR 404: User not found")));
    }
    
    @PostMapping ("/api/meeting")
    public void add_meeting(@RequestBody Meeting meeting) {
    	meetingRep.save(meeting);
    }
    
    @PutMapping ("/api/meeting/{meeting_id}")
    public void edit_meeting(@PathVariable(value = "meeting_id")int Id, @RequestBody Meeting meeting) {
    	if(meetingRep.existsById(Id)) {
    		Meeting oldMeeting = meetingRep.findById(Id).get();
    		oldMeeting.setMeetingStart(meeting.getStart());
    		oldMeeting.setMeetingEnd(meeting.getEnd());
    		meetingRep.save(oldMeeting);
    	}
    	else {
    		throw new IllegalArgumentException("ERROR 404: Meeting not found");
    	}
    }
    
    @DeleteMapping ("/api/meeting/{meeting_id}")
    public void delete_meeting(@PathVariable(value = "meeting_id")int Id) {
    	if (meetingRep.existsById(Id)) {
    		meetingRep.deleteById(Id);
    	}
    	else {
    		throw new IllegalArgumentException("ERROR 404: Meeting not found");
    	}
    }
    
    //Support up to 4 users, more could be implemented
    @GetMapping ("/api/timeslots")
    public CombinedTime get_timeslots(@RequestParam(value = "id1") int id1, @RequestParam(value = "id2", required = false) Integer id2, @RequestParam(value = "id3", required = false) Integer id3, @RequestParam(value = "id4", required = false) Integer id4) {
    	int timeSlotStart = 0;
    	int timeSlotEnd = 24;
    	
    	List<Time> meeting = new ArrayList<>();
    	if (timeRep.findByUserId(id1) != null) {
    		meeting.addAll(timeRep.findByUserId(id1));
    	}
    	if (id2 != null) {
    		if (timeRep.findByUserId(id2) != null)
    			meeting.addAll(timeRep.findByUserId(id2));
    	}
    	if (id3 != null) {
    		if (timeRep.findByUserId(id3) != null)
    			meeting.addAll(timeRep.findByUserId(id3));
    	}
    	if (id4 != null) {
    		if (timeRep.findByUserId(id4) != null)
    			meeting.addAll(timeRep.findByUserId(id4));
    	}
    	
    	for (int i = 0; i < meeting.size(); i++) {
    		if (meeting.get(i).getStart() > timeSlotStart) {
    			timeSlotStart = meeting.get(i).getStart();
    		}
    		if (meeting.get(i).getEnd() < timeSlotEnd) {
    			timeSlotEnd = meeting.get(i).getEnd();
    		}
    	}
    	
    	if (timeSlotStart > timeSlotEnd) {
    		throw new IllegalArgumentException("There are no availabilities for selected users");
    	}
    	return new CombinedTime(timeSlotStart, timeSlotEnd);
    }
}