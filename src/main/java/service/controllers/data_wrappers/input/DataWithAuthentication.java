package service.controllers.data_wrappers.input;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

/**
 * @author marakaido
 * @since 11.12.16
 */
@JsonAutoDetect
public class DataWithAuthentication<T>
{
    private AuthentificationInput userData;
    private T data;

    public AuthentificationInput getUserData()
    {
        return userData;
    }

    public void setUserData(AuthentificationInput userData)
    {
        this.userData = userData;
    }

    public T getData()
    {
        return data;
    }

    public void setData(T data)
    {
        this.data = data;
    }
}
