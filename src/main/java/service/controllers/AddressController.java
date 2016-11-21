package service.controllers;

import DAO.Address;
import DAO.Person;
import DAO.repositories.AddressRepository;
import DAO.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author marakaido
 * @since 21.11.16
 */
@RestController
public class AddressController
{
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private PersonRepository personRepository;

    public String add(Address address)
    {
        if (personRepository.exists(address.getEntity().getEmail()) &&
            addressRepository.getByAddress(address.getAddress()) == null &&
            addressRepository.saveAndFlush(address) != null)
        {
            return "Address successfully added";
        }
        else throw new IllegalArgumentException("Failed to add address");
    }

    public String remove(Address addressValue)
    {
        Address address = addressRepository.getByAddress(addressValue.getAddress());
        if(address != null)
        {
            addressRepository.delete(address.getId());
            return "Address deleted successfully";
        }
        else throw new IllegalArgumentException("Address does not exist");
    }

    @RequestMapping(path = "service/contact-information/address/{personId}/",
            method = RequestMethod.GET)
    public List<Address> get(@PathVariable String personId)
    {
        Person person = personRepository.getOne(personId);
        if(person != null)
        {
            List<Address> addresses = addressRepository.getByEntity(person);
            if(addresses.size() > 0)
                return addresses;
            else throw new IllegalStateException("Person has no addresses");
        }
        else throw new IllegalArgumentException("Person with this address is not registered");
    }
}
