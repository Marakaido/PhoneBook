package DAO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;

import javax.persistence.*;

@Entity(name = "phones")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "org.hibernate.proxy.pojo.javassist.JavassistLazyInitializer"})
public class Phone
{
    @Id
    @Column(name = "number", nullable = false, length = 15)
    private String number;

    @Column(name = "comment")
    private String comment;

    @JsonIgnore
    @ManyToOne(optional=false, fetch = FetchType.EAGER)
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

    @JsonProperty(value = "entity")
    public String getEntityEmail() { return entity != null ? entity.getEmail() : null; }

    @JsonProperty(value = "entity")
    public void setEntityEmail(String email)
    {
        if(entity != null) entity.setEmail(email);
        else
        {
            entity = new EntityBase();
            entity.setEmail(email);
        }
    }

    public String getComment()
    {
        return comment;
    }

    public void setComment(String comment)
    {
        this.comment = comment;
    }
}
