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
@RequestMapping("/api/v1/myPageSubmit")
public class UserProfileController {
  
  @Autowired
  private UserService userService;

  @PostMapping
  public ResponseEntity<Boolean> myPageSubmit(@RequestBody Map<String, String> payload) {
    return new ResponseEntity<Boolean>(userService.myPageSubmit(payload), HttpStatus.ACCEPTED);
  }


}
