using Microsoft.EntityFrameworkCore;
using Opinion_Forum.Data;
using Opinion_Forum.DTOs;
using Opinion_Forum.Interfaces;

namespace Opinion_Forum.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<UserResponse?> GetUserById(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
                return null;

            return new UserResponse
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email
            };
        }
    }
}