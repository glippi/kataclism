Scenario: Kataclism is invoke without options, providing just the name of the kata

Given the User has installed kataclism
And the User invoke the function without options
Then the setup will be bootstrapped for JavaScript
And a new folder with the name provided by the User will be created
And all the packages needed for having a working environment will be installed
When the User enters the new folder
Then the User can start a new kata
