package lt.vtmc.bva.model;
import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Book {

	@Id
	@GeneratedValue
	private Long id;
	private String book_name;
	private String book_description;
	private String isbn_number;
	private Long pages;
	private LocalDate reservation_date;

	private Book(String book_name, String book_description, String isbn_number, Long pages, LocalDate reservation_date) {
		this.book_name = book_name;
		this.book_description = book_description;
		this.isbn_number = isbn_number;
		this.pages = pages;
		this.reservation_date = reservation_date;
	}

	
}
