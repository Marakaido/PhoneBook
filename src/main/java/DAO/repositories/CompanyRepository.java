package DAO.repositories;

import DAO.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Date;
import java.util.List;

/**
 * Created by marakaido on 06.11.16.
 */
public interface CompanyRepository extends JpaRepository<Company, String>
{
    Company getByName(String name);

    List<Company> getByDescription(String description);

    List<Company> getByRating(double rating);

    Company getByCreationDate(Date date);

    Company getByModificationDate(Date date);
}
