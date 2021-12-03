# DSGN 270 Assignment 3 - Social Integration Proof-of-Concept
## Author: Mysia Santana
### Links:

* [Github repo]:(https://github.com/Mysia14/dsgn270-a3)
* [Live integration link]: (https://awesome-hugle-b156ed.netlify.app/)
----------------------------------------------------------------------------------------------------------
## Market and Problem definition
### :pushpin:Potential clients: digital influencers, photographers or anyone who wants to spend less time uploading/updating the recent images or photos in your blog or portfolio. 

-  :camera:  The social media integration, using Instagram, would help any of these clients to get more visibility or even some paid partnership. Instagram gives you the opportunity to learn more about your audience and reach them very easily. 

-  Unsure about adding your Instagram feed to your website? Please take a look at[Benefits of adding an Instagram feed to your feed](https://flockler.com/blog/instagram-feed-on-website-examples).

## :city_sunset: How to add a image/photo to the website (Task Flow):

1. Open Instagram.com in a web browser and then enter your Instagram username or the phone number or email address associated with the account. After that, enter your password and tap Log In.

2. Creat a new post 
    * Click the + button in the top right corner. It'll appear between the messages and compass icons.
    * Drag and drop photos or videos, or select from your computer.
    * Add filters and edits to your post. 
    * Add a caption and geo tag, and tag people in the post.(Don't forget to add the #trip on your caption so your recent photo will be displayed to your website).
 
4. Click Share.

5. Close the Post Share window.

5. Then go back to your page. 

6. Refresh it and check your new post in the page.

1. Go to (https://awesome-hugle-b156ed.netlify.app/)


 
-----------------------------------------------------------------------------------------------------

## API Documentation

- The [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api) allows users of your app to get basic profile information, photos, and videos in their Instagram accounts. The API can be used to access any type of Instagram account but only provides read-access to basic data.   

- To generate a Token: (https://developers.facebook.com/docs/instagram-basic-display-api/overview#user-token-generator).

- For more guidance on getting through our App Review process, please see [click here](https://developers.facebook.com/blog/post/2020/03/10/final-reminder-Instagram-legacy-api-platform-disabled-mar-31/).

- All the endpoints must start with "graph.instagram.com"

- Refer to the developer documentation [here](https://developers.facebook.com/docs/instagram-basic-display-api/overview#user-token-generator) to learn more. 

## :lock: Security & Instagram Policy:

- [What kinds of information does Instagram collect?](help.instagram.com/519522125107875/?helpref=uf_share)
- We use a token to get access to the account
- [Get Access Tokens and Permissions](https://developers.facebook.com/docs/instagram-basic-display-api/guides/getting-access-tokens-and-permissions/).


### :closed_lock_with_key: For Developers - Secure API token/key: 
:lock: How to Get Instagram Access Token 

Step 1 - Register Application on Facebook for Developers. 
          1.1 Log into Facebook
          1.2 Go to Facebook Developers Account 
          1.3 Add a New App

Step 2 - Register New App. 

Step 3 - Configure Instagram Basic Display.
          3.1 Click Set Up under the Instagram Basic Display
          3.2 Navigate to the Basic Display and scroll to the very bottom of the page. Click the Create New App button
          3.3 As the name of the App choose the name you created in Step 2

Step 4 - Get the Access Token.
          4.1 Navigate to the Basic Display section
          4.2 Find the Add or Remove Instagram Testers section and click the button
          4.3 Add the Instagram User ID (IG username) for the account you want to add as an Instagram Tester
          4.4 Log into the Instagram account of the username you added as the Instagram Tester
          4.5. Navigate to Settings > Apps and Websites, and click on the Tester Invites tab
          4.6 Click Accept to approve the invitation
          4.7 Now navigate back to the Facebook Developers dashboard
          4.8 Find the app you created, then navigate to Basic Display
          4.9 Scroll to the User Token Generator Section and click the Generate Token button
          4.10 Copy the Access Token from the pop-up window

Step 5 - Copy the Access Token to the Plugin Setting

Step 6: For security reason add the generated token and id number to your ".env file". So it will not show the token  in the public source code.

----------------------------------------------------------------------------------------------------------
# :pushpin:Attributions:
* [Tony Grimmes](https://github.com/acidtone)(Instructor): Code sctructure
* [Jessica Watson](https://github.com/Enyorose) : helped me wiht the functions and to write the user story with proper english and has clarified the assignments instructions for me.

* References:
    - https://docs.oceanwp.org/article/487-how-to-get-instagram-access-token
    - https://developers.facebook.com/docs/instagram-basic-display-api 
    -  Doesn't know to post on Instagram?(https://help.instagram.com/442418472487929)

* Images/posts:
    - Fall Image [Pexel -  Craig Adderley](https://www.pexels.com/photo/concrete-road-between-trees-1563356/).
    - Winter Image [Pexel -Pixabay](https://www.pexels.com/photo/snowy-forest-235621/)
    - Summer Image [Pexel - MarcTutorials from Pexel](https://www.pexels.com/photo/palm-trees-1152359/)
    - Moutain Image [Khorfi_vahle](https://pixabay.com/users/kordi_vahle-4934524/)

