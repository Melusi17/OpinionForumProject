using Opinion_Forum.DTOs;

namespace Opinion_Forum.Interfaces
{
    public interface IUserService
    {
        // Get user details by ID (protected endpoint)
        Task<UserResponse?> GetUserById(int id);
    }
}