package DAO;

import javax.persistence.*;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.Date;
import java.util.Base64;

@Entity(name = "entities")
@Inheritance(strategy = InheritanceType.JOINED)
public class EntityBase
{
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "creation_date", nullable = false)
    private Date creationDate;

    @Column(name = "modification_date", nullable = false)
    private Date modificationDate;

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

    public long getId() { return id; }

    public void setId(long id)
    {
        if(id < 0)
            throw new IllegalArgumentException("Id must be a positive value");

        this.id = id;
    }

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
