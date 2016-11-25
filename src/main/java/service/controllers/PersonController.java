package service.controllers;

import DAO.Person;
import DAO.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author marakaido
 * @since 25.11.16
 */
@RestController
public class PersonController
{
    @Autowired
    private PersonRepository personRepository;

    @RequestMapping(path = "service/people",
            method = RequestMethod.GET)
    public List<Person> get(@RequestParam(value="page", defaultValue="0") int page,
                            @RequestParam(value="count", defaultValue = "10") int count)
    {
        return personRepository.findAll(new PageRequest(page, count)).getContent();
    }
}
