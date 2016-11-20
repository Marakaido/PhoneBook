package DAO;

import javax.persistence.*;

@Entity(name = "emails")
public class Email extends ContactInformation
{
    @Column(name = "email", nullable = false, unique = true)
    private String email;

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
}
