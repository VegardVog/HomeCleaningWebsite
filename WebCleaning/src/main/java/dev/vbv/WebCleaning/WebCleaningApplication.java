package dev.vbv.WebCleaning;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


/*If error mongodb localhost 27017, adding runinng and removing exclude = {MongoAutoConfiguration.class, MongoDataAutoConfiguration.class} worked */
@SpringBootApplication()
public class WebCleaningApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebCleaningApplication.class, args);
	}

    
	
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:3000");

            }
        };

	
    }
}
