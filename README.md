# 🐳 My Docker Project

A lightweight, containerized web application powered by Docker. This project demonstrates how to package static assets (HTML, CSS, JS) or a custom app into a fully portable Docker image, making deployment simple and efficient.

---

## 🚀 Features

- 🧱 Fully Dockerized setup
- ⚡ Blazing fast build and run
- 🌍 Works on any OS with Docker installed
- 📦 Simple and portable deployment
- 🖥️ Custom static website or app served via container

---

## 📂 Project Structure
My-Docker-Project/

├── Dockerfile

├── index.html

├── styles.css

├── script.js

└── README.md




---

## 🛠️ Getting Started

> Make sure Docker is installed on your system:  
> 👉 [Get Docker](https://docs.docker.com/get-docker/)

### 🔧 1. Clone the repository

```bash
git clone https://github.com/S0hamm/My-Docker-Project.git
cd My-Docker-Project

🧱 2. Build the Docker image
docker build -t my-docker-app .

▶️ 3.Run the Docker container
docker run -d -p 8080:80 my-docker-app

Now open your browser and visit:
📎 http://localhost:8080

🧹 Stopping & Cleaning Up

# Stop container
docker ps
docker stop <container-id>

# Remove container
docker rm <container-id>


🧠 Learnings / Purpose
This project was built to:

Learn Docker basics: image, container, build, and run
Understand containerized deployment of web projects
Build a professional foundation for more advanced DevOps practices


👨‍💻 Author
Soham Dhara
📧 sohamdhara241@gmail.com
🌐 https://hub.docker.com/u/sohamd48

