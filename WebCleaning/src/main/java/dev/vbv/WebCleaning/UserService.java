package dev.vbv.WebCleaning;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
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
    userRepository.insert(new User(null, name, password, new HashMap<String,Integer>()));

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
  
  public Boolean myPageSubmit(Object dict) throws IllegalStateException {

  
    Map<String, String> map = ((Map<String, String>)dict);
    String name = map.get("name");
    map.remove("name");


    Query query = new Query(Criteria.where("name").is(name));
    Map<String,Integer> oldMap = mongoTemplate.find(query, User.class).get(0).getStatistics();
  
      for (Map.Entry<String, String> entry : map.entrySet()) {
        oldMap.putIfAbsent(entry.getKey(), 0);

        if(entry.getValue().equals("true")) {
            oldMap.put(entry.getKey(), oldMap.get(entry.getKey())+1);
            System.out.println(oldMap.get(entry.getKey()));
          
        }

        
    }

    mongoTemplate.updateFirst(query, new Update().set("statistics", oldMap), User.class);
    return true;
  }


  public Map<String, Integer> getStatisticsFromDB(String name) {

    Query query = new Query(Criteria.where("name").is(name));
    Map<String,Integer> oldMap = mongoTemplate.find(query, User.class).get(0).getStatistics();
    System.out.println(oldMap);
    return oldMap;
  }



}
