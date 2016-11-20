package DAO.repositories;

import DAO.Email;
import DAO.EntityBase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author marakaido
 * @since 20.11.16
 */
public interface EmailRepository extends JpaRepository<Email, Long>
{
    List<Email> getByEntity(EntityBase entity);

    Email getByEmail(String email);
}
