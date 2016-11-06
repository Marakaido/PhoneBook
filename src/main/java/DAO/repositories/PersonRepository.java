package DAO.repositories;

import DAO.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;
import java.util.List;

/**
 * Created by marakaido on 06.11.16.
 */
public interface PersonRepository extends JpaRepository<Person, Long>
{
    List<Person> getByName(String name);

    List<Person> getBySurname(String surname);

    Person getByCreationDate(Date date);

    Person getByModificationDate(Date date);
}
