package service;

import java.util.concurrent.atomic.AtomicLong;

import DAO.Email;
import DAO.Person;
import DAO.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller
{
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();
    @Autowired
    private PersonRepository repository;

    @RequestMapping("/greeting")
    public Email greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Email("test@gmail.com", repository.getByName("Yaroslav").get(0));
    }
}