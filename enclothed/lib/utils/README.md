# Utils Folder
## Utils folder contains the helpers, services, UI utils, mixins which are used throughout the application
## Folder contains:
### 1. Helpers
- In many scenarios, we need to write code multiple times for the same thing like converting the every word first characters to be uppercase usually used in showing titles for any other widgets, etc. This kind of code can be made common to reduce the redundancy and add that code in helpers files which are present in lib/utils/helpers/text_helper.dart.
text_helper.dart will contain all the code which are required to convert the String to show in a Text widget.
### 2. Mixins
- Mixin is a class that contains methods for use by other classes without having to be the parent class of those other classes.” In other words, mixins are normal classes from which we can borrow methods(or variables) from without extending the class.
In the application, we can make different mixins like validation_mixins.dart, orientation_mixins.dart
### 3. Services
- We will be creating a different kind of service files in the folder lib/utils/services. All the services will be singleton classes.
### 4. UI
- All the common UI related things should be present inside lib/utils/ui folder
Here is the list of folders and files which will be present in the directory lib/utils/ui
