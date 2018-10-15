/*
 * Property of BCCSS - UIS Team
 */

package bccss.uis.repositories;

import bccss.uis.entities.Course;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 * CourseRepository
 */

@Repository
public interface CourseRepository extends PagingAndSortingRepository<Course, Long> {


}
