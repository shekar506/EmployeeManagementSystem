package com.ems.Apllication.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="Employee")
@Data
public class Employee {

    @Id
    @Column(name="EmployeeId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name="mobileNumber")
    private long mobileNumber;
    @Column(name="location")
    private String location;

    public Employee() {
        super();
    }

    public Employee(int id, String name, String email, String location, long mobileNumber) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.location = location;
        this.mobileNumber = mobileNumber;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(long mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
