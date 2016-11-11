package service;

import java.util.List;

import DAO.Person;
import DAO.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller
{
    @Autowired
    private PersonRepository personRepository;

    @RequestMapping(path = "service/people-list")
    public List<Person> peopleList(@RequestParam(value="page", defaultValue="0") int page,
                                   @RequestParam(value="count", defaultValue = "10") int count)
    {
        return personRepository.findAll(new PageRequest(page, count)).getContent();
    }
}