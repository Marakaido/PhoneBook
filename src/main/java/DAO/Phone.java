package DAO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;

import javax.persistence.*;

@Entity(name = "phones")
public class Phone extends ContactInformation
{
    @Column(name = "number", nullable = false, unique = true, length = 15)
    private String number;

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
}
