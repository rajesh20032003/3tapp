terraform {
  backend "s3" {
    bucket  = "terraform-state-rajesh-001"
    key     = "3tapp/terraform.tfstate"
    region  = "ap-south-1"
    encrypt = true
  }
}
