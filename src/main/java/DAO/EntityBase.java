package DAO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import javax.persistence.*;
import java.sql.Date;

/**
 * Entity that is the base for person and company entities.
 * Is referenced by email, address and phone entities.
 */
@Entity(name = "entities")
@Inheritance(strategy = InheritanceType.JOINED)
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = Person.class, name = "person"),
        @JsonSubTypes.Type(value = Company.class, name = "company") })
public class EntityBase
{
    @Id
    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "creation_date", nullable = false)
    @JsonIgnore
    private Date creationDate;

    @Column(name = "modification_date", nullable = false)
    @JsonIgnore
    private Date modificationDate;

    @Column(name = "password", nullable = false)
    @JsonIgnore
    private String password;

    public EntityBase()
    {
        creationDate = new Date(System.currentTimeMillis());
        modificationDate = creationDate;
    }
    public EntityBase(String password)
    {
        this();
        setPassword(password);
    }
    public EntityBase(String email, String password)
    {
        this(password);
        this.email = email;
    }

    public String getEmail() { return email; }

    public void setEmail(String email) { this.email = email; }

    public Date getCreationDate() { return creationDate; }

    public void setCreationDate(Date creationDate) { this.creationDate = creationDate; }

    public Date getModificationDate() { return modificationDate; }

    public void setModificationDate(Date modificationDate) { this.modificationDate = modificationDate; }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password) { this.password = password; }
}
