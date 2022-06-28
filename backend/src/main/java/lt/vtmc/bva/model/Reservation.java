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
public class Reservation {

		@Id
		@GeneratedValue
		private Long id;
		private LocalDate reservation_date;

		private Reservation(LocalDate reservation_date) {
			this.reservation_date = reservation_date;
		}	
}
