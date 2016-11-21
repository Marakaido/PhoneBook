package service.controllers;

import DAO.Email;
import DAO.Person;
import DAO.Phone;
import DAO.repositories.EmailRepository;
import DAO.repositories.PersonRepository;
import DAO.repositories.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author marakaido
 * @since 21.11.16
 */
@RestController
public class EmailController
{
    @Autowired
    private EmailRepository emailRepository;
    @Autowired
    private PersonRepository personRepository;

    public String add(Email email)
    {
        if (personRepository.exists(email.getEntity().getEmail()) &&
            emailRepository.getByEmail(email.getEmail()) == null &&
            emailRepository.saveAndFlush(email) != null)
        {
            return "Email successfully added";
        }
        else throw new IllegalArgumentException("Failed to add email");
    }

    public String remove(Email emailValue)
    {
        Email email = emailRepository.getByEmail(emailValue.getEmail());
        if(email != null)
        {
            emailRepository.delete(email);
            return "Email deleted successfully";
        }
        else throw new IllegalArgumentException("Email does not exist");
    }

    @RequestMapping(path = "service/contact-information/email/{personId}/",
            method = RequestMethod.GET)
    public List<Email> get(@PathVariable String personId)
    {
        Person person = personRepository.getOne(personId);
        if(person != null)
        {
            List<Email> emails = emailRepository.getByEntity(person);
            if(emails.size() > 0)
                return emails;
            else throw new IllegalStateException("Person has no emails");
        }
        else throw new IllegalArgumentException("Person with this email is not registered");
    }
}
