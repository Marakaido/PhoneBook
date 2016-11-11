package DAO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Date;

@Entity(name = "entities")
@Inheritance(strategy = InheritanceType.JOINED)
public class EntityBase
{
    @Id
    @Email
    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "creation_date", nullable = false)
    private Date creationDate;

    @Column(name = "modification_date", nullable = false)
    private Date modificationDate;

    @JsonIgnore
    @Column(name = "password", nullable = false)
    private String password;

    public EntityBase()
    {
        creationDate = new Date(System.currentTimeMillis());
        modificationDate = creationDate;
    }
    public EntityBase(String password)
    {
        this();
        this.password = password;
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

    public void setPassword(String password) throws NoSuchAlgorithmException
    {
        byte[] hash = MessageDigest.getInstance("SHA-256").digest(password.getBytes(StandardCharsets.UTF_8));
        this.password = new String(hash);
    }
}
