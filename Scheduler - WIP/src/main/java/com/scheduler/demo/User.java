package com.scheduler.demo;

import jakarta.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private int user_id;
	private String Name;
	private String Major;
	private int Age;
	
	public User() {
		
	}
	public User(String Name, String Major, int Age) {
		this.Name = Name;
		this.Major = Major;
		this.Age = Age;
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
	public void setName(String Name) {
		this.Name = Name;
	}
	public void setMajor(String Major) {
		this.Major = Major;
	}
	public void setAge(int Age) {
		this.Age = Age;
	}
	public void setId(int user_id) {
		this.user_id = user_id;
	}
}