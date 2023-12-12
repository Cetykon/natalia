package WorkOut.WorkOut.web;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WorkOut.WorkOut.domain.Exercises;
import WorkOut.WorkOut.domain.ExercisesRepository;


@RestController
@RequestMapping("webapi/exercises")
public class ExercisesController {

	@Autowired
	private ExercisesRepository exercisesRepository;
	
	@GetMapping
	public Iterable<Exercises> getExercises(){
		return exercisesRepository.findAll();
	}
	
	@GetMapping(path="{id}")
	public Optional<Exercises> getExercise(@PathVariable Long id){
		return exercisesRepository.findById(id);
	}
	
	@PostMapping
	public Exercises createExercises(@RequestBody Exercises exercisesDetails) {
		return exercisesRepository.save(exercisesDetails);
		
	}
	
	@PutMapping(path="{id}")
	public Exercises updateContact(@PathVariable Long id, @RequestBody Exercises exercisesDetails) {
		return exercisesRepository.save(exercisesDetails);
	}
	
	@DeleteMapping(path="{id}")
	public void deleteContract(@PathVariable Long id) {
		exercisesRepository.deleteById(id);
	}
}
