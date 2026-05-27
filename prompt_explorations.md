### prompts after creating the initial next.js project

I want you to help me write a spec file for a project that I am building. It's called "FastGC". It's a place where anyone who has or is going to apply for a green card in the United States can learn about the green card application process and all the ways it can be accelerated. The official and most comprehensive source for all U.S. Green Card application types is the USCIS Green Card Eligibility Categories page: https://www.uscis.gov/green-card/green-card-eligibility-categories.

The main page should display all green card eligibility categories with individual sections that can be expanded with detailed information. Each expanded section should use language accessible to immigrants who know english as a second language. Use no legalese. Keep the explanations simple and straight forward.

The main page should also have a drop down at the top right to translate the full content into English, Spanish and Russian.

### create  the spec directory structure

I want you to write it in to a spec directory and make this a CLAUDE.md file

### implementation

Implement the main page as specificed in @memory/spec/CLAUDE.md

### research (done by independant agent)

You are an expert immigration attorney who specializes in the green card application process. You have deep knowledge in all green card eligibility categories and you know excel in finding all the way to accelerate the green card process.

Create a `research` directory in my google drive and create a file called application_types.yml that lists all green card application types sourced from the official USCIS Green Card Eligibility Categories page: https://www.uscis.gov/green-card/green-card-eligibility-categories. Under each application type, add the following: 
* An explanation of the application type (no more than 4 sentences) 
* The expected target timeline to complete each application type
* The sequence of steps required to complete the application
* A checklist of action items to be completed by the applicant. Add things like what needs to be initially confirmed before the application can be submitted, what is required from the applicant's spouse/employer, potential fees that need to be paid, etc.
* Add any noteworthy information that is specific to the applicant's country of origin like longer-than-normal wait times.
* Generate a template for any and all written communication by the application through the application process. Include instructions like who should the recipient be and when the communication should be sent.
* Add any other helpful suggestions on what can be done to prevent a denied application or delays in the application process.

If you have any other suggestions on what should be included in the list, tell me. If you have any questions as you research, ask me.

### spec v2 design

@research/application_types.yaml has a full list of all U.S. Green Card application types. Use this to design a new version of the app.

A user should be initially prompted to either begin a new session or resume their existing session. All selections should be saved within an exisiting session. At the end of the session, the user will be able to download a pdf file with all of the green card application instructions based on their selections.

The main page should have a header row using the header_title and header_description under static_elements. The top right of the header should contain a language drop down that lets you select English, Spanish or Russian.

The main page body should have a section using the body_title and body_description under static_elements followed by all green card application types with individual sections that can be expanded with detailed information. It should then instruct the user to select any and all green card application types that are relevant to them. Each section should have a checkbox that the use can select. Each expanded section should display the simple_description followed by a table with two columns: "Who you can apply as" and "Who you need to be". The table should be populated with the info in applicants field.

There should be a next button at the top and bottom of the application types section. When selected, the button should take the user to the following page displayed the sequenced steps to complete the application only for the selected application types. Each application type should include all of the information for that application type included in the application_types.yaml file.

The app should have a drop down at the top right to translate the full content into English, Spanish and Russian.

I want you to write all of this in to a specv2 directory and make this a CLAUDE.md file

### implementation v2

Implement the main page as specificed in @memory/specv2/CLAUDE.md  