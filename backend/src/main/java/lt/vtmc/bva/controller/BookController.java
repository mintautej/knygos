package lt.vtmc.bva.controller;
import java.time.LocalDate;
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
import lt.vtmc.bva.model.Book;
import lt.vtmc.bva.repository.BookRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/books")
public class BookController {

	@Autowired
	public BookRepository bookRepo;

	@GetMapping
	public List<Book> getBooks() {
		return bookRepo.findAll();

	}

	@GetMapping("/{id}")
	public Book getBook(@PathVariable Long id) {
		return bookRepo.findById(id).get();
	}

	@PostMapping
	public Book postBooks(@RequestBody Book book) {
		System.out.println("POST");
		return bookRepo.save(book);
	}

	@DeleteMapping("/{id}")
	public void deleteBooks(@PathVariable Long id) {
		bookRepo.deleteById(id);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Book> updateBooks(@PathVariable Long id, @Valid @RequestBody Book bookDetails) {
		Book book = bookRepo.findById(id).orElseThrow();
		book.setBook_name(bookDetails.getBook_name());
		book.setBook_description(bookDetails.getBook_description());
		book.setIsbn_number(bookDetails.getIsbn_number());
		book.setPages(bookDetails.getPages());
		book.setReservation_date(bookDetails.getReservation_date());
		final Book updatedBooks = bookRepo.save(book);
        return ResponseEntity.ok(updatedBooks);
        
	}
}
