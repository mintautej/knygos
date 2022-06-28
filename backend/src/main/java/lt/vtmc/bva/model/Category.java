package lt.vtmc.bva.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Category {

	@Id
	@GeneratedValue
	private Long id;
	private String category_name;

	private Category(String category_name) {
		this.category_name = category_name;
	}	
}
