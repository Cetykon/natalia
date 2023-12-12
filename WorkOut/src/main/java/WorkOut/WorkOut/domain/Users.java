package WorkOut.WorkOut.domain;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//this tell the jpa or more specific the persistence api that Contact class should be map to contacts table
	@Entity(name="users")
public class Users {
	
	private Long id;
	private String username;
	private String password;


	public Users() {
		
		
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	



	
	

}
