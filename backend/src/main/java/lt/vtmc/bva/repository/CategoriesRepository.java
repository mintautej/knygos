package lt.vtmc.bva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import lt.vtmc.bva.model.Category;

public interface CategoriesRepository extends JpaRepository<Category, Long> {

}
