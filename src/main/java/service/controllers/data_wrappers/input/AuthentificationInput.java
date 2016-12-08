package service.controllers.data_wrappers.input;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;

/**
 * @author marakaido
 * @since 29.11.16
 */
@JsonAutoDetect
public class AuthentificationInput
{
    @JsonProperty
    private String email;
    @JsonProperty
    private String password;

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }
}
