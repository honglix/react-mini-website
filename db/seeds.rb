# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

course = Course.create(title:"Hello World", description: "Create a React App with Rails")

section = Section.create(title:"Chapter 1", description: "First Chapter", course: course)

episode = Episode.create([
    {title: "1. Setting up project", description: "lorem ipsum", url: "https://www.youtube.com/watch?v=5F_JUvPq410", section: section},
    {title: "2. Add react to the project", description: "lorem ipsum", url: "https://www.youtube.com/watch?v=5F_JUvPq410", section: section },
    {title: "3. Building a hello world", description: "lorem ipsum", url:"https://www.youtube.com/watch?v=5F_JUvPq410", section: section},
    {title: "4. Add react router", description: "lorem ipsum", url:"https://www.youtube.com/watch?v=5F_JUvPq410", section: section }
])