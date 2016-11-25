package service.controllers;

import DAO.Email;
import DAO.EntityBase;
import DAO.Person;
import DAO.repositories.EmailRepository;
import DAO.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    private UserRepository userRepository;
    @Autowired
    private UserController userController;

    public String add(Email email)
    {
        if (userController.userWithEmailExists(email.getEntity().getEmail()) &&
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

    @RequestMapping(path = "service/contact-information/email/{email}/",
            method = RequestMethod.GET)
    public List<Email> get(@PathVariable String email)
    {
        EntityBase entity = userRepository.findOne(email);
        if(entity != null)
        {
            List<Email> emails = emailRepository.getByEntity(entity);
            if(emails.size() > 0)
                return emails;
            else throw new IllegalStateException("Person has no emails");
        }
        else throw new IllegalArgumentException("Person with this email is not registered");
    }
}
