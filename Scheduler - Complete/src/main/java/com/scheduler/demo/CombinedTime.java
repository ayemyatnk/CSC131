package com.scheduler.demo;

public class CombinedTime {
	private int start;
	private int end;
	
	public CombinedTime(){
		
	}
	public CombinedTime(int start, int end) {
		this.start = start;
		this.end = end;
	}
	public int getStart() {
		return start;
	}
	public int getEnd() {
		return end;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public void setEnd(int end) {
		this.end = end;
	}
}
