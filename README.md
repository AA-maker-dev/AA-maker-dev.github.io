# Nexora - Social Media Platform

A modern, responsive social media web application built with HTML, CSS, and JavaScript. This is a GitHub Pages hosted website.

## 🌐 Project Structure

```
nexora/
├── index.html                 # Home page
├── explore.html              # Explore/discover content
├── messages.html             # Direct messages
├── notifications.html        # Notifications center
├── profile.html              # User profile
├── README.md                 # Project documentation
├── .gitignore               # Git ignore rules
├── CNAME                    # Custom domain configuration
├── css/
│   ├── styles.css          # Global styles
│   ├── home.css            # Home page specific styles
│   ├── explore.css         # Explore page specific styles
│   ├── messages.css        # Messages page specific styles
│   ├── notifications.css   # Notifications page specific styles
│   └── profile.css         # Profile page specific styles
├── js/
│   ├── index.js            # Home page functionality
│   ├── explore.js          # Explore page functionality
│   ├── messages.js         # Messages page functionality
│   ├── notifications.js    # Notifications page functionality
│   └── profile.js          # Profile page functionality
└── assets/
    └── images/             # Static images and media
```

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface
- **Social Features**:
  - Home feed with posts
  - Explore trending content
  - Direct messaging
  - Notifications system
  - User profiles
- **Dark/Light Mode Compatible**
- **Fast Performance**: Optimized CSS and JavaScript

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required (static site)

### Local Setup

1. Clone or download this repository:
```bash
git clone https://github.com/AA-maker-dev/AA-maker-dev.github.io.git
```

2. Navigate to the project directory:
```bash
cd AA-maker-dev.github.io
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

4. Open your browser and go to `http://localhost:8000`

## 📱 Pages

### Home (index.html)
- View your feed with latest posts
- Create and share new posts
- Trending topics and suggestions
- User profile sidebar

### Explore (explore.html)
- Browse trending posts
- Discover popular topics
- Find and follow new users
- Trending people section

### Messages (messages.html)
- Start new conversations
- View message history
- Real-time messaging (when backend is added)
- Search conversations

### Notifications (notifications.html)
- View all notifications
- Filter by type (likes, follows, mentions, etc.)
- Mark as read functionality
- Notification settings

### Profile (profile.html)
- Edit profile information
- View user stats (followers, following, posts)
- Manage profile settings
- Display user posts and activity

## 🎨 Customization

### Colors
Modify CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #1DA1F2;
    --secondary-color: #14171A;
    --light-color: #F7F9FA;
    --gray-color: #657786;
    --border-color: #E1E8ED;
}
```

### Typography
Update font families in `css/styles.css`:
```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...;
}
```

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive features
- **Font Awesome**: Icon library
- **LocalStorage API**: Client-side data persistence

## 📦 Dependencies

- [Font Awesome 6.4.0](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css) - Icon library

## 🚀 Deployment

This project is optimized for **GitHub Pages** deployment:

1. Push code to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io`

### Custom Domain
To use a custom domain (e.g., nexora.com):
1. Update the `CNAME` file with your domain
2. Configure DNS records at your domain provider
3. GitHub Pages will automatically use your custom domain

## 📝 Local Storage

The app uses browser LocalStorage to persist:
- User profile data
- Posts
- Conversations
- Settings

Data is stored locally and not sent to any server (until backend is added).

## 🔐 Security Notes

- This is a frontend-only application
- No sensitive data should be stored in LocalStorage
- For production, implement proper authentication and server-side security
- Sanitize user input when adding backend functionality

## 🐛 Known Issues & TODOs

- [ ] Add backend API integration
- [ ] Implement user authentication
- [ ] Add real-time messaging with WebSockets
- [ ] Image upload functionality
- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] User notifications (push notifications)

## 🤝 Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**AA-maker-dev**
- GitHub: [@AA-maker-dev](https://github.com/AA-maker-dev)

## 🙏 Acknowledgments

- Font Awesome for icon library
- GitHub Pages for free hosting
- Community inspiration and support

---

**Last Updated**: January 17, 2026
**Version**: 1.0.0
