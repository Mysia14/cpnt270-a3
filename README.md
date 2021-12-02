# DSGN 270 Assignment 3 - Social Integration Proof-of-Concept

### :pushpin:Market and Problem definition

- Potential client: digital influencers, photographers or anyone who doesnt want to spend too much time updating their blog wiht their recent images.
-  :camera:  This integration would help A Digital Influencer who wants show her photos from trips around the world to her new blog about traveling so she can get more visibility to get some  paid partnership and  wanna spend less time uploading her blog as she uses much more her instagram . update her portfolio and upgrade her blog faster.
- This tool will be a great choice for those wants make their work more visivble and well known for those who uses this social media tool.
(100-150 word summary of the market and problem that your social media integration solves).





## Clients steps: // explicar o maximo que puder//

1. Go to (netlify link)
2. Open Instagram.com in a web browser and then enter your Instagram username or the phone number or email address associated with the account. After that, enter your password and tap Log In.
3. Creat a new post 
    * Click the + button in the top right corner. It'll appear between the messages and compass icons.
    * Drag and drop photos or videos, or select from your computer.
    * Add filters and edits to your post. 
    * Add a caption and geo tag, and tag people in the post.(Don't forget to add the #trip on your caption so your recent photo will be displayed to your website).
    * 
 
4. Click Share.
5. Then go back to your page and check your new post in the page.

Doesn't know to post on Instagram? Check this out: (https://help.instagram.com/442418472487929)

## API Documentation

-   Instagram Basic Display API :https://developers.facebook.com/docs/instagram-basic-display-api 
- To generate a Token: https://developers.facebook.com/docs/instagram-basic-display-api/overview#user-token-generator
- For more guidance on getting through our App Review process, please see [click here](https://developers.facebook.com/blog/post/2020/03/10/final-reminder-Instagram-legacy-api-platform-disabled-mar-31/)
- All the endpoints must start with "graph.instagram.com"
- Refer to the developer documentation [here](https://developers.facebook.com/docs/instagram-basic-display-api/overview#user-token-generator) to learn more. 
## Security:
- The app is using a secure token they are hidden (procurar documentation sobre seguranca token)
## :pushpin:Attributions:
* [Tony Grimmes](https://github.com/acidtone)(Instructor): Code sctructure
* Images (instagram):Pexels (to add)
* [Jessica Watson](https://github.com/Enyorose) : helped me wiht the functions and to write the story 
* References:
- https://docs.oceanwp.org/article/487-how-to-get-instagram-access-token
- https://developers.facebook.com/docs/instagram-basic-display-api 



### For Developers
:lock: How to Get Instagram Access Token :lock:

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
 ## :pushpin:Submiting requirements:
Zip your project (excluding node_modules and .env file) and submit them to Brightspace.
Include the following as a comment with your Brightspace submission:
Relevant GH repo(s);
Live integration link;
Link to the social media test account;
Login information for the social media test account.
