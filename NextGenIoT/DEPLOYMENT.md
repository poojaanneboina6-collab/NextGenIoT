# Deployment Guide for NextGenIoT

## 🚀 Deployment Options

### Option 1: Railway (Recommended)

Railway is perfect for this full-stack Node.js application with SQLite database.

#### Steps:

1. **Connect Repository**
   - Go to [Railway.app](https://railway.app)
   - Connect your GitHub repository
   - Select the `NextGenIoT` project

2. **Configure Environment**
   - Railway auto-detects Node.js
   - Set environment variables:
     ```
     NODE_ENV=production
     PORT=5000
     ```

3. **Database Setup**
   - SQLite works automatically with persistent storage
   - No additional database configuration needed

4. **Deploy**
   - Railway will build and deploy automatically
   - Your app will be live at `https://your-project.railway.app`

### Option 2: Docker Deployment

#### Build and Run Locally:
```bash
# Build the Docker image
docker build -t nextgeniot .

# Run the container
docker run -p 5000:5000 -v $(pwd)/data:/app/data nextgeniot
```

#### Deploy to Docker Hub:
```bash
# Tag and push to Docker Hub
docker tag nextgeniot yourusername/nextgeniot:latest
docker push yourusername/nextgeniot:latest
```

### Option 3: Vercel + Railway

#### Frontend (Vercel):
```bash
# Deploy client only to Vercel
npm run build
# Upload dist/public to Vercel
```

#### Backend (Railway):
- Deploy server to Railway as above
- Update client API calls to use Railway URL

### Option 4: Heroku

#### Heroku Deployment:
```bash
# Create Heroku app
heroku create your-nextgeniot-app

# Set environment variables
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

## 🔧 Environment Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `NODE_ENV` | `production` | Production mode |
| `PORT` | `5000` | Server port |
| `DATABASE_URL` | Auto-configured | SQLite database path |

## 📊 Database

- **Type**: SQLite
- **Location**: `./sqlite.db` (development) or `/app/data/sqlite.db` (production)
- **Migrations**: Auto-run on startup
- **Persistence**: Maintained between deployments

## 🌐 Production URLs

After deployment, your app will be available at:
- **Railway**: `https://your-project.railway.app`
- **Heroku**: `https://your-app.herokuapp.com`
- **Docker**: `http://your-server:5000`

## 🧪 Testing Deployment

Test these endpoints after deployment:

```bash
# Health check
curl https://your-app-url/

# Disease analysis (replace with actual image data)
curl -X POST https://your-app-url/api/scans \
  -H "Content-Type: application/json" \
  -d '{"image":"data:image/jpeg;base64,...","language":"en"}'

# Crop recommendations
curl -X POST https://your-app-url/api/recommend \
  -H "Content-Type: application/json" \
  -d '{"N":120,"P":60,"K":40,"ph":6.5,"location":"Test","rainfall":100}'
```

## 🔒 Security Considerations

- SQLite database is file-based - ensure proper file permissions
- No authentication implemented - consider adding for production use
- Image uploads are processed in memory - monitor for large file handling
- CORS is configured for development - review for production

## 📈 Monitoring

- Check Railway/Heroku logs for errors
- Monitor database file size
- Track API response times
- Set up health checks

## 🆘 Troubleshooting

### Common Issues:

1. **Port Issues**: Ensure PORT environment variable is set
2. **Database Errors**: Check file permissions for SQLite database
3. **Build Failures**: Ensure all dependencies are in package.json
4. **Memory Issues**: Monitor for large image processing

### Logs:
```bash
# Railway logs
railway logs

# Heroku logs
heroku logs --tail
```