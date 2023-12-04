package com.scheduler.demo;

import java.util.ArrayList;

public class Meeting {
	private int meeting_id;
	private int start;
	private int end;
	private ArrayList<Integer> participant = new ArrayList<Integer>();
	
	public Meeting(){
		
	}
	
	public Meeting(int start, int end, int meeting_id, ArrayList<Integer> participant) {
		this.start = start;
		this.end = end;
		this.meeting_id = meeting_id;
		this.participant = participant;
	}
	
	public int getStart() {
		return start;
	}
	public int getEnd() {
		return end;
	}
	public int getMeetingID() {
		return meeting_id;
	}
	public ArrayList<Integer> getParticipant() {
		return participant;
	}
	public void setMeetingStart(int start) {
		this.start = start;
	}
	public void setMeetingEnd(int end) {
		this.end = end;
	}
	public void setMeetingId(int meeting_id) {
		this.meeting_id = meeting_id;
	}
}
