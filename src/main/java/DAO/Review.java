package DAO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity(name = "reviews")
public class Review
{
    @Id
    @Column(name = "id")
    @GeneratedValue
    private long id;

    @Column(name = "message", nullable = true)
    private String message;

    @Column(name = "score", nullable = false)
    private double score;

    @JsonIgnore
    @ManyToOne(optional = false)
    private Person author;

    @JsonIgnore
    @ManyToOne(optional = false)
    private Company targetCompany;

    public long getId()
    {
        return id;
    }

    public void setId(long id)
    {
        if(id < 0)
            throw new IllegalArgumentException("Id must be a non-negative value");

        this.id = id;
    }

    public String getMessage()
    {
        return message;
    }

    public void setMessage(String message)
    {
        this.message = message;
    }

    public double getScore()
    {
        return score;
    }

    public void setScore(double score)
    {
        this.score = score;
    }

    public Person getAuthor()
    {
        return author;
    }

    public void setAuthor(Person author)
    {
        this.author = author;
    }

    public Company getTargetCompany()
    {
        return targetCompany;
    }

    public void setTargetCompany(Company targetCompany)
    {
        this.targetCompany = targetCompany;
    }

    @JsonProperty(value = "company")
    public String getCompanyEmail()
    {
        return targetCompany.getEmail();
    }

    @JsonProperty(value = "company")
    public void setCompanyEmail(String email)
    {
        if(targetCompany != null) targetCompany.setEmail(email);
        else
        {
            targetCompany = new Company();
            targetCompany.setEmail(email);
        }
    }

    @JsonProperty(value = "author")
    public String getAuthorEmail() { return author.getEmail(); }

    @JsonProperty(value = "author")
    public void setAuthorEmail(String email)
    {
        if(author != null) author.setEmail(email);
        else
        {
            author = new Person();
            author.setEmail(email);
        }
    }

}
