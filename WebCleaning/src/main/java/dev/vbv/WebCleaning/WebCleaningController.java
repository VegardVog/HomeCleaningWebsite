package dev.vbv.WebCleaning;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/api/v1/users")
public class WebCleaningController {

  @Autowired
  private UserService userService;

  @GetMapping
  public ResponseEntity<List<User>> getAllUsers() {
    return new ResponseEntity<List<User>>(userService.allUsers(), HttpStatus.OK);
  }


  @GetMapping("/{name}")
  public ResponseEntity<Optional<User>> getSingleUser(@PathVariable String name) {
    return new ResponseEntity<Optional<User>>(userService.getUserFromName(name), HttpStatus.OK);
  }

}
