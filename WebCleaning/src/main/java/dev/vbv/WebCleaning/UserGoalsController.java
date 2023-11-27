package dev.vbv.WebCleaning;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/goalsFromDB")
public class UserGoalsController {
  
  @Autowired
  private UserService userService;

  @PostMapping("/getGoals")
  public ResponseEntity<List<String>> getGoalsFromDB(@RequestBody Map<String, String> payload) {
    return new ResponseEntity<List<String>>(userService.getGoalsFromDB(payload.get("name")), HttpStatus.ACCEPTED);
  }

  @PostMapping("/postGoals")
  public ResponseEntity<Boolean> postGoalsFromDB(@RequestBody List<String> payload) {
    return new ResponseEntity<Boolean>(userService.postGoalsToDB(payload.get(0), payload.subList(1, payload.size())), HttpStatus.ACCEPTED);
  } 

  
}

