package WorkOut.WorkOut.web;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import WorkOut.WorkOut.domain.Users;
import WorkOut.WorkOut.domain.UsersRepository;

@RestController
@RequestMapping("webapi/users")
public class UsersController {
	
	@Autowired
	private UsersRepository usersRepository;
	
	@GetMapping(path="{id}")
	public Optional<Users> getUsername(@PathVariable Long id){
		return usersRepository.findById(id);
	}

}
