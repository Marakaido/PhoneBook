package DAO;

import javax.persistence.*;
import java.util.List;

@Entity(name = "people")
public class Person extends EntityBase
{
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    public Person() {}

    public Person(String password)
    {
        super(password);
    }

    public Person(String email, String name, String surname, String password)
    {
        super(email, password);
        this.name = name;
        this.surname = surname;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getSurname()
    {
        return surname;
    }

    public void setSurname(String surname)
    {
        this.surname = surname;
    }
}
