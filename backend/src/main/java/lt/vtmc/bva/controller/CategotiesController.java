package lt.vtmc.bva.controller;

import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lt.vtmc.bva.model.Category;
import lt.vtmc.bva.repository.CategoriesRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/caegories")
public class CategotiesController {


	@Autowired
	public CategoriesRepository categoriesRepo;

	@GetMapping
	public List<Category> getCategories() {
		return categoriesRepo.findAll();

	}

	@GetMapping("/{id}")
	public Category getCategories(@PathVariable Long id) {
		return categoriesRepo.findById(id).get();
	}
	
//	admin
//	@PostMapping
//	public Categories postCategories(@RequestBody Categories category) {
//		return categoriesRepo.save(category);
//	}
	
//	admin
//	@DeleteMapping("/{id}")
//	@RequestMapping
//	public void deleteCategories(@PathVariable Long id) {
//		categoriesRepo.deleteById(id);
//	}
	
//	ResponseEntity
	@PutMapping("/{id}")
	public ResponseEntity<Category> updateCategory(@PathVariable Long id, @Valid @RequestBody Category categoryDetails) {
		Category category = categoriesRepo.findById(id).orElseThrow();
		
		category.setCategory_name(categoryDetails.getCategory_name());
		final Category updatedCategory = categoriesRepo.save(category);
        return ResponseEntity.ok(updatedCategory);
	}

}
