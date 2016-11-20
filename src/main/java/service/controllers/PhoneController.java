package service.controllers;

import DAO.Person;
import DAO.Phone;
import DAO.repositories.PersonRepository;
import DAO.repositories.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author marakaido
 * @since 20.11.16
 */
@RestController
public class PhoneController
{
    @Autowired
    private PhoneRepository phoneRepository;
    @Autowired
    private PersonRepository personRepository;

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

    @RequestMapping(path = "service/phones/remove/{number}/")
    @ResponseStatus(HttpStatus.OK)
    public String removePhone(@PathVariable String number)
    {
        if(phoneRepository.exists(number))
        {
            phoneRepository.delete(number);
            return "Phone deleted successfully";
        }
        else throw new IllegalArgumentException("Phone does not exist");
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
}
