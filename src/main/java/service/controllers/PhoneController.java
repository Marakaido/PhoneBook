package service.controllers;

import DAO.EntityBase;
import DAO.Person;
import DAO.Phone;
import DAO.repositories.PersonRepository;
import DAO.repositories.PhoneRepository;
import DAO.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
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
    private UserRepository userRepository;

    @Autowired
    private UserController userController;

    public String add(Phone phone)
    {
        if (phoneRepository.getByNumber(phone.getNumber()) == null &&
            phoneRepository.saveAndFlush(phone) != null)
        {
            EntityBase entity = userRepository.findOne(phone.getEntity().getEmail());
            entity.setModificationDate(new Date(System.currentTimeMillis()));
            userRepository.saveAndFlush(entity);
            return "Phone successfully added";
        }
        else throw new IllegalArgumentException("Failed to add phone");
    }

    public String remove(Phone phoneValue)
    {
        Phone phone = phoneRepository.getByNumber(phoneValue.getNumber());
        if(phone != null)
        {
            phoneRepository.delete(phone);
            return "Phone deleted successfully";
        }
        else throw new IllegalArgumentException("Phone does not exist");
    }

    @RequestMapping(path = "service/contact-information/phone/{email}/",
            method = RequestMethod.GET)
    public List<Phone> get(@PathVariable String email)
    {
        EntityBase entity = userRepository.findOne(email);
        if(entity != null)
        {
            List<Phone> phones = phoneRepository.getByEntity(entity);
            if(phones.size() > 0)
                return phones;
            else throw new IllegalStateException("Person has no phones");
        }
        else throw new IllegalArgumentException("Person with this email is not registered");
    }
}
