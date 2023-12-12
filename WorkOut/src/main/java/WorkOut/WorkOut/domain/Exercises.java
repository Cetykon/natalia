package WorkOut.WorkOut.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//this tell the jpa or more specific the persistence api that Contact class should be map to contacts table
	@Entity(name="exercises")
public class Exercises {
	
	private Long id;
	private String workout;
	private String reps;
	private String sets;
	private String weight;
	private String lastupdate;
	private String setday;
	
	public Exercises() {
		
		
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getWorkout() {
		return workout;
	}

	public void setWorkout(String workout) {
		this.workout = workout;
	}

	public String getReps() {
		return reps;
	}

	public void setReps(String reps) {
		this.reps = reps;
	}

	public String getSets() {
		return sets;
	}

	public void setSets(String sets) {
		this.sets = sets;
	}

	public String getWeight() {
		return weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}



	public String getSetday() {
		return setday;
	}

	public void setSetday(String setday) {
		this.setday = setday;
	}

	public String getLastupdate() {
		return lastupdate;
	}

	public void setLastupdate(String lastupdate) {
		this.lastupdate = lastupdate;
	}




	
	

}
