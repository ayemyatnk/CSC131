package com.scheduler.demo;
import java.util.ArrayList;

public class User {
	private String Name;
	private String Major;
	private int Age;
	private int user_id;
	
	public User() {
		
	}
	public User(String Name, String Major, int Age, int ID) {
		this.Name = Name;
		this.Major = Major;
		this.Age = Age;
		this.user_id = ID;
	}
	
	public String getName() {
		return Name;
	}
	public String getMajor() {
		return Major;
	}
	public int getAge() {
		return Age;
	}
	public int getID() {
		return user_id;
	}

}