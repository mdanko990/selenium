Feature: Epam

    Scenario: Open site of Epam company
      Given enter in search bar https://www.epam.com/
      When click search
      Then open main page of site

    Scenario: click on Language
      Given open the website https://www.epam.com/
      When click on language dropdown list
      Then open dropdown list

    Scenario: Contact to company
      Given open the website https://www.epam.com/
      When click on "Contact us"-button
      Then open contact page
    
    Scenario: Change language of site to Ukrainian
      Given https://www.epam.com/
      Then click on language dropdown list
      Then open dropdown list
      Then open ukrainian version of site

    Scenario: Return to main page
      Given open the website https://www.epam.com/services
      When click on logo button
      Then open main page

    Scenario: Find locations of offices
      Given open the website https://www.epam.com/
      When find "our offices" on page and choose part of the world
      Then choose country
      Then open info about choosen country

    Scenario: Discover cases
      Given open the website https://www.epam.com/
      When click on "our work" option on navigation bar
      Then open https://www.epam.com/our-work page

    Scenario: Search action
      Given open the website https://www.epam.com/
      When click on search icon
      Then open search block