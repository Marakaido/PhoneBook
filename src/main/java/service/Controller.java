package service;

import java.sql.Date;
import java.util.List;

import DAO.Person;
import DAO.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller
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
        System.out.println(email);
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
                    consumes="application/json",
                    produces="text/plain")
    @ResponseStatus(HttpStatus.CREATED)
    public String registerPerson(@RequestBody Person person)
    {
        try
        {
            person = new Person(person.getEmail(), person.getName(), person.getSurname(), person.getPassword());
            personRepository.saveAndFlush(person);
            return "{message:'Person registered'}";
        }
        catch(Exception e)
        {
            return "{message:'Failed to register'}";
        }
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handleException(Exception e)
    {
        return e.getMessage();
    }
}