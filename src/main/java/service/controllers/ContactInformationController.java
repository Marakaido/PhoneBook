package service.controllers;

import DAO.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author marakaido
 * @since 20.11.16
 */
@RestController
public class ContactInformationController
{
    private static final String MAPPING_URL = "service/contact-information";

    @Autowired
    private PhoneController phoneController;
    @Autowired
    private EmailController emailController;
    @Autowired
    private AddressController addressController;

    @RequestMapping(path = MAPPING_URL,
            method = RequestMethod.POST,
            consumes="application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public String add(@RequestBody ContactInformation contactInformation)
    {
        String result = null;
        if(contactInformation instanceof Phone)
            result = phoneController.add((Phone) contactInformation);
        else if(contactInformation instanceof Email)
            result = emailController.add((Email) contactInformation);
        else if(contactInformation instanceof Address)
            result = addressController.add((Address) contactInformation);

        return result;
    }

    @RequestMapping(path = MAPPING_URL,
            method = RequestMethod.DELETE,
            consumes="application/json")
    public String remove(@RequestBody ContactInformation contactInformation)
    {
        String result = null;
        if(contactInformation instanceof Phone)
            result = phoneController.remove((Phone) contactInformation);
        else if(contactInformation instanceof Email)
            result = emailController.remove((Email) contactInformation);
        else if(contactInformation instanceof Address)
            result = addressController.remove((Address) contactInformation);

        return result;
    }
}
