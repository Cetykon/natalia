package WorkOut.WorkOut.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExercisesRepository  extends CrudRepository<Exercises, Long>{

	
}