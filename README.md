# much-to-do...
# Much-To-Do Infrastructure with Terraform

This project uses **Terraform** to provision a scalable and secure AWS infrastructure for the "Much-To-Do" application. It automates the deployment of a VPC, EC2 backend instances, and an S3-backed CloudFront distribution for the frontend.

## 🏗 Architecture Overview



The infrastructure consists of:
- **VPC**: A custom Virtual Private Cloud with public and private subnets across 2 Availability Zones.
- **Compute**: 2 EC2 instances (Amazon Linux 2023) running in public subnets for backend processing.
- **Frontend**: An S3 bucket for static assets, served globally via CloudFront.
- **Security**: Security Groups configured for SSH (22) and Application (8080) access.
- **State Management**: Remote S3 backend with DynamoDB for state locking to prevent concurrent modifications.

## 🚀 Getting Started

### Prerequisites
- [Terraform](https://www.terraform.io/downloads.html) (v1.5.0+)
- [AWS CLI](https://aws.amazon.com/cli/) configured with appropriate credentials.
- An existing S3 bucket (`much-terraform-state`) and DynamoDB table (`terraform-locks-correct`) for the backend.

backend_public_ips = [
  "54.78.169.107",
  "34.241.4.222"
