package com.ems.Apllication.Service;

import java.util.List;
import com.ems.Apllication.entity.Employee;

public interface EmployeeService {

    Employee addEmployee(Employee employee);
    List<Employee> getAllEmployees();
    Employee updateEmployee(int id,Employee employee);
    Employee getEmployeeById(int id);
    String deleteEmployee(int id);
}
