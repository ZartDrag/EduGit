import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:5000/api/v1/questions",
  baseURL:
    "https://us-east-1.aws.data.mongodb-api.com/app/edugit-mlfzi/endpoint/questions?",
  headers: {
    "Content-type": "application/json",
  },
});
