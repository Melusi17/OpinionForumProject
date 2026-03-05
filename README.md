Good catch! Here's the updated README without the `.env` file reference:

# Opinion Forum - Full Stack Application

A full-stack forum application built with ASP.NET Core Web API, React, PostgreSQL, and Docker. Features JWT authentication and a responsive UI.

## 🚀 Tech Stack

### Backend
- **ASP.NET Core 8.0** - Web API framework
- **Entity Framework Core** - ORM for database operations
- **PostgreSQL** - Primary database
- **JWT Authentication** - Secure token-based auth
- **Swagger/OpenAPI** - API documentation

### Frontend
- **React 19** - UI library
- **React Router DOM** - Navigation and routing
- **Axios** - HTTP client for API requests
- **React Hook Form** - Form handling and validation
- **CSS Modules** - Styling

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy for frontend

## 📋 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Node.js](https://nodejs.org/) (v18 or higher) - for local development
- [.NET SDK 8.0](https://dotnet.microsoft.com/download) - for local development
- [Git](https://git-scm.com/)

## 🏗️ Project Structure

```
OpinionForumProject/
├── Opinion Forum/           # ASP.NET Core Backend
│   ├── Controllers/         # API endpoints
│   ├── Data/               # Database context
│   ├── Models/             # Entity models
│   ├── Services/           # Business logic
│   └── Dockerfile          # Backend container config
├── opinion-forum-frontend/  # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # Auth context
│   │   ├── pages/          # Page components
│   │   └── services/       # API services
│   ├── public/             # Static files
│   ├── Dockerfile          # Frontend container config
│   └── nginx.conf          # Nginx configuration
├── docker-compose.yml       # Multi-container setup
└── docker-compose.override.yml # Development overrides
```

## 🚦 Getting Started

### Using Docker (Recommended)

1. **Clone the repository**
```bash
git clone https://github.com/Melusi17/OpinionForumProject.git
cd OpinionForumProject
```

2. **Start the application with Docker Compose**
```bash
docker-compose up -d
```

3. **Access the applications**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/swagger

### Local Development Setup

#### Backend Setup
```bash
cd "Opinion Forum"
dotnet restore
dotnet run
```
API will be available at `https://localhost:7011` and `http://localhost:5187`

#### Frontend Setup
```bash
cd opinion-forum-frontend
npm install
npm start
```
Frontend will be available at `http://localhost:3000`

## 🔑 API Endpoints

### Authentication

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/api/Auth/register` | Register new user | `{ firstName, lastName, email, password }` |
| POST | `/api/Auth/login` | Login user | `{ email, password }` |
| GET | `/api/User/me` | Get current user | Requires JWT token |

## 🐳 Docker Commands

### Build and start all services
```bash
docker-compose up -d
```

### View running containers
```bash
docker ps
```

### View logs
```bash
docker-compose logs -f [service-name]
```

### Stop all services
```bash
docker-compose down
```

### Rebuild a specific service
```bash
docker-compose build [service-name]
docker-compose up -d [service-name]
```

## 🧪 Running Tests

### Backend Tests
```bash
cd "Opinion Forum"
dotnet test
```

### Frontend Tests
```bash
cd opinion-forum-frontend
npm test
```

## 🌐 Configuration

### Backend (`appsettings.json`)
The API uses the following configuration:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Host=postgres;Port=5432;Database=ForumDb;Username=postgres;Password=17Melusi"
  },
  "Jwt": {
    "Key": "MySuperSecretKeyForSkillDemonstrationPurposesOnly2026!",
    "Issuer": "OpinionForum",
    "Audience": "OpinionForumUsers"
  }
}
```

### Frontend API Configuration
The React app connects to the backend using a base URL configured in `src/services/api.js`:
```javascript
const API_URL = 'http://localhost:5000/api';
```

## 📝 Features Implemented

- ✅ User registration with validation
- ✅ User login with JWT authentication
- ✅ Protected user details page
- ✅ PostgreSQL database integration
- ✅ Full Docker containerization
- ✅ Nginx reverse proxy for frontend
- ✅ Responsive design
- ✅ Form validation
- ✅ Error handling

## 🔒 Environment Variables Note

This project does not use `.env` files. All configuration is handled through:
- `appsettings.json` for backend
- Direct configuration in `api.js` for frontend
- Docker Compose environment variables for container setup

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Melusi Mamba**
- GitHub: [@Melusi17](https://github.com/Melusi17)

## 🙏 Acknowledgments

- ASP.NET Core documentation
- React documentation
- Docker documentation
- PostgreSQL community

---

**Happy Coding!** 🚀
