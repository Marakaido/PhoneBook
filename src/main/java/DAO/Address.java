package DAO;

import javax.persistence.*;

@Entity(name = "addresses")
public class Address
{
    @Id
    @Column(name = "address", nullable = false)
    private String address;

    @ManyToOne(optional=false)
    private EntityBase entity;

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

    public EntityBase getEntity()
    {
        return entity;
    }

    public void setEntity(EntityBase entity)
    {
        this.entity = entity;
    }
}
