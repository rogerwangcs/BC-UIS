/*
 * Property of 2150 Room 201
 * 2018
 */

package bccss.uis.controllers;

import bccss.uis.entities.Course;
import bccss.uis.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

/**
 * GetCoursesController
 */

@Controller
public class GetCoursesController {

    @Autowired
    CourseRepository courseRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/course-info", method = RequestMethod.GET)
    public ResponseEntity<List<Course>> getParticipantInfo(@RequestParam String department) {
        List<Course> courses = this.courseRepository.findByDepartmentAndDeleted(department, false);
        return ResponseEntity.ok(courses);
    }
}
