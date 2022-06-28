package lt.vtmc.bva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import lt.vtmc.bva.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
