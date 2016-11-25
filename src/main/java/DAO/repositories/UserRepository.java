package DAO.repositories;

import DAO.Company;
import DAO.EntityBase;
import DAO.Person;
import org.hibernate.UnknownEntityTypeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

/**
 * @author marakaido
 * @since 25.11.16
 */
public class UserRepository
{
    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private CompanyRepository companyRepository;

    public EntityBase findOne(String email)
    {
        EntityBase entity = personRepository.findOne(email);
        if(entity == null) entity = companyRepository.findOne(email);

        if(entity == null) entity = null;
        return entity;
    }

    public EntityBase saveAndFlush(EntityBase entity)
    {
        if(entity instanceof Person)
            return personRepository.saveAndFlush((Person) entity);
        else if(entity instanceof Company)
            return companyRepository.saveAndFlush((Company) entity);
        else throw new UnknownEntityTypeException("Can't save entity with unknown type");
    }

    public EntityBase authenticate(String email, String password)
    {
        EntityBase entity = personRepository.findOne(email);
        if(entity == null) companyRepository.findOne(email);

        if(entity != null && entity.getPassword().equals(password)) return entity;
        else throw new IllegalArgumentException("Failed to authenticate");
    }
}
