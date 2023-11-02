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
@RequestMapping("/api/v1/getLeaderboard")
public class LeaderboardController {
  
  @Autowired
  private UserService userService;

  @GetMapping
  public ResponseEntity<List<User>> getLeaderboard() {

    return new ResponseEntity<List<User>>(userService.allUsers(), HttpStatus.OK);
  }
}