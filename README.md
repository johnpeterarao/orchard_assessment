Hi Guys! I am John Peter, you can call me john or peter but let's go with Peter since john is way more common than peter haha! 

Here you can see comments on my work


Comments:
1. container size comment = I don't know if we are going to use fluid container or fix width container, usually I asked the designer about this because some prefer fluid and others are fixed. So for this one what I am going to do is fluid container. First I calculated the width of all content and its total width is "1146" and I now will add 40px for the 20px padding that I'm going to apply each side. Now the total width is 1186, now I will divide (1186 / 1440) * 100 = 82.36%; and for beyond 1920px I will set a standard  max-width pixel for the container so that it will not stretch on bigger sizes screen

2. (Grid section) For this kind of section I coordinate with designer if what should be the behaviour of elements. If images should follow the size of the content or content should follow the images column but based on the design I noticed that there is a small gap in the bottom part of the text while on the there's no gap in top. Which means that its not being vertically centered. What I did is that images will follow the content size when the content size is bigger than the image size.

3. I used h1 tag so that this will be the main topic and for search engines also best practice is to only use one h1 per page. *thou I am not sure if my seo basic knowledge is up to date now 

4. I used css property of -webkit-line-clamp so that if ever text is too long it will be cut on 11th line

5. I am not sure if this part here is an article but html5 offers now article tags

6. I used h2 for Sub-heading of the page and I think practice is to only use two h2 per page. *thou I am not sure if my seo basic knowledge is up to date now 

7. I used figure for images and figcaption for the text, although some wyswig editor on cms platform convert figure and figcation to div when rendering. 

8. I set the container max-width to 100% for laptop with smaller size 

9. For better image in mobile, we can have different image size so that important branding or part of the image will not be cropped.

10. I used css property of -webkit-line-clamp so that if ever text is too long it will be cut on 3rd line but also we can cut this via javascript

11. function for animation and it will only run if screen size is greater than 1025. Also upon checking please refresh when browser is resize for more accurate reading of screen size.

12. Code block is dynamic you can change value this is so that it will go back to 0 in translation