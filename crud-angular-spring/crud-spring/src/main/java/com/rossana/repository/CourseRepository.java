package com.rossana.repository;

import com.rossana.model.Course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // ao declarar como interface, consegue extender ela
public interface CourseRepository extends JpaRepository<Course, Long> {
    
}
