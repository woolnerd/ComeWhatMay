# ComeWhatMay

Welcome to Come What May, a disaster preparation app fully customizable to the needs of any household. When preparation is key, Come What May allows users to create a step-by-step plan to practice with the family. Each plan is carefully orchestrated by the account owner and tested for time efficiency using the built-in drills and drill history collection.  

Come check it out: [CWM](http://come-what-may.herokuapp.com/#/)

![App Overview Gid](https://media.giphy.com/media/CcA4xCjJ50ce3HBI1h/giphy.gif)

## Technologies Used

* Frontend
  * React
  * Redux
  * HTML5
  * CSS3
* Backend
  * MongoDB
  * Mongoose
  * Node
  * Express

## Features
* Embedded documents to take advantage of MongoDb back and where it makes sense to do so.
* Create profile to represent your household including relative cards to represent each member of your family/household with useful emergency contact information.
* Create different plans for different types of disasters.
* Each plan has it's own user customized list of tasks associated to it. Each action can belong to a member of the household as well as details of the task itself.

![Add Task to Disaster Plan](https://media.giphy.com/media/8UwACZGgQ3lp5OyIMa/giphy.gif)


* Each plan has it's own Drills that are scheduled by the user so that they can put their new plan into action.
* Drills that have been created for a Plan have a built in timer that can be used during the drill to make sure that a user is staying within the timeframe that was set during the creation of the plan.

![Use Drill Timer](https://media.giphy.com/media/hxwcDUmHDhcCA18oT8/giphy.gif)

## Code Snippets


## Challenges
### A profile page as the epicenter
* The heart of CWM is the profile page where a user can keep track of their disaster plans, their contact information for members of their household, as well as their own profile information. Because everything stems from the profile page, it was imperative that new users are funneled into a create profile form on signup, and that repeat users get to skip this step and go straight to their profile. However, this would require some logic. First it was necessary to user 

### Using a new technology for the back end of the project (MongoDB). 
* While we did use Mongoose router to allow for an easier transition from the SQL tables that we were used to, we wanted to take full advantage of what MongoDB brings to the table. One of the most obvious differences is the use of embedded documents. Learning everything, all of the required syntax and functionality to properly manage CRUD on the embedded documents was one of the largest challenges that we faced during this project. The consistent rendering of our action steps i.e. the tasks that are created and point to our action plans, were depenendent on this relationship. However, we had a problem: our UI had a disconnect from the backend. If one was attempted to update or delete a task, the wrong task would be effected. We had a disconnect from the backend.

