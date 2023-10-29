package com.scheduler.demo;

public class Time{
	private int start;
	private int end;
	private int time_id;
	private int user_id;
	
	public Time(){
		
	}
	
	public Time(int start, int end, int time_id, int user_id) {
		this.start = start;
		this.end = end;
		this.time_id = time_id;
		this.user_id = user_id;
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
		return user_id;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public void setEnd(int end) {
		this.end = end;
	}
	/* Might not be necessary
	public void setTimeID(int time_id) {
		this.time_id = time_id;
	}
	*/
}
