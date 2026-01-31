# 🚀 3-Tier DevOps CI/CD Project

This project demonstrates a complete production-style DevOps pipeline for deploying a full-stack application using:

* Frontend (React)
* Backend (Node.js / Express)
* MongoDB
* Docker
* GitHub Actions (CI/CD)
* Terraform (Infrastructure as Code)
* Ansible (Configuration & Deployment)
* SonarQube (Code Quality)
* Trivy (Security Scanning)
* AWS EC2

The goal of this project is to simulate a real-world DevOps workflow used in modern companies.

---

## 🧱 Architecture Overview

Developer → GitHub → CI Pipeline → DockerHub → CD Pipeline → EC2 → Containers Running

```
Browser
   ↓
Frontend Container (Nginx)
   ↓
Backend Container (Node.js API)
   ↓
MongoDB Container
```

---

## ⚙️ CI Pipeline (GitHub Actions)

The CI pipeline performs:

* Install dependencies
* Lint frontend & backend
* SonarQube code analysis
* Quality gate enforcement
* Docker image build
* Trivy security scanning
* Push images to DockerHub

### CI Workflow Steps

```
git push
↓
npm ci + lint
↓
SonarQube scan
↓
Trivy vulnerability scan
↓
Docker build
↓
Push to DockerHub
```

---

## ☁️ Infrastructure Provisioning (Terraform)

Terraform provisions AWS infrastructure:

* VPC
* Subnet
* Security Groups
* EC2 instance
* SSH key
* S3 backend for Terraform state

Terraform backend uses:

* S3 for state storage
* State locking enabled

---

## 🔧 Configuration & Deployment (Ansible)

Ansible automatically configures the EC2 server:

* Install Docker
* Install Docker Compose
* Create app directory
* Copy docker-compose.yml
* Pull latest images
* Restart containers

Deployment is fully automated via GitHub pipeline.

No manual SSH required after setup.

---

## 🐳 Docker Deployment Strategy

Production mode:

* CI builds images
* Server only pulls images
* No server-side build

docker-compose uses:

```
image: rajesh00007/frontend:latest
image: rajesh00007/backend:latest
```

This ensures immutable deployments.

---

## 🔐 Security

Security checks included:

* Trivy container scanning
* SonarQube code quality gate
* Private SSH key stored in GitHub Secrets
* Infrastructure isolated via security groups

---

## 📦 Project Structure

```
3tapp/
│
├── frontend/
├── backend/
├── terraform/
│   ├── main.tf
│   ├── outputs.tf
│   └── deploy.yml
│
├── docker-compose.yml
├── .github/workflows/
│   ├── app-pipeline.yml
│   └── infra-pipeline.yml
│
└── README.md
```

---

## 🚀 How Deployment Works

1. Push code to GitHub
2. CI pipeline runs tests & scans
3. Docker images built & pushed
4. CD pipeline connects to EC2
5. Ansible deploys containers
6. App becomes live automatically

---

## 🧪 Testing

Frontend: http://EC2_PUBLIC_IP
Backend: http://EC2_PUBLIC_IP:5000

---

## 🎯 What This Project Demonstrates

* End-to-end CI/CD automation
* Infrastructure as Code
* Secure container deployment
* DevOps best practices
* Production-style pipelines
* Automated server provisioning
* Security scanning integration

---

## 📌 Future Improvements

* HTTPS + domain setup
* Nginx reverse proxy
* Kubernetes migration
* Monitoring (Prometheus/Grafana)
* Blue-green deployments
* Auto rollback
* Multi-environment pipeline (dev/stage/prod)

---

## 👨‍💻 Author

Rajesh G
DevOps Engineer in Progress 🚀

---

This project represents a full real-world DevOps workflow and can be used as a portfolio showcase.
