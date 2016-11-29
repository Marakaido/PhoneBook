package DAO.repositories;

import DAO.Company;
import DAO.Person;
import DAO.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author marakaido
 * @since 29.11.16
 */
public interface ReviewRepository extends JpaRepository<Review, Long>
{
    List<Review> getByTargetCompany(Company company);
    List<Review> getByAuthor(Person author);
}
