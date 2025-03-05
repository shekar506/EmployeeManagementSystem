package com.ems.Apllication.Service.Impl;

import com.ems.Apllication.Repository.EmployeeRepository;
import com.ems.Apllication.Service.EmployeeService;

import com.ems.Apllication.entity.Employee;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @Override
    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<Employee> empList=employeeRepository.findAll();
        return empList;
    }

    @Override
    public Employee updateEmployee(int id, Employee employee) {
        Employee existingEmployee=employeeRepository.findById(id).get();
        existingEmployee.setEmail(employee.getEmail());
        existingEmployee.setLocation(employee.getLocation());
        existingEmployee.setName(employee.getName());
        existingEmployee.setMobileNumber(employee.getMobileNumber());
        Employee employee1= employeeRepository.save(existingEmployee);
        return employee1;
    }

    @Override
    public Employee getEmployeeById(int id) {
        return employeeRepository.findById(id).get();
    }

    @Override
    public String deleteEmployee(int id) {
        employeeRepository.deleteById(id);
        return "Successfully deleted user with id"+id;
    }
}
