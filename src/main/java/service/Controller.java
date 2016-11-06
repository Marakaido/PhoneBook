package service;

import java.util.concurrent.atomic.AtomicLong;

import DAO.Email;
import DAO.Person;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller
{
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Email greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Email("test@gmail.com", new Person(name, "surname", "password"));
    }
}