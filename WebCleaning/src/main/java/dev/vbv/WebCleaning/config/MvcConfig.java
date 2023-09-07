package dev.vbv.WebCleaning.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

// @EnableWebMvc
// @Configuration
public class MvcConfig extends WebMvcConfigurationSupport {

    // @Override
    // public void addResourceHandlers(
    //   ResourceHandlerRegistry registry) {
 
    //     registry.addResourceHandler("/static/**")
    //       .addResourceLocations("/WEB-INF/view/react/build/static/");
    //     registry.addResourceHandler("/*.js")
    //       .addResourceLocations("/WEB-INF/view/react/build/");
    //     registry.addResourceHandler("/*.json")
    //       .addResourceLocations("/WEB-INF/view/react/build/");
    //     registry.addResourceHandler("/*.ico")
    //       .addResourceLocations("/WEB-INF/view/react/build/");
    //     registry.addResourceHandler("/HomePage.html")
    //       .addResourceLocations("/WEB-INF/view/react/build/HomePage.html");
    //     registry.addResourceHandler("/CreateUserPage.html")
    //       .addResourceLocations("/WEB-INF/view/react/build/CreateUserPage.html");
    //     registry.addResourceHandler("/LoginUserPage.html")
    //       .addResourceLocations("/WEB-INF/view/react/build/LoginUserPage.html");
    //     registry.addResourceHandler("/UsersPage.html")
    //       .addResourceLocations("/WEB-INF/view/react/build/UsersPage.html");
    // }
}