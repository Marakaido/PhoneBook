package DAO.repositories;

import DAO.EntityBase;
import DAO.Phone;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.Entity;
import java.sql.Date;
import java.util.List;

/**
 * @author marakaido
 */
public interface PhoneRepository extends JpaRepository<Phone, String>
{
    List<Phone> getByEntity(EntityBase entity);
}
