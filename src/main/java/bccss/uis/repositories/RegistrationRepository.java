/*
 * Property of BCCSS - UIS Team
 */

package bccss.uis.repositories;

import bccss.uis.entities.Registration;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

/**
 * RegistrationRepository
 */

@Repository
public interface RegistrationRepository extends PagingAndSortingRepository<Registration, Long> {


}
