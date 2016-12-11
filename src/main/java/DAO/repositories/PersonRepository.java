package DAO.repositories;

import DAO.Person;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

/**
 * @author marakaido
 */
public interface PersonRepository extends JpaRepository<Person, String>
{
    List<Person> getByName(String name);

    List<Person> getBySurname(String surname);

    @Query("SELECT p FROM people p WHERE p.name LIKE CONCAT('%',:name,'%') OR p.surname LIKE CONCAT('%',:surname,'%')")
    List<Person> search(@Param("name") String name, @Param("surname") String surname);

    @Query("SELECT p FROM people p WHERE p.name LIKE CONCAT('%',:search_string,'%') OR p.surname LIKE CONCAT('%',:search_string,'%')")
    List<Person> search(@Param("search_string") String search_string);

    Person getByCreationDate(Date date);

    Person getByModificationDate(Date date);
}
