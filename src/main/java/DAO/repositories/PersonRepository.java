package DAO.repositories;

import DAO.Person;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.List;

/**
 * @author marakaido
 */
public interface PersonRepository extends JpaRepository<Person, String>
{
    List<Person> getByName(String name);

    List<Person> getBySurname(String surname);

    Person getByEmail(String email);

    Person getByCreationDate(Date date);

    Person getByModificationDate(Date date);
}
