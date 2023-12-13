package com.scheduler.demo;

import jakarta.persistence.*;

@Entity
public class Time{
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private Integer time_id;
	private int userId;
	private int start;
	private int end;
	
	public Time(){
		
	}
	
	public Time(int start, int end) {
		this.start = start;
		this.end = end;
	}
	
	public Time(int time_id, int start, int end, int user_id) {
		this.time_id = time_id;
		this.start = start;
		this.end = end;
		this.userId = user_id;
	}

	public int getStart() {
		return start;
	}
	public int getEnd() {
		return end;
	}
	public int getTimeID() {
		return time_id;
	}
	public int getUserID() {
		return userId;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public void setEnd(int end) {
		this.end = end;
	}
	public void setTimeID(int time_id) {
		this.time_id = time_id;
	}
	public void setUserID(int user_id) {
		this.userId = user_id;
	}
}
