# fa22-cse110-lab8

1) I would fit my automated tests in my Recipe project development pipeline within a Github action that runs whenever code is pushed 
because we want to check our code before we merge it. This way it will prevent any pull request to be merged if it is failing. 

2) No, I would not use an end to end test to check if a function is returning the correct output because end to end test tests the entire software product from beginning to end to ensure the application flow behaves as expected. So, it does not check if a function is returning the correct output. 

3) No, I would not use a unit test to test the "message" feature or a messaging application because a unit test is basically test invidual units or components to test each unit of the software code performs as expected. So, when we cannot use a unit test to check the entire application. 

4) Yes, I would use a unit test to test the "max message length" feature of a messaging application because we know that a unit test is testing individual unit. In this case, we only test the max message length so the unit test would work. 
   