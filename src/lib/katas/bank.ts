export const Bank = {
  name: 'bank-kata',
  description: `
Think of your personal bank account experience When in doubt, go for the simplest solution.
Requirements:

## Instructions

\`\`\`
public interface AccountService
{
    void deposit(int amount)
    void withdraw(int amount)
    void printStatement()
}
\`\`\`

## Rules

- You cannot change the public interface of this class.

## Desired Behaviour

\`\`\`
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
\`\`\`
`,
}
