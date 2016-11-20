package DAO;

import javax.persistence.*;

@Entity(name = "addresses")
public class Address extends ContactInformation
{
    @Column(name = "address", nullable = false, unique = true)
    private String address;

    public Address() {}

    public Address(String address, EntityBase entity)
    {
        setAddress(address);
        setEntity(entity);
    }

    public String getAddress()
    {
        return address;
    }

    public void setAddress(String address)
    {
        this.address = address;
    }
}
