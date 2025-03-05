package com.ems.Apllication.Controller;

import com.ems.Apllication.Service.EmployeeService;
import com.ems.Apllication.entity.Employee;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/employee")
public class EmployeeController {

    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/addEmployee")
    public ResponseEntity<Employee> addUser(@RequestBody Employee employee){
        System.out.println(employee.getEmail());
        return new ResponseEntity<Employee>(employeeService.addEmployee(employee),HttpStatus.CREATED);

    }

    @GetMapping()
    public List<Employee> allEmployees(){
        List<Employee> employees = employeeService.getAllEmployees();
        return employees;
    }

    @GetMapping("{id}")
    public ResponseEntity<Employee> getEMployeeById(@PathVariable("id") int id){
        return new ResponseEntity<Employee>(employeeService.getEmployeeById(id),HttpStatus.OK);
    }

    @PutMapping("/UpdateEmployee/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") int id,@RequestBody Employee employee){
        return new ResponseEntity<Employee>(employeeService.updateEmployee(id,employee),HttpStatus.OK);
    }

    @DeleteMapping("/deleteEmployee/{id}")
    public ResponseEntity<String> deteleEmployee(@PathVariable("id") int id){
        return new ResponseEntity<String>(employeeService.deleteEmployee(id),HttpStatus.OK);
    }

}
