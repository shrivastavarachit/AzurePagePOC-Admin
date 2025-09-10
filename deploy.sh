#!/bin/bash

echo "🚀 Building Hugo Control System for Azure Static Web Apps..."
echo ""

# Check if Hugo is installed
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo is not installed. Please install Hugo first:"
    echo "   https://gohugo.io/installation/"
    exit 1
fi

echo "✅ Hugo version: $(hugo version)"
echo ""

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf public

# Build the site
echo "🏗️  Building Hugo site..."
hugo --gc --minify

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Build completed successfully!"
    echo ""
    echo "📁 Generated files in public/ folder:"
    echo "   • public/index.html (Home page)"
    echo "   • public/admin/index.html (Admin panel)"
    echo "   • public/user/index.html (User display)"
    echo "   • api/ folder (Azure Functions)"
    echo ""
    echo "🌐 Ready for Azure Static Web Apps deployment!"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Push to GitHub repository"
    echo "   2. Azure Static Web Apps will auto-deploy"
    echo "   3. Access your sites at:"
    echo "      • https://your-site.azurestaticapps.net/admin/"
    echo "      • https://your-site.azurestaticapps.net/user/"
    echo ""
else
    echo "❌ Build failed!"
    exit 1
fi
