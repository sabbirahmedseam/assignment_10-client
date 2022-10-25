import React, { createContext, useEffect, useState } from 'react';

export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/courses")
        .then((res) => res.json())
        .then((data) => setCourses(data));
    }, []);
    
    const authInfo={courses}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;