package DAO;

import javax.persistence.*;

@Entity(name = "emails")
public class Email
{
    @Id
    @Column(name = "email", nullable = false)
    private String email;

    @ManyToOne(optional=false)
    private EntityBase entity;

    public Email() {}

    public Email(String email, EntityBase entity)
    {
        setEmail(email);
        setEntity(entity);
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
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
