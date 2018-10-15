/*
 * Property of BCCSS - UIS Team
 */

package bccss.uis.CreateEntitiesTests;

import bccss.uis.entities.Registration;
import bccss.uis.repositories.RegistrationRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * CreateRegistrationTest
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class CreateRegistrationTest {

	@Autowired
	RegistrationRepository registrationRepository;

	@Test
	public void createRegistration() {
		Registration registration = new Registration();
		registration.setCourseId(1L);
		registration.setEagleId("Test Eagle Id");
		registration.setDeleted(false);

		registrationRepository.save(registration);

		assert 1==1;
	}
}
