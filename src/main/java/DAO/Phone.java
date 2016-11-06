package DAO;

import javax.persistence.*;

@Entity(name = "phones")
public class Phone
{
    @Id
    @Column(name = "number", nullable = false, length = 15)
    private String number;

    @ManyToOne(optional=false)
    private EntityBase entity;

    public Phone() {}

    public Phone(String number, EntityBase entity)
    {
        setNumber(number);
        setEntity(entity);
    }

    public String getNumber()
    {
        return number;
    }

    public void setNumber(String number)
    {
        this.number = number;
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
