const API = "https://api.themoviedb.org/3";

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzE0NWM0OTk4MDMwMjZmNzYwZTEwODU5NTNlNDVmNiIsIm5iZiI6MTc1NjE3MzQxNy4yMzQsInN1YiI6IjY4YWQxNDY5YWVmNjY1MjY4YTFlNTQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VLbwrcX9avjOTkINwqK05IlZ-BZdYQ6HzcLtKJWabRM",
                "Content-Type": "application/json"
        },
    }).then((data) => data.json());
    
}
