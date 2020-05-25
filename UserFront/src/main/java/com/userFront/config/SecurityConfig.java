package com.userFront.config;

import java.security.SecureRandom;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.savedrequest.NullRequestCache;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.userFront.service.UserServiceImpl.UserSecurityService;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private Environment env;

    @Autowired
    private UserSecurityService userSecurityService;


    private static final String SALT = "salt"; // Salt should be protected carefully

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12, new SecureRandom(SALT.getBytes()));
    }

    private static final String[] PUBLIC_MATCHERS = {
            "/webjars/**",
            "/css/**",
            "/js/**",
            "/images/**",
            "/",
            "/about/**",
            "/contact/**",
            "/error/**/*",
            "/console/**",
            "/signup",
            "/api/**"
    };

    @Override
    protected void configure(HttpSecurity http) throws Exception {
       http.csrf().disable().cors().disable().formLogin().successForwardUrl("/userFront")
               .failureForwardUrl("/index?error").loginPage("/index")

               .and()
                .authorizeRequests().
                //antMatchers("/**").
                antMatchers(PUBLIC_MATCHERS).
                permitAll()
               .antMatchers(HttpMethod.OPTIONS, "/**")
                .permitAll()
               .antMatchers("/**")
               .permitAll().
                 anyRequest()
               .authenticated();


/*
        httpSecurity.csrf().disable()
                // dont authenticate this particular request
                .authorizeRequests().antMatchers(FrontAPI.USER.AUTHENTICATE,FrontAPI.WEBSOCKET_SERVER_RECEIVER,FrontAPI.SOCKET).permitAll().antMatchers(HttpMethod.OPTIONS, "/**")
                .permitAll()
                .antMatchers("/stomp").permitAll().
                // all other requests need to be authenticated
                        anyRequest().authenticated().and()
                // make sure we use stateless session; session won't be used to
                // store user's state.
                .requestCache().requestCache(new NullRequestCache()).and()*/
    }



    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
 	   auth.inMemoryAuthentication().withUser("admin").password("123456").roles("Admin");
        auth.inMemoryAuthentication().withUser("hassan").password("123456").roles("USER");//This is in-memory authentication
        auth.userDetailsService(userSecurityService).passwordEncoder(passwordEncoder());
    }


}
