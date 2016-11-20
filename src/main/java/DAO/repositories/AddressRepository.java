package DAO.repositories;

import DAO.Address;
import DAO.EntityBase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @author marakaido
 * @since 20.11.16
 */
public interface AddressRepository extends JpaRepository<Address, Long>
{
    List<Address> getByEntity(EntityBase entity);

    Address getByAddress(String address);
}
