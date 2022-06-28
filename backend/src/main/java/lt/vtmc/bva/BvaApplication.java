package lt.vtmc.bva;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import lt.vtmc.bva.models_auth.ERole;
import lt.vtmc.bva.models_auth.Role;
import lt.vtmc.bva.repositories_auth.RoleRepository;

@SpringBootApplication
public class BvaApplication {

	public static void main(String[] args) {
		SpringApplication.run(BvaApplication.class, args);
	}

	@Bean
	public CommandLineRunner initialData(RoleRepository roleRepo) {
		return args -> {
			if (roleRepo.findByName(ERole.ROLE_USER).isEmpty()) {
				roleRepo.save(new Role(ERole.ROLE_USER));
			}
			if (roleRepo.findByName(ERole.ROLE_ADMIN).isEmpty()) {
				roleRepo.save(new Role(ERole.ROLE_ADMIN));
			}
		};
	}

}
