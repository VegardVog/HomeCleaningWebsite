package dev.vbv.WebCleaning;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;
  @Autowired
  private MongoTemplate mongoTemplate;

  public List<User> allUsers() {

    return userRepository.findAll();
  }

  public Optional<User> getUserFromName(String name) {
    
    return userRepository.findUserByName(name);

  }

  public String createUser(String name, String password) {
    if(userRepository.findUserByName(name).isPresent()) {
      return "User already exists";
      
    }
    userRepository.insert(new User(null, name, password));

    mongoTemplate.update(User.class).matching(Criteria.where("name").is(name)).apply(new Update().set("password", password));

    return "Created";
  }

  public Boolean loginUser(String name, String password) {
    if(userRepository.findUserByName(name).isPresent()) {
      Optional<User> user = userRepository.findUserByName(name);
      User newUser= user.get();
      if(newUser.getPassword().equals(password) ) {

        return true;
      }

    }
    
    
    return false;
  } 
  
}
