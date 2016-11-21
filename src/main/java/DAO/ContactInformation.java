package DAO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

import javax.persistence.*;

/**
 * @author marakaido
 * @since 20.11.16
 */
@Entity(name = "contacts")
@Inheritance(strategy = InheritanceType.JOINED)
@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = Phone.class, name = "phone"),
        @JsonSubTypes.Type(value = Email.class, name = "email"),
        @JsonSubTypes.Type(value = Address.class, name = "address") })
public class ContactInformation
{
    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private long id;

    @Column(name = "comment")
    private String comment;

    @JsonIgnore
    @ManyToOne(optional=false, fetch = FetchType.EAGER)
    private EntityBase entity;

    public long getId() { return id; }

    public void setId(long id) { this.id = id; }

    public String getComment()
    {
        return comment;
    }

    public void setComment(String comment)
    {
        this.comment = comment;
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
}
