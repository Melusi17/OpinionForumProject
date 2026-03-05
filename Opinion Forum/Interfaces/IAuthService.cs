using Opinion_Forum.DTOs;
using Opinion_Forum.Models;

namespace Opinion_Forum.Interfaces
{
    public interface IAuthService
    {
        // Register a new user
        Task<AuthResponse?> Register(RegisterRequest request);

        // Login an existing user
        Task<AuthResponse?> Login(LoginRequest request);

        // Generate JWT token for authenticated user
        string GenerateJwtToken(User user);
    }
}