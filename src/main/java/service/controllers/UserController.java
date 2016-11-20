package service.controllers;

import DAO.Person;
import DAO.Phone;
import DAO.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author marakaido
 * @since 20.11.16
 */
@RestController
public class UserController
{
    @Autowired
    private PersonRepository personRepository;

    @RequestMapping(path = "service/people-list")
    public List<Person> getListOfPeople(@RequestParam(value="page", defaultValue="0") int page,
                                        @RequestParam(value="count", defaultValue = "10") int count)
    {
        return personRepository.findAll(new PageRequest(page, count)).getContent();
    }

    @RequestMapping(path = "service/person/{email}/")
    public Person getPerson(@PathVariable String email)
    {
        return personRepository.getByEmail(email);
    }

    @RequestMapping(path = "service/login")
    @ResponseStatus(HttpStatus.OK)
    public Person loginEntity(@RequestParam(value="email") String email,
                              @RequestParam(value="password") String password) throws Exception
    {
        Person personData = new Person(password);
        Person person = personRepository.getByEmail(email);
        if(person == null || !person.getPassword().equals(personData.getPassword()))
        {
            throw new Exception("Authentication failed");
        }
        return person;
    }

    @RequestMapping(path = "service/register-person",
            method = RequestMethod.POST,
            consumes="application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Person registerPerson(@RequestBody Person person)
    {
        person = new Person(person.getEmail(), person.getName(), person.getSurname(), person.getPassword());
        if (personRepository.getByEmail(person.getEmail()) == null &&
                personRepository.saveAndFlush(person) != null) return person;
        else throw new IllegalArgumentException("Registration failed, user with this id already exists");
    }
}
