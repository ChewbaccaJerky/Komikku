# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# default users
users = [
    {
        username: "JohnRobin",
        password: "password",
        email: "johnrobinlugtu@gmail.com",
        first_name: "John",
        last_name: "Lugtu"
    },
    demo = {
    username: "demo",
    password: "password",
    email: "demo@test.com",
    first_name: "Chuck",
    last_name: "Norris"
    }
]

users.each do |user|
    User.create(user)
end