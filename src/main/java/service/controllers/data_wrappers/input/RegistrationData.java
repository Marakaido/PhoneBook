package service.controllers.data_wrappers.input;

import DAO.EntityBase;
import com.fasterxml.jackson.annotation.JsonAutoDetect;

/**
 * @author marakaido
 * @since 14.12.16
 */
@JsonAutoDetect
public class RegistrationData
{
    private String password;
    private EntityBase user;

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public EntityBase getUser()
    {
        return user;
    }

    public void setUser(EntityBase user)
    {
        this.user = user;
    }
}
