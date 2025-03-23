Base url-http://localhost:3000/api/v1

For User Authenticatio-
1->(/auth/signup):->req.body {"name":"xyz",
    "email":"xyz@gmail",
      "password": "password"

}
res {
    "success": true,
    "message": "User created"
}
2->(/auth/login):->req.body {
    "email":"xyz@gmail",
      "password": "password"

}
res {
    "success": true,
    "message": "User loggedin"
}

For employee-
1->(/employees)
res={
    "success": true,
    "employees": [
        {
            "_id": "67dfe8f8b10c8421abcc7cce",
            "name": "abcde",
            "email": "paxiw62343@lxheir.com",
            "department": "abcde",
            "dateOfJoining": "2025-03-23T10:56:56.890Z",
            "createdAt": "2025-03-23T10:56:56.894Z",
            "updatedAt": "2025-03-23T10:56:56.894Z",
            "__v": 0
        }
    ]
}

2->(/employee)
req.body{
    "name": "x",
    "email": "y",
    "department": "y"
}

res {
    "success": true,
    "message": "employee created"
}

cookies :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZGZmN2ZiN2Q0NGVkNzEyNjAwYWI5YyIsImlhdCI6MTc0MjczMTI1OX0.Y5ahXDqiWT44coyej7Wr6xHbHhQSeEGZjSeDBuXlfVg
"


##Routes after  this can only be accessed after login


3->(/employee/:id)
res {
    "success": true,
    "employee": {
        "_id": "67dfe8f8b10c8421abcc7cce",
        "name": "abcde",
        "email": "paxiw62343@lxheir.com",
        "department": "abcde",
        "dateOfJoining": "2025-03-23T10:56:56.890Z",
        "createdAt": "2025-03-23T10:56:56.894Z",
        "updatedAt": "2025-03-23T10:56:56.894Z",
        "__v": 0
    }
}


4->(/employee/:id)
res {
    "success": true,
    "message": "Employee deleted"
}
5->(/employee/:id)
res {
    "success": true,
    "message": "Employee updated"
}








