/*
 * Property of BCCSS - UIS Team
 */

package bccss.uis.repositories;

import bccss.uis.entities.Course;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * CourseRepository
 */

@Repository
public interface CourseRepository extends PagingAndSortingRepository<Course, Long> {

    List<Course> findByDepartmentAndDeleted(String department, Boolean deleted);


}
