package service;

import java.sql.Date;
import java.util.List;

import DAO.Person;
import DAO.Phone;
import DAO.repositories.PersonRepository;
import DAO.repositories.PhoneRepository;
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
    @Autowired
    private PhoneRepository phoneRepository;

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

    @RequestMapping(path = "service/phones/{email}/")
    public List<Phone> getPhones(@PathVariable String email)
    {
        Person person = personRepository.getOne(email);
        if(person != null)
        {
            List<Phone> phones = phoneRepository.getByEntity(person);
            if(phones.size() > 0)
                return phones;
            else throw new IllegalStateException("Person has no phones");
        }
        else throw new IllegalArgumentException("Person with this email is not registered");
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

    @RequestMapping(path = "service/add-phone",
            method = RequestMethod.POST,
            consumes="application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public String addPhone(@RequestBody Phone phone)
    {
        if(personRepository.exists(phone.getEntity().getEmail()) &&
            !phoneRepository.exists(phone.getNumber()) &&
            phoneRepository.saveAndFlush(phone) != null)
        {
            return "Phone successfully added";
        }
        else throw new IllegalArgumentException("Failed to add phone");
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handleException(Exception e)
    {
        return e.getMessage();
    }
}