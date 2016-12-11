package DAO.repositories;

import DAO.Company;
import DAO.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

/**
 * Created by marakaido on 06.11.16.
 */
public interface CompanyRepository extends JpaRepository<Company, String>
{
    Company getByName(String name);

    List<Company> getByDescription(String description);

    @Query("SELECT p FROM companies p WHERE p.name LIKE CONCAT('%',:search_string,'%')")
    List<Company> search(@Param("search_string") String search_string);

    List<Company> getByRating(double rating);

    Company getByCreationDate(Date date);

    Company getByModificationDate(Date date);
}
