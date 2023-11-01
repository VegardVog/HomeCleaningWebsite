package dev.vbv.WebCleaning;

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
@RequestMapping("/api/v1/getStatistics")
public class UserStatisticsController {
  
  @Autowired
  private UserService userService;

  @PostMapping
  public ResponseEntity<Map<String, Integer>> getStatisticsFromDB(@RequestBody Map<String, String> payload) {

    System.out.println(payload);
    return new ResponseEntity<Map<String, Integer>>(userService.getStatisticsFromDB(payload.get("name")), HttpStatus.ACCEPTED);
  }
}