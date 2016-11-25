package service.controllers;

import DAO.EntityBase;
import DAO.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

/**
 * @author marakaido
 * @since 20.11.16
 */
@RestController
public class UserController
{
    @Autowired
    private UserRepository userRepository;

    @RequestMapping(path = "service/{email}/",
                    method = RequestMethod.GET)
    public EntityBase get(@PathVariable String email)
    {
        return userRepository.findOne(email);
    }

    @RequestMapping(path = "service/login",
                    method = RequestMethod.POST)
    public EntityBase login(@RequestParam(value="email") String email,
                            @RequestParam(value="password") String password)
    {
        return userRepository.authenticate(email, password);
    }

    @RequestMapping(path = "service/register",
                    method = RequestMethod.POST,
                    consumes="application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public EntityBase register(@RequestBody EntityBase entity)
    {
        Date registrationDate = new Date(System.currentTimeMillis());
        entity.setCreationDate(registrationDate);
        entity.setModificationDate(registrationDate);

        if(!userWithEmailExists(entity.getEmail()))
        {
            return userRepository.saveAndFlush(entity);
        }
        else throw new IllegalArgumentException("User with this email already exists");
    }

    public boolean userWithEmailExists(String key)
    {
        return userRepository.findOne(key) != null;
    }
}
