/*
 * Property of BCCSS - UIS Team
 */

package bccss.uis.CreateEntitiesTests;

import bccss.uis.entities.Course;
import bccss.uis.repositories.CourseRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * CreateCourseTest
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class CreateCourseTest {

	@Autowired
	CourseRepository courseRepository;

	@Test
	public void createCourse() {
		Course course = new Course();
		course.setDays("M W F");
		course.setName("Computer Science I");
		course.setDepartment("CSCI");
		course.setNumber("1101");
		course.setStart("9:00");
		course.setEnd("9:50");
		course.setProfessor("Professor Test");
		course.setDeleted(false);

		courseRepository.save(course);

		assert 1==1;
	}
}
