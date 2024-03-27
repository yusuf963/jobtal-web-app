
const dev = {
    baseApiUrl: "http://localhost:5000/",
    coursesBaseApiUrl: "http://localhost:5000/courses",
    jobsBaseApiUrl: "http://localhost:5000/jobpost",
    googleAuthApiUrl: "http://localhost:5000/auth/google",
    loginBaseApiUrl: "http://localhost:5000/login",
    registerBaseApiUrl: "http://localhost:5000/register",
    userCrudBaseApiUrl: "http://localhost:5000/user/"
};
const prod = {
    baseApiUrl: "https://job-nest-api.onrender.com/",
    coursesBaseApiUrl: "https://job-nest-api.onrender.com/courses",
    jobsBaseApiUrl: "https://job-nest-api.onrender.com/jobpost",
    googleAuthApiUrl: "https://job-nest-api.onrender.com/auth/google",
    loginBaseApiUrl: "https://job-nest-api.onrender.com//login",
    registerBaseApiUrl: "https://job-nest-api.onrender.com/register",
    userCrudBaseApiUrl: "https://job-nest-api.onrender.com/user/"
};

let apiEndpoints;

if (process.env.NODE_ENV === 'development') {
    apiEndpoints = dev
} else {
    apiEndpoints = prod
};

export default apiEndpoints;