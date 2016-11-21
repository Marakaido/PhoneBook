package service.controllers;

import DAO.Address;
import DAO.Person;
import DAO.repositories.AddressRepository;
import DAO.repositories.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    @RequestMapping(path = "service/add-address",
            method = RequestMethod.POST,
            consumes="application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public String add(@RequestBody Address address)
    {
        if (personRepository.exists(address.getEntity().getEmail()) &&
            addressRepository.getByAddress(address.getAddress()) == null &&
            addressRepository.saveAndFlush(address) != null)
        {
            return "Address successfully added";
        }
        else throw new IllegalArgumentException("Failed to add address");
    }

    @RequestMapping(path = "service/addresses/remove/{addressValue}/")
    @ResponseStatus(HttpStatus.OK)
    public String remove(@PathVariable String addressValue)
    {
        Address address = addressRepository.getByAddress(addressValue);
        if(address != null)
        {
            addressRepository.delete(address);
            return "Address deleted successfully";
        }
        else throw new IllegalArgumentException("Address does not exist");
    }

    @RequestMapping(path = "service/addresses/{addressValue}/")
    public List<Address> getAddresses(@PathVariable String addressValue)
    {
        Person person = personRepository.getOne(addressValue);
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
