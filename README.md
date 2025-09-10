# 🎛️ Admin & User Control System

A Hugo-based control system where admins can toggle between ON (red screen) and OFF (black screen) states, and users see the corresponding display. Built for Azure Static Web Apps deployment.

## 🌟 Features

- **Admin Panel**: Control system state with ON/OFF buttons
- **User Display**: Full-screen red (ON) or black (OFF) display
- **Real-time Sync**: Changes sync across all user displays
- **Responsive Design**: Works on all devices
- **Azure Static Web Apps Ready**: Optimized for Azure deployment

## 🚀 Quick Start

### Local Development

1. **Clone and setup**:
   ```bash
   git clone <your-repo>
   cd admin
   ```

2. **Install Hugo** (if not already installed):
   ```bash
   # macOS
   brew install hugo
   
   # Windows
   choco install hugo-extended
   
   # Linux
   snap install hugo --channel=extended
   ```

3. **Run locally**:
   ```bash
   hugo server -D
   ```

4. **Access the sites**:
   - Home: http://localhost:1313/
   - Admin Panel: http://localhost:1313/admin/
   - User Display: http://localhost:1313/user/

## 🌐 Azure Static Web Apps Deployment

### Step 1: Create Azure Static Web App

1. Go to [Azure Portal](https://portal.azure.com)
2. Create new **Static Web App**
3. Connect to your GitHub repository
4. Set build configuration:
   - **Source**: GitHub
   - **Build Presets**: Custom
   - **App location**: `/`
   - **Api location**: `api`
   - **Output location**: `public`

### Step 2: Configure GitHub Repository

The GitHub Actions workflow is already configured in `.github/workflows/azure-static-web-apps.yml`.

### Step 3: Access Your Deployed Sites

Once deployed, you'll have **two URLs from one Azure Static Web App**:

```
https://your-site.azurestaticapps.net/admin/    # Admin Panel
https://your-site.azurestaticapps.net/user/     # User Display
```

## 📱 How to Use

### Admin Panel (`/admin/`)
- **Turn ON**: Makes all user screens red
- **Turn OFF**: Makes all user screens black
- **Status Display**: Shows current system state
- **Real-time Updates**: Changes apply immediately

### User Display (`/user/`)
- **Full Screen**: Displays red (ON) or black (OFF)
- **Auto-refresh**: Checks for updates every 5 seconds
- **Clean Interface**: No distractions, just the status color

## 🏗️ Architecture

```
├── content/
│   ├── admin/          # Admin panel content
│   ├── user/           # User display content
│   └── _index.md       # Home page
├── themes/control-theme/
│   └── layouts/
│       ├── _default/
│       │   ├── admin.html    # Admin panel template
│       │   ├── user.html     # User display template
│       │   └── baseof.html   # Base template
│       ├── index.html        # Home page template
│       └── 404.html          # Error page
├── api/
│   └── state.js        # Azure Functions API
├── data/
│   └── state.json      # System state data
└── public/             # Generated site (Hugo output)
```

## 🔧 Customization

### Change Colors

Edit the CSS in the theme templates:

**Red (ON) Color**:
```css
.user-display.state-on {
    background-color: #ff0000; /* Change this */
}
```

**Black (OFF) Color**:
```css
.user-display.state-off {
    background-color: #000000; /* Change this */
}
```

### Add Authentication

To secure the admin panel, modify `staticwebapp.config.json`:

```json
{
  "routes": [
    {
      "route": "/admin/*",
      "allowedRoles": ["authenticated"]
    }
  ]
}
```

### Real-time Updates

For production real-time updates, implement:
1. **Database storage** for state persistence
2. **WebSocket connections** for instant updates
3. **SignalR** integration with Azure

## 📊 File Structure in Public Folder

After Hugo builds, your `public/` folder contains:

```
public/
├── admin/
│   └── index.html      # Admin panel
├── user/
│   └── index.html      # User display  
├── api/
│   └── state.js        # API functions
├── index.html          # Home page
└── 404.html           # Error page
```

This gives you the two URLs you need:
- `your-site.azurestaticapps.net/admin/` 
- `your-site.azurestaticapps.net/user/`

## 🔄 State Management

Currently uses **localStorage** for demo purposes. For production:

1. **Replace localStorage** with API calls
2. **Implement database** storage (Azure Cosmos DB, etc.)
3. **Add real-time sync** (SignalR, WebSockets)

## 🚨 Production Considerations

- **Authentication**: Secure admin access
- **Database**: Persistent state storage
- **Real-time**: WebSocket/SignalR for instant updates
- **Monitoring**: Add logging and analytics
- **Backup**: State backup and recovery

## 📝 Environment Variables

For production API functionality, set these in Azure:

```
COSMOS_DB_CONNECTION_STRING=your_cosmos_connection
SIGNALR_CONNECTION_STRING=your_signalr_connection
```

## 🎯 Use Cases

- **Digital Signage**: Control display states
- **Event Management**: Signal start/stop states
- **Emergency Systems**: Visual alert systems
- **Presentation Control**: Audience display management
- **IoT Control**: Device state visualization

## 🛠️ Development

### Build for Production
```bash
hugo --gc --minify
```

### Clean Build
```bash
rm -rf public && hugo --gc --minify
```

### Test Locally
```bash
hugo server -D --port 1313
```

## 📞 Support

The system is ready for Azure Static Web Apps deployment with:
- ✅ Hugo build process
- ✅ Azure Functions API
- ✅ Proper routing configuration
- ✅ Two distinct URLs from one deployment
- ✅ Mobile-responsive design

Deploy to Azure Static Web Apps and you'll get both admin and user interfaces from a single deployment!
