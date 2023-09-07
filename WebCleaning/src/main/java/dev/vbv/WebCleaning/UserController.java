package dev.vbv.WebCleaning;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/createuser")
public class UserController {
  
  @Autowired
  private UserService userService;

  @PostMapping
  public ResponseEntity<String> createUser(@RequestBody Map<String, String> payload) {
    // return new ResponseEntity<User>(userService.createUser(payload.get("name"), payload.get("password")), HttpStatus.CREATED);
    return new ResponseEntity<String>(userService.createUser(payload.get("name"), payload.get("password")), HttpStatus.CREATED);
  }
}


