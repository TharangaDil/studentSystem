package com.selfcoding.studentsystem.Service;

import com.selfcoding.studentsystem.Model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
