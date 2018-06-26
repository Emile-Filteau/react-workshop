## React workshop

### API spec

`GET /listings`
Returns the list of all Listings as summary

`GET /listings/:id`
Returns the detailed version of a listing

`GET /listings/:id/reviews`
Returns the reviews for a listing

`GET /listings/:id/pictures`
Returns the pictures for a listing

To register a new account :

```
POST /auth/register {
  user: {
    name: 'YOUR NAME',
    email: 'YOUR EMAIL',
    password: 'YOUR PASSWORD',
    password_confirmation: 'YOUR PASSWORD AGAIN',
  }
}
```

To login :

```
POST /auth/login {
  email: 'YOUR EMAIL',
  password: 'YOUR PASSWORD',
}
```

To make authenticated requests, add the following header to your queries
`Auhtorization: YOUR TOKEN`
